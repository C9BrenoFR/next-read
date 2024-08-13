'use client';
import Link from "next/link";
import { useState } from "react";
import NavLink from "../nav_link";

export default function Header() {
  return (
    <header className="bg-customWhite flex justify-center h-14">
      <div className="w-1/3 flex items-center justify-between h-full">
        <NavLink href="/" originalText={<span className="material-symbols-outlined">store</span>} hoverContent={<p>Loja</p>} />
        <NavLink href="/" originalText={<span className="material-symbols-outlined">call</span>} hoverContent={<p>Contato</p>} />
        <Link
          href="/"
          className="bg-[#011126] text-[#0cdbf2] h-full flex items-center justify-center px-4 rounded-b-2xl font-cinzel transition-transform duration-300 hover:neon-effect hover:scale-110"
        >
          Next Read
        </Link>
        <NavLink href="/" originalText={<span className="material-symbols-outlined">account_circle</span>} hoverContent={<p>Login</p>} />
        <NavLink href="/" originalText={<span className="material-symbols-outlined">settings</span>} hoverContent={<p>Gerenciamento</p>} />
      </div>
    </header>
  );
}
