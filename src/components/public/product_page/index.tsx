import { Book as Product } from "@prisma/client";
import Book from "../book";
import RatingCard from "../cards/rating_card";
import BuySection from "./buy_section";

interface ProductProps{
    product: Product
}

export default function ProductPage({product}:ProductProps){
    return(
        <main className="w-full flex flex-row text-customWhite">
            <aside className="h-full w-1/3 p-20">
                <Book
                href={product.image}
                alt={product.name}
                />
            </aside>
            <section className="h-full w-2/3 flex flex-col justify-start p-20">
                <p className="font-extrabold text-xl">{product.name}</p>
                <p className="font-light italic text-lg mb-10">{product.category}</p>
                <RatingCard rating={product.rating.toNumber()} />
                <p className="font-medium mt-1 text-justify">{product.description}</p>
                <BuySection price={product.price.toNumber()}/>
            </section>
        </main>
    )
}