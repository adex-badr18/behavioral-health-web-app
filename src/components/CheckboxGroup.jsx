import { MdOutlineCheck } from "react-icons/md";

export const Checkbox = ({
    label,
    value,
    checked,
    onChange,
    checkedClass = "border-2 border-originalGreen",
    unCheckedClass = "border-lightGrey",
    isRequired,
    formData,
    setFormData,
}) => {
    const handleOtherItemsChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            data: { ...prev.data, otherItemsCovered: e.target.value },
        }));
    };

    return (
        <label className="text-darkBlue flex items-center gap-4 cursor-pointer">
            <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <div
                className={`w-7 h-7 flex items-center justify-center flex-shrink-0 border rounded transition duration-300 ${
                    checked ? checkedClass : unCheckedClass
                }`}
            >
                {checked && <MdOutlineCheck className="text-originalGreen" />}
            </div>

            {label.toLowerCase() === "other" ? (
                <div className="flex items-center gap-4">
                    <span className="">
                        {label}
                        {": "}
                        {isRequired && (
                            <small className="text-vividRed text-lg">*</small>
                        )}
                    </span>
                    <input
                        type="text"
                        name="otherItemsCovered"
                        className="input"
                        value={formData.data.otherItemsCovered}
                        onChange={handleOtherItemsChange}
                    />
                </div>
            ) : (
                <span className="">
                    {label}{" "}
                    {isRequired && (
                        <small className="text-vividRed text-lg">*</small>
                    )}
                </span>
            )}
        </label>
    );
};

const CheckboxGroup = ({
    options,
    formData,
    setFormData,
    name,
    label,
    smallLabel,
    layout,
    isRequired,
}) => {
    const layoutClass =
        layout === "horizontal"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
            : "grid-cols-1 gap-5";

    const handleCheckboxChange = (e) => {
        const { value } = e.target;

        // Toggle the selected state of the checkbox
        if (formData[name].includes(value)) {
            setFormData((prev) => ({
                ...prev,
                [name]: formData[name].filter((option) => option !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: [...formData[name], value],
            }));
        }
    };

    return (
        <div className="space-y-3">
            <label htmlFor={name} className=" font-medium text-deepGrey">
                <span>
                    {label}
                    {isRequired && (
                        <small className="ml-1 text-[#DB2F2F] text-base">
                            *
                        </small>
                    )}
                    {smallLabel && (
                        <small className="text-sm font-normal block">
                            {smallLabel}
                        </small>
                    )}
                </span>
            </label>
            <div className={`grid ${layoutClass}`}>
                {options.map((option) => (
                    <Checkbox
                        key={option.id}
                        label={option.label}
                        value={option.value}
                        checked={formData[name].includes(option.value)}
                        onChange={handleCheckboxChange}
                        checkedClass="border-orange"
                        unCheckedClass="border-[#C5C7D0]"
                        formData={formData}
                        setFormData={setFormData}
                    />
                ))}
            </div>
        </div>
    );
};

export default CheckboxGroup;
