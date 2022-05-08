import { LinkProps } from "react-router-dom";
import { LinkContainer } from "./styles";

interface IButtonProps extends LinkProps {
  children: React.ReactNode;
  css?: any;
}

function Link({ children, css, ...props }: IButtonProps) {
  return (
    <>
      <LinkContainer css={css} {...props}>
        {children}
      </LinkContainer>
    </>
  );
}

export default Link;
