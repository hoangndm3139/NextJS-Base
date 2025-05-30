import { Checkbox as CheckboxHeadless } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

interface CheckboxProps {
  checked: boolean;
  isError?: boolean;
  onChange?: () => void;
  className?: string;
}

const Checkbox = ({ checked, onChange, isError, className }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <CheckboxHeadless
      checked={isChecked}
      onChange={() => {
        if (isError) return;
        setIsChecked(!isChecked);
        onChange?.();
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
