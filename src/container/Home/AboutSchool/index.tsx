import React from "react";
import "./styles.scss";
import Image from "next/image";
import { Button } from "@/shared/components/button";

export const AboutSchool = () => {
  return (
    <section className="about-school__container">
      <div className="about-school__left">
        <h1>Sobre a escola</h1>
        <Image src="/bannerSchool.png" alt="banner" width={100} height={100} />
      </div>
      <div className="about-school__right">
        <p>
          Fundada em 1995, a Cape Studies oferece um ambiente multicultural e
          acolhedor para quem deseja aprender inglês, com mais de 28 anos de
          experiência no ensino de idiomas.
        </p>
        <Button>Conheça mais sobre a escola</Button>
      </div>
    </section>
  );
};
