import { useCallback, useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useUploadFile } from "../hooks/usePatients";
import { useToast } from "./ToastContext";
import { objectToFormData } from "../pages/utils";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdError } from "react-icons/md";

const FileUpload = ({
    value,
    name,
    placeholder,
    label,
    handleFormChange,
    section,
    field,
    isRequired,
    patientName,
}) => {
    const { showToast } = useToast();
    const [selectedFile, setSelectedFile] = useState("");
    const [fileUploadError, setFileUploadError] = useState("");
    
    const { mutate, isPending, isSuccess, isError, error } = useUploadFile();

    const onFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
        }
    };

    const uploadHandler = useCallback((e) => {
        e.preventDefault();

        setFileUploadError("");

        if (!selectedFile) {
            setFileUploadError("No file selected!");
            return;
        }

        const payload = objectToFormData({
            fileType: name,
            owner: patientName,
            file: selectedFile,
        });

        mutate(payload, {
            onSuccess: (response) => {
                handleFormChange(section, field, response?.data?.fileUrl);
            },
            onError: (error) => {
                showToast({
                    message:
                        `${error?.message}` ||
                        "An error occurred. Please try again.",
                    type: "error",
                    duration: 5000,
                });
            },
        });
    });

    return (
        <div className="space-y-1">
            <label
                htmlFor={`${section}-${name}`}
                className="block text-deepGrey"
            >
                {label}{" "}
                {isRequired && <small className="text-red-800">*</small>}
            </label>
            <input
                type="file"
                name={name}
                id={`${section}-${name}`}
                onChange={onFileChange}
                placeholder={placeholder}
                className="input"
                required={isRequired}
            />

            {!isSuccess && (
                <small className="text-xs text-darkBlue">
                    Browse a file and click Upload
                </small>
            )}

            <div className="flex items-center gap-2">
                {!isSuccess && (
                    <button
                        className="py-1 px-2 bg-lightGreen text-white hover:bg-green-700 text-xs font-semibold rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={uploadHandler}
                        disabled={isPending}
                    >
                        {isPending ? (
                            <Spinner
                                secondaryText="Uploding..."
                                spinnerSize="w-3.5 h-3.5"
                                textClass="text-xs"
                            />
                        ) : (
                            "Upload"
                        )}
                    </button>
                )}

                {isSuccess && (
                    <p className="flex items-center gap-1 text-xs text-lightGreen">
                        <IoCheckmarkDone />
                        <span className="">{`${label} Uploaded`}</span>
                    </p>
                )}

                {isError && (
                    <p className="flex items-center gap-1 text-xs text-vividRed">
                        <MdError />
                        <span className="">
                            {error.message || "File upload failed!"}
                        </span>
                    </p>
                )}

                {fileUploadError && (
                    <p className="flex items-center gap-1 text-xs text-vividRed">
                        <MdError />
                        <span className="">{fileUploadError}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
