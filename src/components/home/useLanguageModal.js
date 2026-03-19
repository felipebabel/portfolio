import { useState, useEffect } from "react";

const CV_LINKS = {
  pt: "https://docs.google.com/document/d/1-Y-Kb-gFcNdUCkq0TFZOsOT1nHZX9iXzPtyX5YcL2r0/export?format=pdf",
  en: "https://docs.google.com/document/d/1diMQHEXTbfS2RlwypjUNfvbQ6uPJ1_Nl6eCtzo5yUFU/export?format=pdf",
};

export function useLanguageModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(v => !v);

  const downloadCV = (language) => {
    const url = CV_LINKS[language] ?? CV_LINKS.en;
    window.open(url, "_blank", "noopener,noreferrer");

    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return { isOpen, toggle, downloadCV };
}
