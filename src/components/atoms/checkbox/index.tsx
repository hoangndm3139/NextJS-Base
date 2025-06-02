import { Checkbox as CheckboxHeadless } from "@headlessui/react";
import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  isError?: boolean;
  onChangeCheckbox?: (value: boolean) => void;
  className?: string;
}

const Checkbox = ({ checked, onChangeCheckbox, isError, className, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <CheckboxHeadless
      {...props}
      checked={isChecked}
      onChange={value => {
        if (isError) return;
        setIsChecked(!isChecked);
        onChangeCheckbox?.(value);
      }}
      className={clsx(
        "group border-fgray-normal data-checked:bg-fprimary-yellow data-checked:border-fprimary-yellow block size-4 cursor-pointer rounded-xs border",

        isError && "border-fstatus-warning",
        className,
      )}
    >
      {/* Checkmark icon */}
      <svg
        className="stroke-fgray-normal opacity-0 group-data-checked:opacity-100"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </CheckboxHeadless>
  );
};

export default Checkbox;
