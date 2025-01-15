export default function AddToCartButton(){
    return(
        <button className="border-2 rounded p-2 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-customWhite hover:text-[#011126]">
            <span className="material-symbols-outlined ">add_shopping_cart</span>
            <p>
                Adicionar ao carrinho
            </p>
        </button>
    )
}