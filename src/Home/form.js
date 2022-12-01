import React, { useState } from "react";
import imgConsultor from "../assets/imgs/consultores.svg";
import iconGoogle from "../assets/imgs/google-removebg-preview 1.png";
import "./style.css";
import "./responsividade.css"

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function validadeEmail({ target }) {
    var regex = /\S+@\S+\.\S+/;
    var validateRegex = regex.test(target.value);
    var colorInputEmail = document.querySelector("#email");

    if (validateRegex === false) {
      var ativaEmail = document.querySelector(".email-validate");
      ativaEmail.classList.add("ativado-email-validate");
      colorInputEmail.classList.add("color-validate-email");
      console.log(validateRegex);
    } else if (validateRegex !== false) {
      ativaEmail.classList.remove("ativado-email-validate");
      colorInputEmail.classList.remove("color-validate-email");
      console.log(validateRegex);
    }
  }

  function validadePassword() {
    let ativaValidadePassword = document.querySelector(".password-validate");
    let colorInputPassword = document.querySelector("#password");
    if (password.length < 6) {
      ativaValidadePassword.classList.add("ativado-password-caractere");
      colorInputPassword.classList.add("color-validate-password");
    } else if (password.length >= 6) {
      ativaValidadePassword.classList.remove("ativado-password-caractere");
      colorInputPassword.classList.remove("color-validate-password");
    }
  }
  function valiadeconfirmePassword() {
    let ativaConfirmePassword = document.querySelector(".confirme-password");
    let colorInputConfirmePassword =
      document.querySelector("#confirmePassword");

    if (confirmePassword !== password) {
      ativaConfirmePassword.classList.add("ativado-confirme-password");
      colorInputConfirmePassword.classList.add(
        "color-validate-confirme-password"
      );
    } else if (confirmePassword === password) {
      ativaConfirmePassword.classList.remove("ativado-confirme-password");
      colorInputConfirmePassword.classList.remove(
        "color-validate-confirme-password"
      );
    }
  }

  function clickValidate({ target }) {
    if (email === "") {
      var ativaEmail = document.querySelector(".email-validate");
      ativaEmail.classList.add("ativado-email-validate");
      var colorInputEmail = document.querySelector("#email");
      colorInputEmail.classList.add("color-validate-email");
    } else if (email !== "") {
      ativaEmail = document.querySelector(".email-validate");
      ativaEmail.classList.remove("ativado-email-validate");
      colorInputEmail = document.querySelector("#email");
      colorInputEmail.classList.remove("color-validate-email");
    }

    var regex = /\S+@\S+\.\S+/;
    var validateRegex = regex.test(target.value);
    if (validateRegex !== false) {
      return;
    }
    validadePassword();
    valiadeconfirmePassword();
  }

  return (
    <main className="grid grid-responsivo">
      <div className="div-consultores">
        <header>
          <h1>HERBIG</h1>
          <h3>SOLUÇÕES FINANCEIRAS</h3>
        </header>
        <div className="imgs-p-consultores">
          <img src={imgConsultor} alt="imagens-consultores" />
          <p>Cadastre-se e fale com um dos nossos especialistas</p>
        </div>
      </div>
      <section>
        <div className="cadastro">
          <button id="btn-google">
            <img src={iconGoogle} alt="icone-google" />{" "}
            <span>Continuar com o Google</span>
          </button>
          <span id="span-ou">OU</span>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validadeEmail}
            />
            <span className="email-validate">
              Digite um endereço de email valido
            </span>

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validadePassword}
            />
            <span className="password-validate">
              O password deve conter no mínimo 6 caracteres
            </span>
            <label htmlFor="confirmePassword">Confirme Password</label>
            <input
              id="confirmePassword"
              name="confirmePassword"
              placeholder="Password"
              type="password"
              value={confirmePassword}
              onChange={(e) => setConfirmePassword(e.target.value)}
              onBlur={valiadeconfirmePassword}
            />
            <span className="confirme-password">
              O password não são iguais!
            </span>
            <button id="btn-enviar" onClick={clickValidate}>
              {" "}
              Enviar
            </button>
            <p className="p-form">
              Não tem uma conta? <span>Inscreva-se</span>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Form;
