import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const booksData = [
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
    {
      name: "A cinco passos de você",
      price: 100,
      image: "https://m.media-amazon.com/images/I/81Q11TuUR3L._SL1500_.jpg",
      category: "Category",
      description: "One of Us Is Lying é um romance de mistério e thriller jovem adulto escrito por Karen M. McManus. O livro foi publicado em 30 de maio de 2017 pela Delacorte Press, uma divisão da Random House. O romance é a estreia de McManus e foi inspirado no filme de 1985 The Breakfast Club.",
      rating: 5,
    },
    {
      name: "A revolução dos bichos",
      price: 100,
      image: "https://m.media-amazon.com/images/I/515LCJZ+kPL._SY445_SX342_.jpg",
      category: "Category",
      description: "One of Us Is Lying é um romance de mistério e thriller jovem adulto escrito por Karen M. McManus. O livro foi publicado em 30 de maio de 2017 pela Delacorte Press, uma divisão da Random House. O romance é a estreia de McManus e foi inspirado no filme de 1985 The Breakfast Club.",
      rating: 5,
    },
    {
      name: "A Paciente Silenciosa",
      price: 120,
      image: "https://m.media-amazon.com/images/I/413th2NQc8L._SY445_SX342_.jpg",
      category: "Suspense",
      description: "A Paciente Silenciosa é um romance de mistério psicológico de Alex Michaelides que conta a história de uma mulher acusada de matar o marido e o terapeuta que tenta desvendar o mistério.",
      rating: 4.5
    },
    {
      name: "Daisy Jones & The Six",
      price: 90,
      image: "https://m.media-amazon.com/images/I/516FyELi9IL._SY445_SX342_.jpg",
      category: "Ficção",
      description: "Daisy Jones & The Six é um romance de Taylor Jenkins Reid sobre a ascensão e queda de uma banda de rock fictícia nos anos 70.",
      rating: 4.7
    },
    {
      name: "É Assim Que Acaba",
      price: 100,
      image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._SY466_.jpg",
      category: "Romance",
      description: "É Assim Que Acaba é um romance de Colleen Hoover que explora temas de amor, sacrifício e superação de traumas pessoais.",
      rating: 4.8
    },
    {
      name: "O Homem de Giz",
      price: 80,
      image: "https://m.media-amazon.com/images/I/41ar20EMYLL._SY445_SX342_.jpg",
      category: "Mistério",
      description: "O Homem de Giz, de C.J. Tudor, é um thriller que alterna entre o passado e o presente, envolvendo segredos sombrios e crimes não resolvidos.",
      rating: 4.3
    },
    {
      name: "Pequenos Incêndios por Toda Parte",
      price: 95,
      image: "https://m.media-amazon.com/images/I/51gFlsFWZOL._SY445_SX342_.jpg",
      category: "Drama",
      description: "Pequenos Incêndios por Toda Parte, de Celeste Ng, é uma história sobre família, maternidade e as tensões raciais em uma comunidade suburbana.",
      rating: 4.6
    },
    {
      name: "A Garota no Trem",
      price: 85,
      image: "https://m.media-amazon.com/images/I/51s6lglXdSL._SY445_SX342_.jpg",
      category: "Suspense",
      description: "A Garota no Trem, de Paula Hawkins, é um thriller psicológico que acompanha uma mulher cuja curiosidade a leva a se envolver em um crime perturbador.",
      rating: 4.4
    },
    {
      name: "A Sombra do Vento",
      price: 110,
      image: "https://m.media-amazon.com/images/I/51JpWJwwJ9L._SY445_SX342_.jpg",
      category: "Ficção",
      description: "A Sombra do Vento, de Carlos Ruiz Zafón, é um romance cheio de mistério e emoção ambientado em Barcelona, centrado em um livro que muda a vida de seu protagonista.",
      rating: 4.9
    },
    {
      name: "1984",
      price: 70,
      image: "https://m.media-amazon.com/images/I/71lISOF1SNL.jpg",
      category: "Distopia",
      description: "1984, de George Orwell, é um clássico que explora temas de opressão, vigilância e controle em um regime totalitário.",
      rating: 4.8
    }
];

  for (const book of booksData) {
    await prisma.book.create({
      data: book,
    });
  }

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });