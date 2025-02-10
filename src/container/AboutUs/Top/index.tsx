import React from "react";

import "./style.scss";
import Image from "next/image";

export const Top = () => {
  return (
    <section className="top">
      <h1 className="title">Quem somos</h1>
      <div className="top__content">
        <p>
          A Providing nasceu de uma experiência pessoal transformadora vivida
          por Nathalia Moreira, fundadora da empresa, durante seu intercâmbio
          para a África do Sul.{" "}
        </p>
        <p>
          Em 2024, Nathalia vivenciou as maravilhas de Cape Town, mas também
          enfrentou desafios com a assessoria de intercâmbio que contratou.{" "}
        </p>
        <p>
          Essa experiência inspirou Nathalia a criar a{" "}
          <strong>
            Providing: uma empresa que se compromete com a transparência,
            respeito e excelência no atendimento
          </strong>{" "}
          , para garantir que outros vivam o melhor da experiência internacional
          de forma segura e acessível.
        </p>
      </div>
      <div className="images">
        <Image src={"/image 4.png"} alt="" width={100} height={100} />
        <Image src={"/image 5.png"} alt="" width={100} height={100} />
      </div>
      <div className="bottom__content">
        <p>
          Após retornar ao Brasil, em maio de 2024, Nathalia iniciou o projeto
          com o objetivo de oferecer intercâmbios de alta qualidade,
          especialmente na África do Sul, país que se mostrou uma excelente
          opção de aprendizado de inglês, com custos mais acessíveis em
          comparação a destinos como os Estados Unidos e Canadá.
        </p>
      </div>
    </section>
  );
};
