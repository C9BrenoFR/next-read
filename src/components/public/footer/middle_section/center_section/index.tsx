import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGE_PX = 200;

interface CenterSectionProps {
    exibition: "logo" | "mission" | "vision" | "values";
}

export default function CenterSection({ exibition }: CenterSectionProps) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false); 
        const timeout = setTimeout(() => setAnimate(true), 10); 
        return () => clearTimeout(timeout); 
    }, [exibition]); 

    const exibitionContent = {
        logo: (
            <Image
                width={IMAGE_PX}
                height={IMAGE_PX}
                src={'/img/logo.png'}
                alt="Logo do site"
                className="rounded-full border-4 border-customWhite-variant1"
            />
        ),
        mission: (
            <p>
                Conectar leitores aos melhores livros, promovendo conhecimento, cultura e entretenimento acessível para todos. Queremos inspirar pessoas através da leitura e facilitar o acesso a obras que transformam vidas.
            </p>
        ),
        vision: (
            <p>
                Ser a principal referência em venda de livros online, oferecendo um catálogo diversificado, atendimento excepcional e uma experiência de compra intuitiva e satisfatória. Buscamos incentivar o hábito da leitura e impactar positivamente a sociedade.
            </p>
        ),
        values: (
            <p>
                Acreditamos que os livros têm o poder de transformar vidas. Por isso, buscamos oferecer um acervo rico e diversificado, capaz de atender desde leitores iniciantes até os mais ávidos amantes da literatura.
            </p>
        ),
    };

    return (
        <section
            className={`w-1/3 h-full flex justify-center items-center ${
                animate ? "left-entrance" : ""
            }`}
        >
            {exibitionContent[exibition]}
        </section>
    );
}