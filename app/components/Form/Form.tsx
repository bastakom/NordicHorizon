"use client";

import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { Toaster, toast } from "sonner";

const Form = ({ title, resend }: any) => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resend_title: resend,
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          resend_title: resend,
        });
        setSent(true);
        toast("Tack för ditt meddelande, vi återkommer snarast!");
      } else {
        setStatus("error");
        setSent(false);
        toast("Tyvärr gick något snett!");
      }
    } catch (error) {
      console.error("Error sending message.", error);
      setStatus("error");
    }
  };

  return (
    <div className="py-20 flex flex-col w-full justify-center items-center">
      <Toaster closeButton={true} />
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
        <button className="button max-w-[200px]" type="submit">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Form;
