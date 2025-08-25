import React from "react";
import "./input.css";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Input label text
   */
  label?: string;
  /**
   * Size of the input
   */
  size?: "small" | "medium" | "large";
  /**
   * Show error state
   */
  error?: boolean;
}

/**
 * Primary UI component for text input
 */
export const Input = ({
  label,
  size = "medium",
  error = false,
  disabled = false,
  ...props
}: InputProps) => {
  const mode = error ? "storybook-input--error" : "";
  const disabledClass = disabled ? "storybook-input--disabled" : "";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingRight: "10%" }}>
      {label && <label style={{ fontSize: "14px", fontWeight: 500 }}>{label}</label>}
      <input
        className={[
          "storybook-input",
          `storybook-input--${size}`,
          mode,
          disabledClass,
        ].join(" ")}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
