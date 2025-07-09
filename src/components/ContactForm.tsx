"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Button from "./Button";

import { PiArrowRight } from "react-icons/pi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Mensagem enviada com sucesso! 🚀");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error(data.message || "Falha ao enviar mensagem");
    }

    setStatus("");
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <input
            name="name"
            value={form.name}
            required
            placeholder={t("name-input-placeholder")}
            className="bg-surface-background py-3 px-4 rounded-lg placeholder:text-text-secondary"
            onChange={handleChange}
          />
          <input
            name="email"
            value={form.email}
            type="email"
            required
            placeholder={t("email-input-placeholder")}
            className="bg-surface-background py-3 px-4 rounded-lg placeholder:text-text-secondary"
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={form.message}
            required
            placeholder={t("message-input-placeholder")}
            className="bg-surface-background py-3 px-4 rounded-lg placeholder:text-text-secondary"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            text={t("button")}
            icon={<PiArrowRight size={24} />}
            iconPosition="right"
          />
        </div>
        {status && <p>{status}</p>}
      </form>
    </>
  );
}
