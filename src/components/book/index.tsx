'use client';

import Image from "next/image";


interface BookProps {
    href: string;
    alt: string;
}

export default function Book({ href, alt }: BookProps) {
  return (
    /*
    <div className="BookContainer w-full h-full flex items-center justify-center perspective-900">
        <div
        className="Book w-full h-full relative preserve-3d rotate-y-30 transition-transform-075s"
        onMouseEnter={(e) =>  
            (e.currentTarget.style.transform = "rotateY(0deg)")
        }
        onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "rotateY(-30deg)")
        }
        >
            <Image src={href} alt={alt}
            width={300}
            height={450}
            className="FrontCover w-full h-full absolute rounded-r rounded-l-[3px] shadow-image-shadow"
            />
        </div>
    </div>
    */
    <div
    className="book-container"
  >
    <div className="book">
      <Image
        alt={alt}
        src={href}
        width={3000}
        height={4500}
        />
    </div>
  </div>
  );
}