import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const GlobalPagination = ({ metaData, onNext, onPrevious }) => {
    const { currentPage, totalPages } = metaData;

    return (
        <div className="flex items-center gap-4 md:gap-6">
            <span className="">{`${currentPage} of ${totalPages}`}</span>

            <div className="flex items-center gap-2 md:gap-3">
                <button
                    onClick={onPrevious}
                    className="text-2xl text-darkBlue p-3 rounded-full hover:bg-lightGrey transition-colors duration-300"
                >
                    <MdChevronLeft className="" />
                </button>

                <button
                    onClick={onNext}
                    className="text-2xl text-darkBlue p-3 rounded-full hover:bg-lightGrey transition-colors duration-300"
                >
                    <MdChevronRight className="" />
                </button>
            </div>
        </div>
    );
};

export default GlobalPagination;
