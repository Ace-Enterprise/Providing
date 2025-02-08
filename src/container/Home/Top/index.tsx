import React from "react";
import Image from "next/image";
import "./styles.scss";
import { Button } from "@/shared/components/button";

export const HomeTop = () => {
  return (
    <section className="top__container">
      <Image src="/banner.png" alt="banner" width={867} height={867} />
      <div>
        <p>
          Estude inglês na <strong>Cidade do Cabo</strong> e viva uma
          experiência única!
        </p>
        <Button>Faça seu cadastro</Button>
      </div>
    </section>
  );
};
