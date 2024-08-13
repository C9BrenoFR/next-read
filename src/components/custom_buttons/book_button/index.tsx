import Link from "next/link";
import { useState } from "react";

type BookButtonProps = {
    href: string;
    text: string;
};

export default function BookButton({ href, text }: BookButtonProps) {
  const [content, setContent] = useState<React.ReactNode>(<span className="material-symbols-outlined">book</span>);

  const handleMouseEnter = () => {
    setContent(<span className="material-symbols-outlined">menu_book</span>);
  };

  const handleMouseLeave = () => {
    setContent(<span className="material-symbols-outlined">book</span>);
  };
  return (
    <Link href={href}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        <button className="
        bg-[#0cdbf2] text-[#011126] rounded-lg p-2
        flex justify-center content-center
        hover:border-2 hover:border-[#0cdbf2] hover:text-[#0cdbf2] hover:bg-[#011126] transition-all ease-in-out duration-300
        ">
            {text} {content}
        </button>
    </Link>
  );
}   