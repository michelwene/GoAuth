import { IconToastError, IconToastSucess } from "assets/icons/icons";
import { Container, IconContainer } from "./styles";

interface CustomToastProps {
  message: string;
  status: "success" | "error";
  title?: string;
}

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
