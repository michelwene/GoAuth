import { FiAlertCircle } from "react-icons/fi";
import { Content } from "./styles";

interface ErrorInputProps {
  children: React.ReactNode;
}

export function ErrorInput({ children }: ErrorInputProps) {
  return (
    <Content>
      <FiAlertCircle size={20} color="#c53030" fontWeight={700} />
      <p>{children}</p>
    </Content>
  );
}
