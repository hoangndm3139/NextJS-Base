import Image from "next/image";

const NoCard = () => {
  return (
    <div className="bg-fblack-bg3 flex h-47 w-30 flex-col items-center justify-center rounded-lg">
      <Image
        src="/icons/icon_no_data/ic_no_card.svg"
        alt="ic_no_card"
        width={36}
        height={36}
      />
      <div className="text-bw-gray-25 justify-center text-center text-xs leading-none font-normal">No Cards</div>
    </div>
  );
};

export default NoCard;
