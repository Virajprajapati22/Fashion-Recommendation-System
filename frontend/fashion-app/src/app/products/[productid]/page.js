"use client";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/utils/customContext";
import { stripHtmlTags } from "@/utils/helper";
import FashionCard from "@/components/fashion-card";
import { CartContext } from "@/utils/cartContext";

export default function ProductDetails({ params }) {
    const { productid } = params;
    const { currState } = useContext(GlobalContext);
    const [currProduct, setCurrProduct] = useState(null);

    const [similarData, setSimilarData] = useState(null);

    const { cartItems, setCartItems } = useContext(CartContext)

    useEffect(() => {
        const { myntraData } = currState;

        const product = myntraData?.filter(item => item?.p_id == productid)
        setCurrProduct(product?.[0])

    }, [currState])

    if (!productid) {
        return <p>Loading...</p>;
    }

    const handleSimilarItemBtn = (e) => {
        e.preventDefault();

        fetch(`http://0.0.0.0:8000/get-similar-products?product_id=${productid}`)
        .then(res => res.json())
        .then(similarData => {
            setSimilarData(similarData);
        })

        return
    }

    const handleAddToCartBtn = (e) => {
        e.preventDefault();

        let exist = cartItems.some(item => item?.p_id == currProduct?.p_id);

        if(!exist) {
            setCartItems([...cartItems, currProduct]);
        }

    }

    return (
        <>
            <div class="bg-gray-100 dark:bg-gray-800 py-8 m-4 rounded-md">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div class="flex justify-center h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img class="w-[20em] h-full object-cover" src={currProduct?.img} alt="Product Image" />
                            </div>
                            <div class="flex -mx-2 mb-4">
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={handleAddToCartBtn}>Add to Cart</button>
                                </div>
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{currProduct?.name}</h2>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                                {stripHtmlTags(currProduct?.description)}
                            </p>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span class="text-gray-600 dark:text-gray-300"> ${currProduct?.price}</span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span class="text-gray-600 dark:text-gray-300"> In Stock</span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Color: </span>
                                <span class="text-gray-600 dark:text-gray-300">{currProduct?.colour}</span>
                            </div>
                            <div class="mb-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                <div class="flex items-center mt-2">
                                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                </div>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {stripHtmlTags(currProduct?.description)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button type="button" onClick={handleSimilarItemBtn} class="flex flex-row justify-between py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg fill="#ffffff" class="h-5 w-5 me-2" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <path d="M3.06,9.64A4.68,4.68,0,1,1,9.64,3.06L10,3a7.83,7.83,0,0,1,1.29.12,6,6,0,1,0-8.13,8.13A7.83,7.83,0,0,1,3,10C3,9.88,3.05,9.76,3.06,9.64Zm8.68-5.38A5.74,5.74,0,0,0,10.24,4H10a6,6,0,0,0-6,6c0,.08,0,.16,0,.24a5.74,5.74,0,0,0,.25,1.5,6,6,0,1,0,7.48-7.48ZM10,14.7A4.7,4.7,0,0,1,5.76,12H6a6,6,0,0,0,6-6c0-.08,0-.16,0-.24a4.69,4.69,0,0,1-2,8.94Z" /> </g>

                    </svg>
                    Similar Products
                </button>
            </div>

            <div className="flex flex-row flex-wrap justify-center">
                {Array.isArray(similarData) && similarData.length > 0 && similarData.map((data, index) => {
                    return (
                        <FashionCard key={index} currItem={data} />
                    )
                })}
            </div>
        </>

    )
}