
import nodemailer from "nodemailer";

export default async function emailer(subject, email, template) {  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "login",
      user: process.env.EMAIL,
      pass: process.env.EMAILKEY,
    },
  });
  const options = {
    subject: subject,
    from: "WOLFX Academy",
    to: email,
    html: template,
  };
  try {
    await transporter.sendMail(options);
    return true;
  } catch (err) {
    throw err;
  }
}
