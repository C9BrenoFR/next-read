import Image from "next/image"

interface NotFoundProps{
    children: any
}

export default function NotFound({children}: NotFoundProps){
    return(
    <section className="w-full fullScreenHeight flex flex-col justify-center items-center bg-customWhite">
        <Image
          className="rounded-full mt-[-40px] w-1/5 h-1/2"
          src="/img/notFound.png"
          alt="Not Found Image"
          width={1000}
          height={1000}
        />
        {children}
    </section>
    )
}