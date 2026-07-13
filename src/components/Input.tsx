import React, { useId } from "react";

interface BaseInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

type InputProps = BaseInputProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = BaseInputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectProps = BaseInputProps & React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  required,
  className = "",
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-semibold text-stone-700 mb-1.5"
        >
          {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={`${error ? errorId : ""} ${helperText ? helperId : ""}`.trim() || undefined}
        className={`form-input w-full px-4 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-base ${
          error ? "border-error bg-error-bg" : ""
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="error-message mt-1 text-sm text-error font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="mt-1 text-xs text-stone-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  required,
  rows = 4,
  className = "",
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-semibold text-stone-700 mb-1.5"
        >
          {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        id={id}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={`${error ? errorId : ""} ${helperText ? helperId : ""}`.trim() || undefined}
        className={`form-input w-full px-4 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-base resize-y ${
          error ? "border-error bg-error-bg" : ""
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="error-message mt-1 text-sm text-error font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="mt-1 text-xs text-stone-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  required,
  options,
  className = "",
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-semibold text-stone-700 mb-1.5"
        >
          {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={`${error ? errorId : ""} ${helperText ? helperId : ""}`.trim() || undefined}
          className={`form-input w-full px-4 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-base appearance-none ${
            error ? "border-error bg-error-bg" : ""
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom arrow indicator */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-600">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      {error && (
        <p id={errorId} className="error-message mt-1 text-sm text-error font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="mt-1 text-xs text-stone-500">
          {helperText}
        </p>
      )}
    </div>
  );
};
