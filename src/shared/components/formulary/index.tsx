import React from "react";

import "./style.scss";

export const Formulary = () => {
  return (
    <div className="formulary__container">
      <h1>Entre em Contato</h1>
      <form action="https://formsubmit.co/wiestmiguel@gmail.com" method="POST">
        <label>
          Nome:
          <input type="text" name="Nome" />
        </label>
        <label>
          E-mail:
          <input type="email" name="Email" />
        </label>
        <label>
          telefone:
          <input type="tel" name="Telefone" />
        </label>
        <label>
          Acomodação:
          <select name="Acomodação">
            <option>Casa de Família (Homestay)</option>
            <option>Residência Estudantil</option>
            <option>Residência Escolar</option>
          </select>
        </label>
        <label>
          Curso:
          <select name="Curso">
            <option value="intensive">Intensivo</option>
            <option value="semi-intensive">Semi-Intensivo</option>
          </select>
        </label>
        <label>
          Faixa de idade:
          <select name="Faixa de idade">
            <option>18-25</option>
            <option>26-35</option>
            <option>36-45</option>
            <option>46-55</option>
            <option>56+</option>
          </select>
        </label>
        <label>
          Intenção de viagem:
          <select name="Intenção de viagem">
            <option>Crescimento na carreira; experiência cultural</option>
            <option>Realização de um sonho</option>
            <option>Aprender novo idioma</option>
            <option>Aperfeiçoamento do idioma</option>
            <option>Autoconhecimento</option>
          </select>
        </label>
        <label>
          Atuação:
          <select name="Atuação">
            <option>Trabalhar</option>
            <option>Estudar</option>
            <option>Estudo e Trabalho</option>
          </select>
        </label>
        <label>
          Gênero:
          <select name="Gênero">
            <option>Feminino</option>
            <option>Masculino</option>
            <option>Outro</option>
          </select>
        </label>
        <label>
          Raça
          <select name="Raça">
            <option>Branca</option>
            <option>Parda</option>
            <option>Preta</option>
            <option>Amarela</option>
            <option>Indígena</option>
          </select>
        </label>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://providing.com.br"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
