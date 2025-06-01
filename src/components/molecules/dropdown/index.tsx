import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

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

  const handleSelect = (option: Option) => {
    setSelected(option);
  };

  return (
    <div className="relative inline-block w-48 text-left">
      <Menu
        as="div"
        className="relative"
      >
        <Menu.Button className="inline-flex w-full items-center justify-between rounded-md bg-[#1e1e1e] px-4 py-2 text-sm font-medium text-white hover:bg-[#2a2a2a] focus:outline-none">
          {selected?.label || title} v
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Menu.Items className="scrollbar scrollbar-thin scrollbar-thumb-[#999] scrollbar-track-transparent scrollbar-thumb-rounded-full absolute mt-2 max-h-40 w-full overflow-y-auto rounded-xl border border-white/20 bg-[#1a1a1a] py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
            {options.map(option => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    onClick={() => handleSelect(option)}
                    className={`group flex w-full items-center px-4 py-2 text-left text-sm ${selected?.value === option.value ? "text-yellow-400" : "text-gray-300"} ${active ? "cursor-pointer bg-[#2c2c2c]" : ""} `}
                  >
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
