import Image from "next/image";
import { css } from "@emotion/css";
import { Input } from "@headlessui/react";
export default function BoxSearch() {
  return (
    <div className="bg-fblack-opacity40 flex h-8 w-full items-center rounded px-3">
      <Image
        src="/icons/icon_outline/ic_search.svg"
        width={16}
        height={16}
        alt="logo"
        className={css`
          filter: brightness(0) saturate(100%) invert(74%) sepia(8%) saturate(0%) hue-rotate(173deg) brightness(95%)
            contrast(86%);
        `}
      />
      <Input
        className="text-bw-gray-3 ml-1.5 flex-1 text-xs leading-[1.2] font-normal outline-none"
        placeholder="Search Player/League/Club"
      />
    </div>
  );
}
