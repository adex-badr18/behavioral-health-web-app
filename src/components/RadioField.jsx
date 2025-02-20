import React from "react";

const RadioField = ({
    label,
    data,
    name,
    value,
    section,
    field,
    handleFormElementChange,
    orientation,
    labelClass
}) => {
    let orientationClass;

    if (orientation === "horizontal") {
        orientationClass = "flex flex-row items-center gap-8";
    } else if (orientation === "grid") {
        orientationClass = "grid grid-cols-1 sm:grid-cols-2 gap-4";
    } else {
        orientationClass = "flex flex-col gap-4";
    }

    // const orientationClas =
    //     orientation === "horizontal"
    //         ? "flex-row items-center gap-8"
    //         : "flex-col gap-4";
    // console.log(name, value);

    return (
        <div className="space-y-2">
            <p className={`${labelClass} text-deepGrey`}>{label}</p>
            <div className={`${orientationClass}`}>
                {data.map((option) => (
                    <label
                        key={option.id}
                        htmlFor={`${name}-${option.name}`}
                        className="text-deepGrey flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name={name}
                            id={`${name}-${option.name}`}
                            className="hidden peer"
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) =>
                                handleFormElementChange(
                                    section,
                                    field,
                                    e.target.value
                                )
                            }
                        />
                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-darkBlue flex-shrink-0 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-transparent"></div>
                        </div>
                        <span className="">{option.text}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioField;
