import { GlobalContext } from "@/utils/customContext";
import Link from "next/link";
import { useContext, useEffect } from "react";

const FashionCard = (props) => {

    const { currItem } = props;
    const { p_id, img, color, brand, name, price, ratingCount, description, avg_rating } = currItem;

    const { currState, setNewItem } = useContext(GlobalContext)

    useEffect(() => {
        const { myntraData } = currState;
        setNewItem(currItem);
    }, [])

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`w-4 h-4 ${i <= rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col justify-between">
            <Link href={`/products/${p_id}`}>
                <img className="p-8 rounded-t-lg" src={img} alt="product image" />
            </Link>
            <div className="px-5 pb-5 flex-grow flex flex-col justify-between">
                <div>
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {renderStars(Math.round(avg_rating))}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{avg_rating ? avg_rating.toFixed(1) : 0}</span>
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-400">({ratingCount ?? 0} ratings)</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white mr-2">Rs.{price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default FashionCard;