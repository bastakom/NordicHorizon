import { Resend } from 'resend'

const usermail = process.env.MARKNAD_EMAIL
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message, phone } = await req.json()

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${email}</h3>
      <p>tel: ${phone}</p>
      <p>Meddelande: ${message}</p>
    </div>
  `
  try {
    const { data, error } = await resend.emails.send({
      from: 'Notifikation: Kontakt Form <onboarding@resend.dev>',
      to: [`${usermail}`],
      subject: `Notifikation: Customer ${name}`,
      html: messageBody,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}




------------------------


"use client";

import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Form = ({ title }: any) => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setSent(true);
      } else {
        setStatus("error");
        setSent(false);
      }
    } catch (error) {
      console.error("Error sending message.", error);
      setStatus("error");
    }
  };

  // Testing form

  return (
    <div className="py-20 flex flex-col w-full justify-center items-center">
      <span className="text-center mb-10 text-[29px]">{render(title)}</span>
      <form className="flex flex-col m-auto form" onSubmit={handleButtonClick}>
        <input
          type="text"
          name="name"
          placeholder="Namn"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Telefon"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          rows={10}
          name="message"
          placeholder="Beskriv önskemål för din resa, te.x. destination, reslängd, avreseperiod, antal resenärer."
          value={formData.message}
          onChange={handleChange}
        />
        <button className="button max-w-[200px]" type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Form;