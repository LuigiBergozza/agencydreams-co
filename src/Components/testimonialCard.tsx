import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  ratingText?: string;
  avatarSrc?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  ratingText = "Classificado como 5 de 5",
  avatarSrc = "./src/assets/1.png", 
}) => {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-md dark:shadow-lg">
      <div className="flex flex-col gap-3">
        {/* Avaliação em Estrelas */}
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400" />
          ))}
        </div>
        
        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
          {ratingText}
        </span>

        {/* Depoimento */}
        <p className="text-neutral-700 dark:text-neutral-300 text-sm italic leading-relaxed">
          “{quote}”
        </p>
      </div>

      {/* Perfil do Autor com Foto Redonda */}
      <div className="flex items-center gap-3">
        <img
          src={avatarSrc}
          alt={author}
          className="h-10 w-10 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
        />
        <span className="text-neutral-900 dark:text-white font-bold text-sm">
          {author}
        </span>
      </div>
    </div>
  );
};