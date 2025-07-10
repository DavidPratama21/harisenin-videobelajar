import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, Search } from "lucide-react";
import List_menu_filter from "../atoms/List_menu_filter";

const Filter = () => {
    return (
        <div className="flex gap-4 justify-between sm:justify-end">
            <Menu as="div" className="relative">
                {/* Urutkan */}
                <MenuButton className="flex items-center gap-2 h-12 pr-3 py-3 pl-[17px] rounded-[10px] border border-other-border bg-white text-dark-secondary">
                    <p className="font-medium">Urutkan</p>
                    <ChevronDown />
                </MenuButton>
                {/* Popover Menu */}
                <MenuItems
                    transition
                    anchor="bottom"
                    className="absolute z-2 grid w-fit py-1 rounded-[10px] bg-white shadow-[0_0_1px_0_rgba(62,67,74,.31),0_18px_28px_0_rgba(62,67,74,.15)]"
                >
                    <MenuItem>
                        <List_menu_filter>Harga Rendah</List_menu_filter>
                    </MenuItem>
                    <MenuItem>
                        <List_menu_filter>Harga Tinggi</List_menu_filter>
                    </MenuItem>
                    <MenuItem>
                        <List_menu_filter>A to Z</List_menu_filter>
                    </MenuItem>
                    <MenuItem>
                        <List_menu_filter>Z to A</List_menu_filter>
                    </MenuItem>
                    <MenuItem>
                        <List_menu_filter>Rating Tertinggi</List_menu_filter>
                    </MenuItem>
                    <MenuItem>
                        <List_menu_filter>Rating Terendah</List_menu_filter>
                    </MenuItem>
                </MenuItems>
            </Menu>
            {/* Cari Kelas */}
            <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary sm:w-[220px]">
                <div className="flex items-center gap-2 py-3 pl-[5px] sm:justify-between">
                    <p className="font-medium">Cari Kelas</p>
                    <Search />
                </div>
            </button>
        </div>
    );
};

export default Filter;
