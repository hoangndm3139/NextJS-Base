import { Switch } from "@headlessui/react";
import clsx from "clsx";
import React, { ComponentProps, useState } from "react";

interface ToggleProps extends ComponentProps<typeof Switch> {
  enabled: boolean;
  onToggleChange?: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Toggle = ({ enabled, onToggleChange, disabled, className, ...props }: ToggleProps) => {
  const [checked, setChecked] = useState(enabled);
  return (
    <Switch
      {...props}
      checked={checked}
      disabled={disabled}
      onChange={value => {
        onToggleChange?.(!value);
        setChecked(!checked);
      }}
      className={clsx(
        "group bg-fprimary-yellow-2 data-checked:bg-fgray-normal inline-flex w-8 items-center rounded-lg data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
    >
      <span className="bg-fprimary-yellow group-data-checked:bg-bw-gray-3 size-4 rounded-lg transition group-data-checked:translate-x-4" />
    </Switch>
  );
};

export default Toggle;
