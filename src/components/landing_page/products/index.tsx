import ProductCard from "@/components/cards/product_card";
import TitleCard from "@/components/cards/title_card";

const product = [
    {
        name: "Senhor dos Anéis",
        price: 100,
        image: "https://m.media-amazon.com/images/I/511+-lOOtsL._SY445_SX342_.jpg",
        category: "Category",
        description: "O Senhor dos Anéis (no original em inglês, The Lord of the Rings) é uma trilogia cinematográfica dirigida por Peter Jackson com base na obra-prima homónima de J. R. R. Tolkien. Os três filmes foram rodados em simultâneo na Nova Zelândia.",
        rating: 5,
    },
    {
        name: "Harry Potter",
        price: 100,
        image: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg",
        category: "Category",
        description: "Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.",
        rating: 5,
    },
    {
        name: "Trono de Vidro",
        price: 100,
        image: "https://m.media-amazon.com/images/I/51JQuBI7KYL._SY445_SX342_.jpg",
        category: "Category",
        description: "Quando os demais competidores começam a morrer, um a um e de maneira terrível, Celaena se vê mais uma vez envolvida em uma batalha pela sobrevivência e inicia uma jornada desesperada para desvendar a origem daquele mal antes que ele destrua o mundo dela. E sua única chance de ser livre.",
        rating: 5,
    },
    {
        name: "Vermelho, branco e sangue azul",
        price: 100,
        image: "https://m.media-amazon.com/images/I/71ugcKCFW7L._SL1500_.jpg",
        category: "Category",
        description: "Red, White & Royal Blue é um romance LGBT de 2019 de Casey McQuiston. A trama gira em torno do personagem de Alex Claremont-Diaz, filho da presidente dos Estados Unidos, e seu relacionamento com o príncipe Henry, um príncipe britânico, abordando temas de divergências políticas e também humor.",
        rating: 5,
    },
    {
        name: "Dom casmurro",
        price: 100,
        image: "https://m.media-amazon.com/images/I/41AYWyc6qmL._SY445_SX342_.jpg",
        category: "Category",
        description: "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. Está disponível para download gratuito no Domínio Público. A obra é considerada uma das mais importantes da literatura brasileira.",
        rating: 5,
    },
    {
        name: "Um de nós esta mentindo",
        price: 100,
        image: "https://m.media-amazon.com/images/I/518P8+19XSL._SY445_SX342_.jpg",
        category: "Category",
        description: "One of Us Is Lying é um romance de mistério e thriller jovem adulto escrito por Karen M. McManus. O livro foi publicado em 30 de maio de 2017 pela Delacorte Press, uma divisão da Random House. O romance é a estreia de McManus e foi inspirado no filme de 1985 The Breakfast Club.",
        rating: 5,
    },
];

export default function Products() {
    return (
        <section className="w-full h-auto gap-y-6 flex flex-row flex-wrap justify-around bg-[#011126] py-24">
            <TitleCard>Nossos Best Sealers</TitleCard>

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