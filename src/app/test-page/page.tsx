"use client";
import Dropdown from "@/components/molecules/dropdown";

export default function ExamplePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212]">
      <Dropdown
        title="Option"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
          { label: "Option 4", value: "4" },
          { label: "Option 4", value: "5" },
          { label: "Option 4", value: "6" },
          { label: "Option 4", value: "7" },
          { label: "Option 4", value: "8" },
          { label: "Option 4", value: "9" },
        ]}
        onChange={value => console.log("Selected:", value)}
      />
    </div>
  );
}
