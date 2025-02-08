import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./styles.scss";

export const Nav = () => {
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
  return (
    <nav className="nav__container">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Link>
      <ul className="nav__links">
        {paths.map((path) => (
          <li key={path.href} className="nav__link">
            <Link href={path.href}>{path.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
