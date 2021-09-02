import { mailer } from "../../core/mailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email = "", name = "", message = "", subject = "" } = req.body;
    await mailer({ email, name, text: message, subject });
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
