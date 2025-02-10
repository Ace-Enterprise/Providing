import React from "react";
import "./style.scss";
import Image from "next/image";

export const Download = () => {
  return (
    <div className="download__container">
      <h1>
        Baixe o eBook Completo e Descubra Tudo Sobre Seu Intercâmbio na África
        do Sul!
      </h1>
      <div className="download__content">
        <div className="download__content__left">
          <Image src="/cell 1.png" alt="phone" width={300} height={500} />
        </div>
        <div className="download__content__right">
          <p>
            Translado e outros serviços que tornam sua chegada ainda mais fácil.
          </p>
          <p>
            Seguro viagem e outros detalhes importantes para garantir uma
            experiência tranquila.
          </p>
          <p>
            Opções de acomodação (casa de família, residência estudantil e
            acomodações privadas) com todos os prós e contras.
          </p>
          <button className="download__button">Cadastre-se e faça o download</button>
        </div>
      </div>
    </div>
  );
};
