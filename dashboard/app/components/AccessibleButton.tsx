import React from "react";

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
}

export function AccessibleButton({ label, icon, ...props }: AccessibleButtonProps) {
  return (
    <button
      {...props}
      className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 transition hover:bg-cyan-700/20 ${props.className || ''}`.trim()}
      aria-label={label}
    >
      {icon && <span aria-hidden="true" className="mr-2">{icon}</span>}
      <span className="sr-only">{label}</span>
      {props.children}
    </button>
  );
}
