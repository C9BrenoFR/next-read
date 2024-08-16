import Image from "next/image";
import { isEven } from "@/app/js/isEven";

interface Product{
    name : string,
    price : number,
    image : string,
    category : string,
    description : string,
    rating : number,
}

interface ProductCardProps {
    width : string,
    heigth : string,
    product : Product,
    cardId? : number,
}

const even = "neon-effect";
const odd = "neon-effect-2";

export default function ProductCard({width, product, heigth, cardId}: ProductCardProps) {
    return (
        <article className={` ${width} ${heigth} p-3 pl-24 `}>
            <div className={` relative w-full h-full border-2 flex justify-end rounded rounded-se-3xl ${isEven(cardId) ? even : odd} ease-in-out transition-transform duration-300 hover:scale-110`}>
                <div className="absolute w-3/4 h-3/4 left-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image
                    className="rounded-sm rounded-se-3xl"
                    src={product.image} 
                    alt={product.name} 
                    sizes='100vw'
                    style={{ width: "100%", height: "100%" }}
                    width={500}
                    height={300}
                    />
                </div>
                <div className="w-1/2 flex justify-start p-2">
                    <h1>{product.name}</h1>
                </div>
            </div>
        </article>
    )
}