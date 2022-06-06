export interface ButtonProps {
  type: "submit" | "button";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
