import React from "react";

const Spinner = ({ secondaryText }) => {
    return (
        <div className="flex justify-center gap-4">
            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
            {secondaryText && <span>{secondaryText}</span>}
        </div>
    );
};

export default Spinner;
