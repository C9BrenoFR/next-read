import AddToCartButton from "../../custom_buttons/add_to_cart_button"

interface BuySectionProps{
    price: number
}

export default function BuySection({price}: BuySectionProps){
    return(
        <section className="flex flex-row gap-2 mt-6 items-center">
            <p className="text-lg">
                {"R$" + price.toLocaleString()}
            </p>
            <AddToCartButton/>
        </section>
    )
}