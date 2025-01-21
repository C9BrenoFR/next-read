import { getProduct } from "@/backend/product/actions"
import NotFound from "@/components/public/cards/not_found";
import ProductPage from "@/components/public/product_page";
import Link from "next/link";

interface SingleProductProps{
    params: {
        id: string
    }
}

export default async function SingleProduct({params}: SingleProductProps){
    const id = params.id
    try{
        const product = await getProduct(id);

        return(
            <ProductPage product={product}/>
        )
    }catch(error){
        return(
            <NotFound>
                <p>Desculpe, não Encontramos esse livro :(</p>
                <Link className="underline" href={"/store"}>Clique Aqui para voltar a loja!</Link>
            </NotFound>
        )
    }
}