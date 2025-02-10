import React from "react";

import "./style.scss";

export const Mission = () => {
  const values = [
    {
      title: "Transparência",
      description:
        "Clareza em todos os processos e acordos com nossos clientes.",
    },
    {
      title: "Comprometimento",
      description:
        "Acompanhamento contínuo desde o planejamento até a experiência no exterior.",
    },
    {
      title: "Parceria",
      description:
        "Trabalho conjunto com os clientes, oferecendo soluções personalizadas.",
    },
    {
      title: "Empatia",
      description: "Cuidado genuíno com a jornada de cada cliente",
    },
    {
      title: "Qualidade",
      description:
        "Excelência nos serviços prestados e nas parcerias estabelecidas",
    },
    {
      title: "Acessibilidade",
      description: "Garantir que o intercâmbio seja viável para todos",
    },
  ];
  return (
    <section className="mission__container">
      <h1 className="title">Missão e valores</h1>
      <div className="content">
        <p>
          A missão da Providing é oferecer aos brasileiros a oportunidade de
          estudar inglês no exterior, superando os desafios financeiros e
          logísticos, para que possam alcançar novas oportunidades profissionais
          e de crescimento pessoal.
        </p>
        <p>
          Nossa proposta é transformar sonhos em realidade, por meio de uma
          assessoria de intercâmbio transparente, dedicada e acessível.
        </p>
      </div>

      <div className="values">
        {values.map((value, index) => (
          <div className="value" key={index}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
