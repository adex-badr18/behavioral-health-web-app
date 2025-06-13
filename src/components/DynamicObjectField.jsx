import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdClose } from "react-icons/md";
import { TbLibraryPlus } from "react-icons/tb";

const DynamicObjectField = ({
    title,
    section,
    fieldPath,
    objStructure,
    onChange,
    value,
    moreText = "more",
    isRequired,
}) => {
    const [instances, setInstances] = useState(
        value.length > 0
            ? value
            : [
                  objStructure.reduce(
                      (acc, field) => ({ ...acc, [field.name]: "" }),
                      {}
                  ),
              ]
    );

    const handleStateChange = (index, fieldName, value) => {
        const updatedInstances = [...instances];
        updatedInstances[index] = {
            ...updatedInstances[index],
            [fieldName]: value,
        };

        setInstances(updatedInstances);
        onChange(section, fieldPath, updatedInstances); // Update the state array in parent component
    };

    const addInstance = (e) => {
        e.preventDefault();

        setInstances([
            ...instances,
            objStructure.reduce(
                (acc, field) => ({ ...acc, [field.name]: "" }),
                {}
            ),
        ]);
    };

    const removeInstance = (e, index) => {
        e.preventDefault();

        const filteredInstances = instances.filter((_, i) => i !== index);
        setInstances(filteredInstances);
        onChange(section, fieldPath, filteredInstances);
    };

    const renderField = (field, index) => {
        const { type, name, placeholder, options } = field;

        switch (type) {
            case "text":
                return (
                    <input
                        type="text"
                        id={`${section}-${name}`}
                        name={name}
                        placeholder={placeholder}
                        value={instances[index][name] || ""}
                        onChange={(e) =>
                            handleStateChange(index, name, e.target.value)
                        }
                        className="input"
                    />
                );
            case "textarea":
                return (
                    <textarea
                        id={`${section}-${name}`}
                        name={name}
                        placeholder={placeholder}
                        value={instances[index][name] || ""}
                        onChange={(e) =>
                            handleStateChange(index, name, e.target.value)
                        }
                        className="input"
                    ></textarea>
                );
            case "date":
                return (
                    <DatePicker
                        id={`${section}-${name}`}
                        name={name}
                        selected={instances[index][name]}
                        onChange={(date) =>
                            handleStateChange(index, name, date)
                        }
                        // dateFormat={dateFormat}
                        className="input"
                        placeholderText={placeholder || "MM/DD/YYYY"}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        defaultDate={null}
                    />
                );
            case "select":
                return (
                    <div className="w-full border border-[#DCDEE0] rounded-md pr-3">
                        <select
                            id={`${section}-${name}`}
                            className={`py-2 pl-3 text-darkBlue outline-none bg-transparent w-full`}
                            value={instances[index][name] || ""}
                            name={name}
                            onChange={(e) =>
                                handleStateChange(index, name, e.target.value)
                            }
                        >
                            <option value="" className="" disabled>
                                {placeholder}
                            </option>
                            {options.map((option) => (
                                <option
                                    key={option.id}
                                    value={option.value}
                                    className={`px-3 py-5 text-darkBlue capitalize`}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="space-y-4">
            <h4 className="text-lg text-darkBlue font-medium capitalize">
                {title}{" "}
                {isRequired && (
                    <small className="text-vividRed text-lg">*</small>
                )}
            </h4>

            <div className="space-y-4 md:space-y-6">
                {instances.map((_, index) => (
                    <div
                        key={index}
                        className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 border rounded p-4"
                    >
                        {objStructure.map((field, i) => (
                            <div key={i} className="space-y-1">
                                <label
                                    htmlFor={`${section}-${field.name}`}
                                    className="block text-deepGrey"
                                >
                                    {field.label}
                                </label>
                                {renderField(field, index)}
                            </div>
                        ))}

                        <button
                            onClick={(e) => removeInstance(e, index)}
                            className="absolute top-1 right-1 flex items-center justify-center p-1 rounded border border-transparent hover:border-vividRed text-vividRed hover:bg-vividRed hover:text-white transition duration-300"
                        >
                            <MdClose className="text-xl" />
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={(e) => addInstance(e)}
                className={`text-darkBlue flex items-center gap-2`}
            >
                <TbLibraryPlus />
                <span className="underline capitalize">{`Add ${moreText}`}</span>
            </button>
        </div>
    );
};

export default DynamicObjectField;
