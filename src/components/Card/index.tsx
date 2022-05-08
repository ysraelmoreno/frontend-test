import { CardWrapper } from "./styles";

interface ICardProps {
  name: string;
  information: string;
  to: string;
}

function Card({ name, to, information }: ICardProps) {
  return (
    <CardWrapper to={to}>
      <h4>{name}</h4>
      <span>{information}</span>
    </CardWrapper>
  );
}

export default Card;
