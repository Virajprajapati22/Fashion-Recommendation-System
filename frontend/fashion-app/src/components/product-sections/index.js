import { useEffect, useState } from "react";
import FashionCard from "../fashion-card";

export default function ProductSection({ data }) {

    const [myntraData, setMyntraData] = useState(null);

    useEffect(() => {
        data && setMyntraData((data));
    }, [data]);

    return (
        <>
            <div className="flex flex-row flex-wrap justify-center">
                {
                    Array.isArray(myntraData) && myntraData?.map((currItem, index) => {
                        return <FashionCard key={index} currItem={currItem} />
                    })
                }
            </div>
        </>
    );
}