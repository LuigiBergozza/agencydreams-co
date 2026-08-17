/* uma função do JS em que eu dou um return de um botão */
/*Criando um componente bem pequeno que vai ser utilizado em muitos outros componentes */
/* Diferentes tamanho de botão = com um plugin Tailwind Variants */
/*npm i tailwind-variants*/
/*npm install tailwind-merge*/
/*npm update tailwind-variants = atualizar pacotes*/
/*npm install = reinstalar as dependências*/
/*e apos voltar com o npm run dev*/

import { tv } from "tailwind-variants"; /* Tv = fn para criar um objeto com o default, as estilização default e as variações possíveis */

/* fn tv, fn js. passa para ela um options aqui (objeto)
    bases = objeto de estilização default, classes css 
    variants = objeto de variáveis, classes css que alteram nesse estado
*/

const variants = tv({
  base: "bg-primary dark:bg-secondary dark:text-gray-900 not-disabled:hover:dark:text-secDark shadow-md w-full text-center flex items-center justify-center px-5 py-1.5 outline-none cursor-pointer rounded-md text-secondary not-disabled:hover:bg-priDark font-medium duration-500 not-disabled:active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed",
  /*usando not-disabled mantém a lógica consistente com classes que dependem do estado desabilitado,*/
  /*disabled:opacity-45 = escurecer o botão*/
  variants: {
    variant: {
      secundary: "bg-priDark dark:text-white dark:bg-secDark not-disabled:hover:bg-primary not-disabled:hover:dark:text-secDark",
      baseWhite: "text-text bg-secondary",
      small:
        "text-text bg-secondary w-auto px-5 py-1.5 text-sm" /* Tamanho dinâmico, que se ajustará ao conteúdo */,
      favorite:
        "text-text bg-secondary w-auto px-1.5 py-1.5 flex items-center text-tertiary hover:bg-tertiary focus:bg-tertiary focus:text-secondary hover:text-secondary text-sm",
      smallRed:
        "text-secondary w-auto px-5 py-1.5 text-sm bg-tertiary not-disabled:hover:bg-red-800",
      Red: "text-secondary w-auto px-5 py-1.5 text-sm bg-red-500 hover:bg-red-600",
      Menu: "h-13 w-13 md:h-16 md:w-16 2md:h-20 2md:w-20 p-0 rounded-full bg-priDark not-disabled:hover:bg-tertiary",
    },
  },
});

/*Type Aliases = nome personalizado para um tipo (atribuido a outras variáveis)*/
type Props = {
  children: React.ReactNode /*qualquer el do React | permite que o componente receba qualquer tipo de conteúdo como filho (flexível e reutilizável em diferentes situações)*/;
  variant?: keyof (typeof variants)["variants"]["variant"] /*keyof = tipagem das propr de um objeto | person = {name: 'John', age: 30,} => keyof typeof person = 'name' | 'age' */;
  /*Se houver uma variante, será uma propriendade (keyof) de um tipo da const variants, acessando a propriedade variant dentro da propriedade variants */
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/*
Passando props indicando as variantes do botão para o react, para um componente
    props = propriedades de um componente pai para um componente filho
    
    - function App() = componente pai 
    - Const Button = componente filho
*/

/*Pegando as props dessa maneira*/
/*{Obejto}:props = (nome: tipo) = sintaxe do typescript*/
export const Button = ({ children, variant, ...props }: Props) => {
  /*...props garante capturar todas as propriedades de Props, como a propriedade disabled passada em base*/
  /*ES Modules = Agrupamentos de códigos podem ser compartilhados | O uso de import e export com a sintaxe */
  /*Nativos do JS, react e react-native*/
  return (
    <button className={variants({ variant })} {...props}>
      {children}
    </button>
  );
};
