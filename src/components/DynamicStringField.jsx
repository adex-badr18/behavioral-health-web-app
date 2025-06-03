import { useState } from "react";
import TextField from "./TextField";

import { MdClose } from "react-icons/md";
import { TbLibraryPlus } from "react-icons/tb";

const DynamicStringField = ({
    label,
    name,
    value,
    section,
    fieldPath,
    placeholder,
    onChange,
    type,
    moreText = "more",
}) => {
    const [fields, setFields] = useState(value.length > 0 ? value : [""]); // Start with one empty field by default

    // Add a single field
    const addFieldHandler = (e) => {
        e.preventDefault();

        setFields([...fields, ""]);
    };

    // Remove a single field
    const removeFieldHandler = (e, index) => {
        e.preventDefault();

        if (fields.length > 0) {
            const updatedFields = fields.filter((_, i) => i !== index);

            setFields(updatedFields);
            onChange(section, fieldPath, updatedFields);
        }
    };

    // Handle input change
    const inputChangeHandler = (index, value) => {
        const updatedFields = fields.map((field, i) =>
            i === index ? value : field
        );

        setFields(updatedFields);
        onChange(section, fieldPath, updatedFields);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <label
                    htmlFor={`${section}-${name}`}
                    className="block text-deepGrey capitalize"
                >
                    {label}
                </label>

                {fields.map((field, index) => (
                    <div
                        key={index}
                        id={`${section}-${name}`}
                        className="flex items-center justify-between gap-2"
                    >
                        {type === "text" && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                className="input"
                                value={field}
                                onChange={(e) =>
                                    inputChangeHandler(index, e.target.value)
                                }
                            />
                        )}

                        {type === "textarea" && (
                            <textarea
                                placeholder={placeholder}
                                className="input"
                                value={field}
                                onChange={(e) =>
                                    inputChangeHandler(index, e.target.value)
                                }
                            ></textarea>
                        )}

                        <button
                            onClick={(e) => removeFieldHandler(e, index)}
                            className="flex items-center justify-center p-1 rounded border border-transparent hover:border-vividRed text-vividRed hover:bg-vividRed hover:text-white transition duration-300"
                        >
                            <MdClose className="text-xl" />
                        </button>
                    </div>
                ))}

                <button
                    onClick={addFieldHandler}
                    className={`text-darkBlue flex items-center gap-2`}
                >
                    <TbLibraryPlus />
                    <span className="underline capitalize">{`Add ${moreText}`}</span>
                </button>
            </div>

            {value.length > 0 && (
                <div className="flex items-center gap-1 flex-wrap">
                    {value.map((item, index) => (
                        <div
                            key={index}
                            className="text-white bg-originalGreen text-sm p-1 rounded flex items-center gap-2"
                        >
                            <span className="">{item}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DynamicStringField;
