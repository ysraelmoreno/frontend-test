import { ContainerWrapper } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

export default Container;
