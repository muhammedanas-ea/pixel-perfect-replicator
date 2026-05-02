import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PillButton({ children, icon, className = "", onClick }: PillButtonProps) {
  return (
    <button onClick={onClick} className={`pill-btn ${className}`}>
      <span>{children}</span>
      <span className="pill-btn-icon">{icon ?? <ArrowRight className="h-4 w-4" />}</span>
    </button>
  );
}
