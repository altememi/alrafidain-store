'use client'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useCallback } from 'react';
import firebaseApp from '@/lib/firebase';
import { Product } from "@prisma/client";
import { useRouter } from 'next/navigation';
import { IoMdClose, IoMdEye } from "react-icons/io";
import ActionButton from '@/app/com/ui/ActionButton';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { MdCheck, MdDelete, MdEdit } from 'react-icons/md';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { FormatPrice } from '@/utils/formatPrice/page';

interface ManageAllProductsProps {
    products: Product[],
}

const ManageAllProducts: React.FC<ManageAllProductsProps> = ({ products }) => {

    const storage = getStorage(firebaseApp);
    const router = useRouter();
    let rows: any = [];

    if (products) {
        rows = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: FormatPrice(product.price),
                inStock: product.inStock,
                category: product.category,
                brand: product.brand,
                images: product.images
            }
        })
    }
    
    const handleProductDelete = useCallback(async (id: string, imagesProducts: any[]) => {
        toast('waiting for delete');
        const handleDeleteImage = async () => {          
            try {
                for (const item of imagesProducts) {
                    if (item.image) {
                        const imageRef = ref(storage, item.image);      
                        await deleteObject(imageRef);
                    }
                }
            } catch (error) { 
                return console.log('error delete images', error);
             }
        };

        await handleDeleteImage();
        axios
            .delete(`/api/product/${id}`)
            .then(() => {
                toast.success('Product deleted successfully');
                router.refresh();
            })
            .catch(() => { toast.error('Error to delete product'); });
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'name', headerName: 'Name', width: 220 },
        {
            field: 'price', headerName: 'Price(USD)', width: 100, renderCell: (params) => {
                return (
                    <>
                        {<span className='font-semibold'>
                            ${params.row.price}
                        </span>}
                    </>
                )
            }
        },
        {
            field: 'inStock', headerName: 'In Stock', width: 100, renderCell: (params) => {
                return (
                    <>
                        {params.row.inStock === true ?
                            <span className='bg-sky-600 p-1 rounded-full text-white'><MdCheck /></span> :
                            <span className='bg-rose-600 p-1 rounded-full text-white'><IoMdClose /></span>}
                    </>);
            }
        },
        { field: 'category', headerName: 'Category', width: 100 },
        // { field: 'brand', headerName: 'Brand', width: 100 },
        {
            field: 'action', headerName: 'Operations', width: 200, renderCell: (params) => {
                return (
                    <div className='flex items-center justify-between gap-2'>
                        <ActionButton icon={MdEdit} onClick={() => { }} disabled={true} />
                        <ActionButton icon={IoMdEye} onClick={() => { }} disabled={true} />
                        <ActionButton icon={MdDelete} onClick={() => handleProductDelete(params.row.id, params.row.images)} disabled={false} />
                    </div>
                );
            }
        },
    ];

    return (
        <div className='m-auto max-w-[1150px]'>
            <div className='w-full h-[650px]'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default ManageAllProducts;