import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

export enum InputFieldVariant {
  INACTIVE = "inactive",
  FOCUSED = "focused",
  COMPLETED = "completed",
  DISABLED = "disabled",
  ERROR = "error",
}

interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  disabled?: boolean;
  warningText?: string;
  rules?: RegisterOptions;
}

const variantStyles = {
  input: {
    [InputFieldVariant.INACTIVE]: "border border-transparent text-white placeholder-white/50",
    [InputFieldVariant.FOCUSED]: "border border-fprimary-yellow text-white",
    [InputFieldVariant.COMPLETED]: "border border-transparent text-white",
    [InputFieldVariant.DISABLED]: "border border-transparent  bg-fblack-opacity30 ",
    [InputFieldVariant.ERROR]: "border border-fstatus-warning text-white",
  },
  label: {
    [InputFieldVariant.INACTIVE]: "text-white",
    [InputFieldVariant.FOCUSED]: "text-fprimary-yellow",
    [InputFieldVariant.COMPLETED]: "text-white",
    [InputFieldVariant.DISABLED]: "text-white opacity-30",
    [InputFieldVariant.ERROR]: "text-fstatus-warning",
  },
  warning: {
    [InputFieldVariant.INACTIVE]: "text-white",
    [InputFieldVariant.FOCUSED]: "text-fprimary-yellow",
    [InputFieldVariant.COMPLETED]: "text-white",
    [InputFieldVariant.DISABLED]: "text-bw-gray-25",
    [InputFieldVariant.ERROR]: "text-fstatus-warning",
  },
};

export default function InputText({
  name,
  label,
  placeholder,
  type = "password",
  disabled = false,
  warningText = "",
  rules,

  ...props
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(type !== "password");

  const {
    register,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  const value = getValues(name);
  const hasError = Boolean(error);
  const isCompleted = Boolean(value) && !hasError;

  const handleBlur = async () => {
    setIsFocused(false);
    await trigger(name); // Trigger validation on blur
  };

  const variant = disabled
    ? InputFieldVariant.DISABLED
    : hasError
      ? InputFieldVariant.ERROR
      : isFocused
        ? InputFieldVariant.FOCUSED
        : isCompleted
          ? InputFieldVariant.COMPLETED
          : InputFieldVariant.INACTIVE;

  return (
    <div className="group relative mb-6 w-full max-w-md">
      {label && (
        <label
          htmlFor={name}
          className={clsx(
            "pointer-events-none absolute left-3 origin-[0] transform transition-all duration-200",
            isFocused || value ? "top-1 text-[10px]" : "top-4 text-xs",
            variantStyles.label[variant],
          )}
        >
          {label}
        </label>
      )}

      <div className={clsx("relative h-11", disabled && "opacity-30")}>
        <input
          {...props}
          id={name}
          type={isVisible ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, rules)}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          className={clsx(
            "bg-fblack-opacity40 h-full w-full rounded-lg px-3 text-xs leading-3 transition-all outline-none",
            isFocused || value ? "pt-[22px] pb-2" : "py-2",
            variantStyles.input[variant],
          )}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-white"
            onClick={() => setIsVisible(!isVisible)}
            disabled={disabled}
          >
            {isVisible ? (
              <Image
                src="/icons/icon_outline/ic_eye.svg"
                width={16}
                height={16}
              />
            ) : (
              <Image
                src="/icons/icon_outline/ic_eye2.svg"
                width={16}
                height={16}
              />
            )}
          </button>
        )}
      </div>

      <p className={clsx("mt-2 text-[10px] leading-3 transition-all", variantStyles.warning[variant])}>
        {hasError ? (error?.message as string) : warningText}
      </p>
    </div>
  );
}
