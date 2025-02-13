"use client"; // Adicione esta linha no topo do arquivo
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./styles.scss";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const paths = [
    {
      title: "Quem somos",
      href: "/quem-somos",
    },
    {
      title: "A escola",
      href: "/escola",
    },
    {
      title: "Cursos",
      href: "/cursos",
    },
    {
      title: "Acomodações",
      href: "/acomodacoes",
    },
    {
      title: "Ebook",
      href: "/ebook",
    },
    {
      title: "Contato",
      href: "/contato",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav__container">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Link>

      {/* Botão do hamburger */}
      <button className="nav__hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Lista de links */}
      <ul className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
        <span onClick={() => {
          setIsMenuOpen(false);
        }}>x</span>
        {paths.map((path) => (
          <li key={path.href} className="nav__link">
            <Link href={path.href}>{path.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};