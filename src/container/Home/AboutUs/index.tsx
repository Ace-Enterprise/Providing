import React from "react";
import "./styles.scss";
import { Button } from "@/shared/components/button";

export const AboutUs = () => {
  return (
    <section className="about-us__container">
      <h1>Quem somos</h1>
      <p>
        A Providing é uma assessoria de intercâmbio comprometida com a
        excelência, <strong>transparência e suporte integral</strong>.
      </p>
      <p>
        Especializada em destinos acessíveis, como a África do Sul, nossa missão
        é{" "}
        <strong>
          tornar o aprendizado de inglês no exterior uma realidade
        </strong>{" "}
        para brasileiros, oferecendo um atendimento personalizado e experiências
        enriquecedoras.
      </p>
      <p>
        Com uma equipe dedicada no Brasil e no exterior,{" "}
        <strong>
          garantimos segurança e acompanhamento em todas as etapas da sua
          jornada.
        </strong>{" "}
        Venha viver essa transformação com a gente!
      </p>
      <Button>Conheça mais</Button>
    </section>
  );
};
