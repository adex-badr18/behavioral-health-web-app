export const objectToFormDataPrev = (
    obj,
    formData = new FormData(),
    parentKey = ""
) => {
    if (!obj || typeof obj !== "object") {
        return formData;
    }

    Object.entries(obj).forEach(([key, value]) => {
        const fieldName = parentKey ? `${parentKey}[${key}]` : key; // Bracket notation for nesting

        if (value instanceof File || value instanceof Blob) {
            // File uploads
            formData.append(fieldName, value);
        } else if (Array.isArray(value)) {
            // If value is an array of strings or objects
            value.forEach((item, index) => {
                if (typeof item === "object" && item !== null) {
                    // Array of objects
                    objectToFormData(item, formData, `${fieldName}[${index}]`);
                } else {
                    // Array of strings
                    formData.append(`${fieldName}[${index}]`, item);
                }
            });
        } else if (typeof value === "object" && value !== null) {
            // recursively handle nested objects
            objectToFormData(value, formData, fieldName);
        } else {
            // simple key-value pair
            formData.append(fieldName, value);
        }
    });

    return formData;
};

export const objectToFormData = (
    obj,
    formData = new FormData(),
    parentKey = ""
) => {
    if (!obj || typeof obj !== "object") {
        return formData;
    }

    Object.entries(obj).forEach(([key, value]) => {
        const fieldName = parentKey ? `${parentKey}[${key}]` : key; // Bracket notation for nesting

        if (value === null || value === undefined) {
            return; // skip empty values
        }

        if (value instanceof File || value instanceof Blob) {
            // File uploads
            formData.append(fieldName, value);
        } else if (Array.isArray(value)) {
            // If value is an array of strings or objects
            value.forEach((item, index) => {
                const arrayKey = `${fieldName}[${index}]`;

                if (typeof item === "object" && item !== null) {
                    // Array of objects
                    objectToFormData(item, formData, arrayKey);
                } else {
                    // Array of strings
                    formData.append(arrayKey, String(item));
                }
            });
        } else if (typeof value === "object" && value !== null) {
            // recursively handle nested objects
            objectToFormData(value, formData, fieldName);
        } else {
            // simple key-value pair
            formData.append(fieldName, String(value));
        }
    });

    return formData;
};

export const convertToBoolean = (value) => {
    if (typeof value === "boolean") return value;

    return value.toLowerCase() === "yes" ? true : false;
};

export const convertBooleanToText = (value) => {
    return value ? "Yes" : "No";
};

export const convertIsoDateToReadable = (date) => {
    if (!date) {
        return "";
    }

    return new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
};

export const formatToYYYYMMDD = (dateString) => {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const formatToMMDDYYYY = (dateString) => {
    if (!dateString) {
        return "";
    }

    const [year, month, day] = dateString.split("-");

    return `${month}/${day}/${year}`;
};
