import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import Layout from "./../layout/Layout";
import MarsInput from "../components/mars-input/MarsInput";
import MarsTextarea from "../components/mars-textarea/MarsTextarea";
import MarsButton from "../components/mars-button/MarsButton";

export default function Contact() {
  const config = { title: "Contacto" };

  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
    all: true,
  });
  const [isSended, setIsSended] = useState(false);

  const validateInput = (name) =>
    !isValid[name] ? styles["invalid-input"] : "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    setIsValid({
      ...isValid,
      [name]: true,
    });
  };

  const sendRequest = ({ name, email, subject, message }) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    }).then(() => {
      setState({
        ...state,
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSended(true);
    });
  };

  const handlePress = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = state;
    let newObj = {};
    for (let input in state) {
      if (!state[input]) {
        newObj[input] = false;
      } else {
        newObj[input] = true;
      }
    }
    if (name && email && subject && message) {
      setIsValid({
        ...isValid,
        ...newObj,
        all: true,
      });
      sendRequest({ name, email, subject, message });
    } else {
      setIsSended(false);
      setIsValid({
        ...isValid,
        ...newObj,
        all: false,
      });
    }
  };

  return (
    <Layout config={config}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p style={{ fontSize: "18px", margin: "15px 0" }}>
        ¡Hola! Si me quieres hacer una pregunta o contactar conmigo, rellena
        siguiente el formulario.
      </p>
      <form role="form" onSubmit={handlePress}>
        <MarsInput
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          onEnter={handlePress}
          className={validateInput("name")}
          value={state.name}
        />
        <MarsInput
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          onEnter={handlePress}
          className={validateInput("email")}
          value={state.email}
        />
        <MarsInput
          placeholder="Asunto"
          name="subject"
          onChange={handleChange}
          onEnter={handlePress}
          className={validateInput("subject")}
          value={state.subject}
        />
        <MarsTextarea
          placeholder="Mensaje"
          name="message"
          onChange={handleChange}
          onEnter={handlePress}
          className={validateInput("message")}
          value={state.message}
        />

        <div className={styles["validate-box"]}>
          <MarsButton className={styles["button-send"]}>Enviar</MarsButton>
          {!isValid.all ? (
            <span className={styles["validate-span"]}>
              Rellena todos los campos.
            </span>
          ) : null}

          {isSended ? (
            <span className={styles["sended-span"]}>
              Formulario enviado! :). Pronto me pondré en contacto contigo.
            </span>
          ) : null}
        </div>
      </form>
    </Layout>
  );
}
