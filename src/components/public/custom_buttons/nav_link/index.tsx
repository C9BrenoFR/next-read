import Link from "next/link";
import { useState } from "react";

type NavLinkProps = {
    originalText: React.ReactNode; 
    hoverContent: React.ReactNode;
    href: string;
};

export default function NavLink({ originalText, hoverContent, href }: NavLinkProps) {
  const [content, setContent] = useState<React.ReactNode>(originalText);

  const handleMouseEnter = () => {
    setContent(hoverContent);
  };

  const handleMouseLeave = () => {
    setContent(originalText);
  };

  return (
    <Link href={href} className="link"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      {content}
    </Link>
  );
}
