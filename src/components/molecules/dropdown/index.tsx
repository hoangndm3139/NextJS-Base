import Image from "next/image";
import { css, cx } from "@emotion/css";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const scrollBarCustomCss = css`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff73;
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  /* Firefox */
`;

type Option = {
  label: string;
  value: string;
};

interface DropdownProps {
  title: string;
  options: Option[];
}

export default function Dropdown({ title, options }: DropdownProps) {
  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <div className="relative inline-block min-w-40 text-left">
      <Listbox
        value={selected}
        onChange={setSelected}
      >
        <ListboxButton className="bg-fblack-bg2 hover:bg-fblack-bg3 inline-flex w-full items-center justify-between rounded-md p-3 text-xs leading-3 font-medium text-white focus:outline-none">
          {selected?.label || title}
          <Image
            width={12}
            height={12}
            src="/icons/icon_outline/ic_play.svg"
            className="rotate-90 transform"
            alt="dropdown icon"
          />
        </ListboxButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <ListboxOptions
            className={cx(
              "bg-fblack-th border-fgray-normal absolute mt-2 h-43 w-full rounded-xl border px-1 py-1.5 shadow-lg ring-1 ring-black/5 focus:outline-none",
            )}
          >
            <div className={cx(scrollBarCustomCss, "max-h-42 overflow-y-scroll")}>
              {options.map(option => (
                <ListboxOption
                  key={option.value}
                  value={option}
                >
                  {({ active, selected }) => (
                    <div
                      className={`group flex w-full items-center px-2 py-2 text-left text-xs leading-[14.4px] ${selected ? "text-fprimary-yellow" : "text-gray-300"} ${active && !selected ? "cursor-pointer rounded text-white" : ""}`}
                    >
                      {option.label}
                    </div>
                  )}
                </ListboxOption>
              ))}
            </div>
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
}
