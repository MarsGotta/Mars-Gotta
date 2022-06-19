import Head from "next/head";
import { useState, useEffect } from "react";
import { useConfigContext } from "../core/config-context";

import styles from "../styles/Contact.module.css";
import locales from "../locales/contact.i18n.js";

import MarsInput from "../components/mars-input/MarsInput";
import MarsTextarea from "../components/mars-textarea/MarsTextarea";
import MarsButton from "../components/mars-button/MarsButton";

export default function Contact(props) {
  const { locale } = props;
  const i18n = locales[locale];
  const config = { title: i18n.headTitle }
  const { configState, setConfigState } = useConfigContext();

  useEffect(() => {
    setConfigState({ ...configState, ...config });
  }, []);

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

  const validateInput = (name) => {
    return !isValid[name] && styles["invalid-input"];
  };
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
    e?.preventDefault();
    const { name, email, subject, message } = state;
    let inputs = {};
    for (let input in state) {
      inputs[input] = Boolean(state[input]);
    }
    if (name && email && subject && message) {
      setIsValid({
        ...isValid,
        ...inputs,
        all: true,
      });
      sendRequest({ name, email, subject, message });
    } else {
      setIsSended(false);
      setIsValid({
        ...isValid,
        ...inputs,
        all: false,
      });
    }
  };

  return (
    <>
      <Head>
        <title>{ i18n.headTitle } | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles["form-info"]}>
        <form role="form" className={styles["form-box"]} onSubmit={handlePress}>
          <p className={styles["contact-message"]}>
            { i18n.description }
          </p>
          <MarsInput
            placeholder={ i18n.inputName }
            name="name"
            onChange={handleChange}
            onEnter={handlePress}
            className={`${validateInput("name")} ${styles["input-name"]} ${styles["input"]}`}
            value={state.name}
          />
          <MarsInput
            placeholder={ i18n.inputEmail }
            name="email"
            onChange={handleChange}
            onEnter={handlePress}
            className={`${validateInput("email")} ${styles["input-email"]} ${styles["input"]}`}
            value={state.email}
          />
          <MarsInput
            placeholder={ i18n.inputSubject }
            name="subject"
            onChange={handleChange}
            onEnter={handlePress}
            className={`${validateInput("subject")} ${styles["input"]}`}
            value={state.subject}
          />
          <MarsTextarea
            placeholder={ i18n.inputMessage }
            name="message"
            onChange={handleChange}
            className={`${validateInput("message")} ${styles["input"]}`}
            value={state.message}
          />

          <div className={styles["validate-box"]} role="presentation">
            <MarsButton onClick={handlePress} className={styles["button-send"]}>
              { i18n.buttonSend }
            </MarsButton>
            {!isValid.all && (
              <span className={styles["validate-span"]}>
                { i18n.validateMessage }
              </span>
            )}

            {isSended && (
              <span className={styles["sended-span"]}>
                { i18n.sendedMessage }
              </span>
            )}
          </div>
        </form>
        <article>
          <img src="/astronauta-contact.png" alt="contact-info" />
        </article>
      </section>
    </>
  );
}
