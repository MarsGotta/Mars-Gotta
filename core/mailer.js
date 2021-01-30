const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
});

const mailer = ({ email, name, text, subject }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "marcelagotta@gmail.com",
    subject: `MarsGotta.com | ${subject}`,
    text: `
      Hola! has recibido un nuevo mensaje de: ${name} - ${email}.
      "${text}"
      `,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export { mailer };
