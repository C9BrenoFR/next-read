import { getProduct } from "@/backend/product/actions"
import ProductPage from "@/components/public/product_page";

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
            <h1>Produto não encontrado...</h1>
        )
    }
}