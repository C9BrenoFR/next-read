import { lastSixBooks } from "@/backend/landing_page/actions";
import ProductCard from "@/components/public/cards/product_card";
import TitleCard from "@/components/public/cards/title_card";

const product = await lastSixBooks();

export default function Products() {
    return (
        <section className="w-full h-auto gap-y-6 flex flex-row flex-wrap justify-around bg-[#011126] py-24">
            <TitleCard>Nossos Best Sellers</TitleCard>

            {product.map((product, index) => (
                <ProductCard
                key={index}
                cardId={index}
                product={product}
                width="w-[28%]"
                heigth="lg:h-96"
                />
            ))}
        </section>
    );
}