import { getProducts } from "@/backend/products/actions";
import ProductCard from "@/components/public/cards/product_card";
import TitleCard from "@/components/public/cards/title_card";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/public/search_bar";

type StoreProps = {
    searchParams: Promise<{
        page?: string,
        search?: string,
    }>
}



export default async function Store({searchParams} : StoreProps){
    const params = await searchParams
    const current_page = Number(params?.page) || 1;
    const search = params?.search;
    const {products, total_pages} = await getProducts(current_page, search);
    return(
        <section className="w-full h-auto gap-y-24 flex flex-row flex-wrap justify-around bg-[#011126] py-24">
            <TitleCard>Nossos Livros</TitleCard>

            <SearchBar value={search && search} base_url="/store">Pesquise um titulo...</SearchBar>

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
            search={search}
            />
        </section>
    );
}