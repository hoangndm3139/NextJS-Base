import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { ComponentProps, Fragment, useState } from "react";

type Item = {
  id: number | string;
  name: string;
};

interface RadioButtonProps extends ComponentProps<typeof RadioGroup> {
  size: "Default" | "Small";
  items: Item[];
  disabledItems?: Array<Item["id"]>;
  radioClassName?: string;
  selectedValue?: Item;
  onChange?: (value: Item) => void;
}
const RadioButton = ({
  size,
  items,
  disabledItems,
  selectedValue,
  radioClassName,
  onChange,
  ...props
}: RadioButtonProps) => {
  const [selected, setSelected] = useState<Item | undefined>(selectedValue);
  return (
    <RadioGroup
      {...props}
      defaultValue={selectedValue}
      value={selected}
      onChange={selected => {
        onChange?.(selected);
        setSelected(selected);
      }}
      aria-item="Server size"
    >
      {items.map(item => (
        <Field
          key={item.id}
          disabled={disabledItems?.includes(item.id)}
          className="flex items-center gap-2"
        >
          <Radio
            as={Fragment}
            value={item}
          >
            {({ checked, disabled }) => (
              <span
                className={clsx(
                  "group border-fgray-gray2 flex items-center justify-center rounded-full border",
                  size === "Default" ? "size-4" : "size-3",
                  checked ? "bg-fprimary-yellow-2" : "bg-white",
                  disabled && "bg-gray-100",
                  radioClassName,
                )}
              >
                {checked && (
                  <span
                    className={clsx("bg-fprimary-yellow rounded-full", size === "Default" ? "size-2" : "size-1.5")}
                  />
                )}
              </span>
            )}
          </Radio>
          <Label as={Fragment}>
            <label className={disabledItems?.includes(item.id) ? "opacity-50" : undefined}>{item.name}</label>
          </Label>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default RadioButton;
