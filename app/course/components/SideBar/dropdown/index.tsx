import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface DropdownFilterProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  options: { name: string; key: string; icon: React.ReactNode }[];
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  title,
  isExpanded,
  onToggle,
  selectedItem,
  setSelectedItem,
  options,
}) => {
  const handleItemClick = (key: string) => {
    setSelectedItem(selectedItem === key ? "All" : key);
  };

  return (
    <div
      className={`h-auto px-2 w-full rounded-lg bg-darkGray flex flex-col transition-[padding] duration-300 ease-in-out ${
        isExpanded ? "py-2" : "py-1"
      }`}
    >
      {/* Header with Toggle */}
      <div
        className="flex justify-between items-center p-1 cursor-pointer"
        onClick={onToggle}
      >
        <h1 className="text-sm">{title}</h1>
        {isExpanded ? (
          <IoMdArrowDropup size={25} />
        ) : (
          <IoMdArrowDropdown size={25} />
        )}
      </div>

      {/* Expanding Dropdown Content */}
      <div
        className={`overflow-hidden transition-[max-height,padding-top] duration-500 ease-in-out ${
          isExpanded ? "max-h-[500px] pt-[10px]" : "max-h-0 pt-0"
        }`}
      >
        <div className="border-t flex flex-col gap-1  border-[#464646] mb-1 pt-3">
          {options.map((item) => (
            <div
              key={item.key}
              className={`flex items-center gap-3 p-1 cursor-pointer rounded-lg transition-colors duration-200 ${
                selectedItem === item.key
                  ? "bg-blue-700 text-white"
                  : "hover:bg-[#2a2a2a]"
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              {/* ✅ Updated: Icon Container now changes color */}
              <div
                className={`p-1.5 rounded-md transition-colors duration-200 ${
                  selectedItem === item.key ? "bg-blue-700" : "bg-[#282828]"
                }`}
              >
                {item.icon}
              </div>
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
