import { getProducts } from "@/backend/products/actions";
import ProductCard from "@/components/cards/product_card";
import TitleCard from "@/components/cards/title_card";
import Pagination from "@/components/pagination";

type StoreProps = {
    searchParams: {
        page?: string,
    }
}



export default async function Store({searchParams} : StoreProps){
    const current_page = Number(searchParams?.page) || 1;
    const {products, total_pages} = await getProducts(current_page);
    return(
        <section className="w-full h-auto gap-y-24 flex flex-row flex-wrap justify-around bg-[#011126] py-24">
            <TitleCard>Nossos Livros</TitleCard>

            {products.map((product, index) => (
                <ProductCard
                key={index}
                cardId={index}
                product={product}
                width="w-[28%]"
                heigth="lg:h-96"
                hover={true}
                />
            ))}

            <Pagination 
            base_url="/store" 
            curent_page={current_page} 
            total_pages={total_pages}
            />
        </section>
    );
}