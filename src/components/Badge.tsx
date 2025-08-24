import React from "react";
import clsx from "clsx";

export type BadgeVariant = "default" | "success" | "warning" | "error";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "default", className }) => {
  const baseStyles =
    "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";

  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-700",
  };

  return (
    <span className={clsx(baseStyles, variantStyles[variant], className)}>
      {label}
    </span>
  );
};
