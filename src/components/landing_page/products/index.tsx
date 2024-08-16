import ProductCard from "@/components/cards/product_card";
import TitleCard from "@/components/cards/title_card";

const product = [
    {
        name: "Senhor dos Anéis",
        price: 100,
        image: "https://via.placeholder.com/180",
        category: "Category",
        description: "Product Description",
        rating: 5,
    },
    {
        name: "Harry Potter",
        price: 100,
        image: "https://via.placeholder.com/180",
        category: "Category",
        description: "Product Description",
        rating: 5,
    },
    {
        name: "Trono de Vidro",
        price: 100,
        image: "https://via.placeholder.com/180",
        category: "Category",
        description: "Product Description",
        rating: 5,
    },
    {
        name: "Vermelho, branco e sangue azul",
        price: 100,
        image: "https://via.placeholder.com/180",
        category: "Category",
        description: "Product Description",
        rating: 5,
    },
    {
        name: "Dom casmurro",
        price: 100,
        image: "https://via.placeholder.com/180",
        category: "Category",
        description: "Product Description",
        rating: 5,
    },
    {
        name: "Um de nós esta mentindo",
        price: 100,
        image: "https://via.placeholder.com/180",
        category: "Category",
        description: "Product Description",
        rating: 5,
    },
];

export default function Products() {
    return (
        <section className="w-full h-auto gap-y-6 flex flex-row flex-wrap justify-around bg-[#011126] py-24">
            <TitleCard title="Nossos Best Sealers" />

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