// src/components/products/ProductCard.tsx
import type { ProductWithImages } from "@/interfaces";
import { useState } from "react";

interface Props {
    product: ProductWithImages;
}

export const ProductCard = ({ product }: Props) => {

    const images = product.images.split(',').map(img => {
        return img.startsWith('http')
            ? img
            : `${import.meta.env.PUBLIC_URL}/images/products/${img}`;
    });

    const [currentImage, setCurrentImage] = useState(images[0]);
    // Este no es un comentario JSX
    return (
<<<<<<< HEAD
        <a href={`/products/${product.slug}`} className="block">
            <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg border flex flex-col h-full">
                <div className="relative flex-1">
                    <img
                        src={currentImage}
                        alt={product.title}
                        className="h-[350px] w-full object-cover rounded-t-lg"
                        onMouseEnter={() => setCurrentImage(images[1] ?? images[0])}
                        onMouseLeave={() => setCurrentImage(images[0])}
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h4 className="text-lg font-medium">{product.title}</h4>
                    <p className="text-xl font-medium mb-2">${product.price}</p>
                    <button className="mt-auto bg-[#d5d6c3] hover:bg-[#231f20] text-black hover:text-[#d5d6c3] font-bold py-2 px-4 rounded-lg border transition duration-200 ease-in-out w-full">
                        Ver Producto !
                    </button>
                </div>
            </div>
        </a>
=======
            < a href={`/products/${product.slug}`}>
        <div className="w-[90%] mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg border">
        <div className="relative">
            <img
                    src={currentImage}
                    alt={product.title}
                    className="h-[31.25rem] w-[31.25rem]  max-[572px]:w-[20rem] max-[572px]:pt-4 mx-auto object-cover rounded-lg pt-2 "
                    onMouseEnter={() => setCurrentImage(images[1] ?? images[0])}
                    onMouseLeave={() => setCurrentImage(images[0])}
                />
            
            <div className="p-4">
            <h3 className="text-lg font-medium mb-2 text-[#231f20] mt-2">{product.title}</h3>
            <p className="text-[#b8b7b8] text-sm mb-4 max-[572px]:hidden">{product.description}</p>
            
            <div className=" grid grid-cols-3 grid-rows-1 ">
                <span className="font-bold text-lg text-[#231f20] col-span-2">${product.price}</span>
                
                <button className="button col-start-3 ">
                <a href={`/products/${product.slug}`} className=" bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg border border-yellow-500 transition duration-200 ease-in-out">Ver Producto !</a>
                </button>
            </div>
            </div>
          </div>
      </div>
      </a>
      
>>>>>>> 284a5e682a8299919aa1a02843a926017fc24245
    );
};
