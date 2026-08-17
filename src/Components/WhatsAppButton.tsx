import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "5500000000000", // Insira o número da empresa aqui (DDD + Número)
  message = "Olá! Gostaria de fazer um orçamento.",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {/* Efeito Ring / Pulso animado ao redor do botão */}
      <span className="absolute inset-0 -z-10 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />

      {/* Ícone do WhatsApp */}
      <MessageCircle className="h-7 w-7 fill-white stroke-none transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
};