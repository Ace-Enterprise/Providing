import React from "react";
import "./style.scss";
export const FormularyContact = () => {
  return (
    <div className="formulary__container">
      <h1>Entre em Contato</h1>
      <form action="https://formsubmit.co/contato@providing.com.br" method="POST">
      <input type="hidden" name="Formulário para contato" value='' />
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
          Mensagem:
          <textarea name="Mensagem"></textarea>
        </label>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://providing.com.br" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
