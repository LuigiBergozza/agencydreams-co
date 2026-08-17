import React from "react";

interface ProjectCardProps {
  category: string;
  description: string;
  imageSrc?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  description,
  imageSrc = "./src/assets/p1.jpg",
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-md dark:shadow-lg transition-all duration-300 hover:border-primary/50">
      {/* Imagem no topo do card */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={category}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Conteúdo textual */}
      <div className="flex flex-col gap-2 p-6">
        <span className="text-primary dark:text-secondary text-xs font-bold uppercase tracking-wider">
          {category}
        </span>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};