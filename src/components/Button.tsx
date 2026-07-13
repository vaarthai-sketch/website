import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  as?: "button" | "span" | "div";
  variant?: "primary" | "secondary" | "accent" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  as = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light active:bg-primary-dark shadow-sm border border-transparent",
    secondary: "bg-neutral-light text-primary hover:bg-neutral-muted/10 active:bg-neutral-muted/20 border border-transparent",
    accent: "bg-accent text-white hover:bg-accent-light active:bg-accent-dark shadow-sm border border-transparent",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark",
    white: "bg-white text-primary hover:bg-neutral-light active:bg-neutral-light/80 shadow-sm border border-transparent"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`;

  if (href) {
    // If it's an external link, use standard <a>, else use Next.js <Link>
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClasses} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (as === "span") {
    return (
      <span className={combinedClasses} {...(props as React.HTMLAttributes<HTMLSpanElement>)}>
        {children}
      </span>
    );
  }

  if (as === "div") {
    return (
      <div className={combinedClasses} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
