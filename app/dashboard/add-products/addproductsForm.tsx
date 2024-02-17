'use client'

import Button from "@/app/com/ui/Button";
import Category from "@/app/com/ui/inputs/Category";
import CustomCheckbox from "@/app/com/ui/inputs/CustomCheckbox";
import Input from "@/app/com/ui/inputs/Input";
import SelectColor from "@/app/com/ui/inputs/SelectColor";
import Textarea from "@/app/com/ui/inputs/Textarea";
import firebaseApp from "@/lib/firebase";
import { colors } from "@/utils/Colors";
import { categories } from "@/utils/categories";
import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import axios from "axios";

export type ImageType = {
    color: string,
    colorCode: string,
    image: File | null,
}
export type UploadedImageType = {
    color: string,
    colorCode: string,
    image: string,
}

const AddProductsForm = () => {

    const [isLoading, setIsloading] = useState(false);
    const [images, setImages] = useState<ImageType[] | null>();
    const [isProductCreated, setIsProductCreated] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            description: '',
            brand: '',
            category: '',
            inStock: false,
            images: [],
            price: '',
        }
    });

    useEffect(() => { setCustomValue("images", images) }, [images]);

    useEffect(() => {
        if (isProductCreated) {
            reset();
            setImages(null);
            setIsProductCreated(false);
        }
    }, [isProductCreated])

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // upload images to fb and save product in monogodb
        setIsloading(true);
        let uploadedImages: UploadedImageType[] = [];

        // check for category
        if (!data.category) {
            setIsloading(false); return toast.error('Category isn\'t selected',
                {
                    style: { padding: '16px', color: '#000000' },
                    iconTheme: { primary: '#ff0000', secondary: '#ffffff' },
                });
        }

        // check for images
        if (!data.images || data.images.length === 0) {
            setIsloading(false); return toast.error('You must select at least one image',
                {
                    style: { padding: '16px', color: '#000000' },
                    iconTheme: { primary: '#ff0000', secondary: '#ffffff' },
                });
        }

        const handleImagesUploads = async () => {
            toast.success('Check product, please wait...',
                {
                    style: { padding: '16px', color: '#000000' },
                    iconTheme: { primary: '#008000', secondary: '#ffffff' },
                });

            try {
                for (const item of data.images) {
                    if (item.image) {
                        const fileName = new Date().getTime() + '-' + item.image.name;
                        const storage = getStorage(firebaseApp);
                        const storageRef = ref(storage, `products/${fileName}`);
                        const uploadTask = uploadBytesResumable(storageRef, item.image);

                        await new Promise<void>((resolve, reject) => {
                            uploadTask.on(
                                'state_changed',
                                (snapshot) => {
                                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                    console.log(progress);
                                    
                                    switch (snapshot.state) {
                                        case 'paused': console.log('paused'); break;
                                        case 'running': console.log('running'); break;
                                    }
                                },
                                (err) => {
                                    console.log('error upload');
                                    reject(err);
                                },
                                () => {
                                    getDownloadURL(uploadTask.snapshot.ref).then((DownloaURL) => {
                                        uploadedImages.push({
                                            ...item,
                                            image: DownloaURL
                                        });
                                        console.log('file downloaded', DownloaURL);

                                        resolve();
                                    })
                                        .catch((err) => {
                                            console.log('error downloading', err);

                                            reject(err);
                                        });
                                }
                            );
                        });
                    }
                }

            } catch (error) {
                setIsloading(false);
                console.log('Error handling image uploads', error);
                return toast.error('Error handling image uploads');
            }
        }
        await handleImagesUploads();
        const productData = {...data, images: uploadedImages};
        axios
        .post('/api/product', productData)
        .then(() => {
            toast.success('Product created successfully');
            setIsloading(true);
            router.refresh();
        })
        .catch((err) => { toast.error('Error went wrong when saving product');})
        .finally(() => {setIsloading(false);});
        
    }

    const category = watch('category');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
    }

    const addImageToState = useCallback((value: ImageType) => {
        setImages((prev) => {
            if (!prev) {
                return [value];
            }
            return [...prev, value];
        });
    }, []);

    const removeImageFromState = useCallback((value: ImageType) => {
        setImages((prev) => {
            if (prev) {
                const filteredImages = prev.filter((item) => item.color !== value.color);
                return filteredImages;
            }
            return prev;
        });
    }, []);

    return (
        <>
            <Input
                id={"name"}
                label={"Name"}
                disabled={isLoading}
                register={register}
                errors={errors}
            />
            <Input
                id={"price"}
                label={"Price"}
                disabled={isLoading}
                register={register}
                errors={errors}
            />
            <Textarea
                id={"description"}
                label={"Description"}
                disabled={isLoading}
                register={register}
                errors={errors}
            />
            <CustomCheckbox id={"inStock"} label={"Is the product in stock ?"} register={register} />

            <div className="w-full font-medium">
                <p className="mb-3 font-semibold">Select A Category From List Below</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[50vh] overflow-y-auto">
                    {
                        categories.map((item) => {
                            if (item.label === 'All') return null;

                            return (<div key={item.label} className="col-span">
                                <Category
                                    onClick={(category) => setCustomValue('category', category)}
                                    selected={category === item.label}
                                    label={item.label}
                                    icon={item.icon} />
                            </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="w-full flex flex-col flex-wrap py-10 border-y-[1px] mt-10">
                <div>
                    <h5 className="font-semibold">Select box of product then upload image</h5>
                    <p className="font-medium text-sm">You must upload one image for each box selected.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-[5px] w-full">
                {
                    colors.map((item, index) => {
                        return <SelectColor item={item} key={index}
                            addImageToState={addImageToState}
                            removeImageFromState={removeImageFromState}
                            isProductCreated={isProductCreated}
                        />
                    })
                }
            </div>
            <Button label={isLoading ? <CircularProgress color="warning" size={20} /> : 'Add Product'} onClick={handleSubmit(onSubmit)} />
        </>
    );
}

export default AddProductsForm; 