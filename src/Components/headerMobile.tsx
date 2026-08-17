import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const HeaderMobile = () => {
  return (
    <header className="flex justify-between gap-4 p-4 lg:hidden">
      <Link to="/">
        <Button variant="small">
          <ArrowLeft size={20} />
        </Button>
      </Link>
      <h2 className="text-xl leading-tight font-light italic">
        Detalhes do produto
      </h2>
      <Button variant="favorite">
        <Heart />
      </Button>
    </header>
  );
};
