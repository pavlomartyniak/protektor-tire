"use client";

import { useState } from "react";
import { SITE, whatsappLink } from "@/lib/site-config";
import { SERVICES } from "@/lib/services";

export const TIME_SLOTS = [
  "Якнайшвидше",
  "Ранок (9:00–12:00)",
  "День (12:00–16:00)",
  "Вечір (16:00–20:00)",
];

function normalizePhone(value: string) {
  return value.replace(/[\s()-]/g, "");
}

export function isValidPhone(value: string) {
  return /^(\+?380|0)\d{9}$/.test(normalizePhone(value));
}

export function useBookingForm(initialService: string = SERVICES[0].title) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService);
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [sentLink, setSentLink] = useState("");

  function reset(nextService?: string) {
    setStep("form");
    setName("");
    setPhone("");
    setService(nextService ?? initialService);
    setTime(TIME_SLOTS[0]);
    setComment("");
    setError("");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Вкажіть, будь ласка, ваше ім'я");
      return false;
    }
    if (!isValidPhone(phone)) {
      setError("Перевірте номер телефону — приклад: 067 898 76 54");
      return false;
    }
    setError("");

    const message = [
      `Запис на СТО ${SITE.name}`,
      `Ім'я: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      `Послуга: ${service}`,
      `Бажаний час: ${time}`,
      comment.trim() ? `Коментар: ${comment.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const link = whatsappLink(message);
    setSentLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
    setStep("success");
    return true;
  }

  return {
    step,
    setService,
    name,
    setName,
    phone,
    setPhone,
    service,
    time,
    setTime,
    comment,
    setComment,
    error,
    sentLink,
    submit,
    reset,
  };
}
