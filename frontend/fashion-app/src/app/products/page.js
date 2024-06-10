"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductSection from "@/components/product-sections";
import { GlobalContext } from "@/utils/customContext";
import { useState, useEffect, useContext } from "react";

export default function Products() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(12);

    const { setGlobalStateData } = useContext(GlobalContext);

    const fetchData = async () => {
        const data = await getData(page, pageSize);
        setData(JSON.parse(data));
        setGlobalStateData(JSON.parse(data))
    };

    useEffect(() => {
        fetchData();
    }, [page, pageSize]);

    return (
        <>
            <ProductSection data={data} />

            <div class="flex justify-center mt-4 rounded-md">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                </button>

                <button onClick={() => setPage(prev => prev + 1)} class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </>
    );
}


const getData = async (page = 1, pageSize = 10) => {
    const res = await fetch(`http://0.0.0.0:8000/get-myntra-fashion-data?page=${page}&page_size=${pageSize}`);
    return await res.json();
};
