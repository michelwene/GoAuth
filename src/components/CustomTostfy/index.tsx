import { IconToastError, IconToastSucess } from "assets/icons/icons";
import { CustomToastProps } from "types/toastify";
import { Container, IconContainer } from "./styles";

export function CustomToast({ title, message, status }: CustomToastProps) {
  const icon = {
    success: <IconToastSucess />,
    error: <IconToastError />,
  };
  return (
    <>
      <Container typeError={status}>
        <IconContainer>{icon[status]}</IconContainer>
        <div className="message">
          {!!title && <span>{title}</span>}
          <p>{message}</p>
        </div>
      </Container>
    </>
  );
}
