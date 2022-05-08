import { TitleWrapper } from "./styles";

interface ITitleContainer {
  title: string;
  subtitle: string;
}

function TitleContainer({ subtitle, title }: ITitleContainer) {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </TitleWrapper>
  );
}

export default TitleContainer;
