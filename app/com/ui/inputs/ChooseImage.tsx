'use client'

import { ImageType } from "@/app/dashboard/add-products/addproductsForm"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

interface ChooseImageProps {
    item?: ImageType,
    handleFileChnage: (value: File) => void
}


const ChooseImage: React.FC<ChooseImageProps> = (
    { item, handleFileChnage }
) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            handleFileChnage(acceptedFiles[0]);
        }
      }, [])

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
    accept: {'image/*': ['.jpg', '.png']}})

    return (
        <div
            {...getRootProps()}
            className="border-2 rounded-sm border-slate-200 p-2 border-dashed cursor-pointer text-sm
            font-normal text-slate-300 flex items-center justify-center">
                {
                <input className="outline-0" {...getRootProps()}/> &&
                    isDragActive ? (
                        <p>Drag image here.</p>
                    ) : (
                        <p>+ Upload image</p>
                    )
                }
        </div>
    );
}

export default ChooseImage;