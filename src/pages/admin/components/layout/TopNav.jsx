import { useState } from "react";
// import { BellIcon, SearchIcon } from "../icons";
import { MdMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { RxAvatar } from "react-icons/rx";
import { useGetAdminProfile } from "../../../../hooks/useGeneral";

const TopNav = ({ toggleSideNav, isSideNavOpen }) => {
    const [searchText, setSearchText] = useState("");

    const { data } = useGetAdminProfile("1");

    const fullName = `${data?.firstName} ${data?.lastName}`.trim() || "Admin";

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="flex items-center justify-between gap-4 p-5 bg-white shadow">
            {/* Mobile Menu Toggle */}
            {!isSideNavOpen && (
                <button
                    className="lg:hidden text-3xl text-gray-600 focus:outline-none"
                    onClick={toggleSideNav}
                >
                    <MdMenu className="" />
                </button>
            )}

            {/* Search Bar */}
            <SearchBox
                inputName="searchText"
                searchText={searchText}
                onChange={handleSearchText}
                placeholderText={`Search everything`}
                displayClass="hidden md:block"
            />

            {/* User Profile */}
            <div className="flex items-center">
                <RxAvatar className="text-4xl" />
                <div className="ml-2 text-deepGrey">
                    <p className="text-sm font-medium capitalize">{fullName}</p>
                    <p className="text-xs text-grey">Admin</p>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
