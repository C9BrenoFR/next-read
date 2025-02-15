import { isEven } from "@/app/js/isEven";
import Book from "@/components/public/book";
import Image from "next/image";
import { Product } from "@/interfaces/product";
import Link from "next/link";

interface ProductCardProps {
    width : string,
    heigth : string,
    product : Product,
    cardId? : number,
    hover? : boolean,
}

const even = "neon-effect";
const odd = "neon-effect-2";

export default function ProductCard({width, product, heigth, cardId, hover}: ProductCardProps) {
    return (
        <Link href={`/store/${product.id}`} className={` ${width} ${heigth} p-3 pl-24 `}>
            <div className={` relative w-full h-full border-2 flex justify-end rounded rounded-se-3xl ${isEven(cardId) ? even : odd} ${hover ? 'ease-in-out transition-transform duration-300 hover:scale-110' : ''}`}>
                <div className="absolute w-3/4 h-3/4 left-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    {hover ? (
                        <Image
                        src={product.image}
                        alt={product.name}
                        width={3000}
                        height={4500}
                        />                        
                    ) : (
                        <Book href={product.image} alt={product.name} />
                    )}
                </div>
                <div className="w-[60%] flex flex-col justify-start p-2">
                    <h1>{product.name}</h1>
                    <p className="text-xs p-2 mt-2">{product.description}</p>
                </div>
            </div>
        </Link>
    )
}