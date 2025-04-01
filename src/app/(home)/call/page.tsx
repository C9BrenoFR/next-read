import TransparentButton from "@/components/public/custom_buttons/transparent_button";
import LineInput from "@/components/public/inputs/line_input";
import LineTextArea from "@/components/public/inputs/line_text_area";

export default function Call(){
    return(
        <section className="w-full fullScreenHeight flex flex-col justify-center items-center">
            <article className="w-8/12 flex justify-between mb-2">
                <LineInput name="name" placeholder="Seu nome" />
                <LineInput name="email" type="email" placeholder="Seu email" />
                <LineInput name="subject" placeholder="Assunto" />
            </article>
            <LineTextArea name="message" placeholder="Digite sua mensagem" className="w-8/12 h-20"/>
            <div className="w-8/12 mt-2 flex justify-end">
                <TransparentButton type="button">Enviar</TransparentButton>
            </div>
        </section>
    )
}