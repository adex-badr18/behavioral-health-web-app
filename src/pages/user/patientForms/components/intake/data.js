export const drinkGuiltOptions = [
    {
        id: 1,
        value: "I have tried to cut back on my drinking.",
    },
    {
        id: 2,
        value: "I have become angered or annoyed by others criticizing my drinking.",
    },
    {
        id: 3,
        value: "I feel guilty about my drinking.",
    },
    {
        id: 4,
        value: "I have gotten up in the morning and had a drink to steady my nerves.",
    },
];

export const booleanOptions = [
    { id: 1, label: "Yes", value: "yes" },
    { id: 2, label: "No", value: "no" },
];

export const frequencyOptions = [
    { id: 1, label: "None", value: "None" },
    { id: 2, label: "Rarely", value: "Rarely" },
    { id: 3, label: "Sometimes", value: "Sometimes" },
    { id: 4, label: "Often", value: "Often" },
];

const substancesOptions = [
    { id: 1, value: "Alcohol", label: "Alcohol" },
    { id: 2, value: "Marijuana", label: "Marijuana" },
    { id: 3, value: "Cocaine", label: "Cocaine" },
    { id: 4, value: "Crystal Meth", label: "Crystal Meth" },
    { id: 5, value: "Ice", label: "Ice" },
    { id: 6, value: "Adderall", label: "Adderall" },
    { id: 7, value: "Vyvanse", label: "Vyvanse" },
    { id: 8, value: "Ritalin", label: "Ritalin" },
    { id: 9, value: "LSD", label: "LSD" },
    { id: 10, value: "XTC/Molly", label: "XTC/Molly" },
    { id: 11, value: "Peyote", label: "Peyote" },
    { id: 12, value: "Ketamine", label: "Ketamine" },
    { id: 13, value: "Mushrooms", label: "Mushrooms" },
    { id: 14, value: "Xanax", label: "Xanax" },
    { id: 15, value: "Valium", label: "Valium" },
    { id: 16, value: "Klonopin", label: "Klonopin" },
    { id: 17, value: "Ativan", label: "Ativan" },
    { id: 18, value: "Dextromethorphan", label: "Dextromethorphan" },
    { id: 19, value: "Steroids", label: "Steroids" },
    { id: 20, value: "Spice", label: "Spice" },
    { id: 21, value: "Bath Salts", label: "Bath Salts" },
];

export const relativesObjStructure = [
    {
        id: 1,
        label: "Relative",
        name: "relative",
        type: "text",
        placeholder: "e.g. Brother, Aunt, Cousin",
    },
    {
        id: 2,
        label: "Illness",
        name: "illness",
        type: "text",
        placeholder: "e.g. Bipolar",
    },
];

export const providersObjStructure = [
    {
        id: 1,
        label: "Provider",
        name: "provider",
        type: "text",
        placeholder: "Name of Provider",
    },
    {
        id: 2,
        label: "Appointment Date",
        name: "appointmentDate",
        type: "date",
        placeholder: "MM/DD/YYYY",
    },
];

export const marriagesObjStructure = [
    {
        id: 1,
        label: "Description",
        name: "marriageDescription",
        type: "text",
        placeholder: "Describe Marriage",
    },
    {
        id: 2,
        label: "Duration",
        name: "duration",
        type: "text",
        placeholder: "e.g. 5 years",
    },
    {
        id: 3,
        label: "Divorce Reason",
        name: "divorceReason",
        type: "text",
        placeholder: "Divorce Reason",
    },
];

export const medicationsObjStructure = [
    {
        id: 1,
        label: "Medication",
        name: "medication",
        type: "text",
        placeholder: "Name of Medication",
    },
    {
        id: 2,
        label: "Usage Instruction",
        name: "usageInstruction",
        type: "text",
        placeholder: "Usage Instruction",
    },
    {
        id: 3,
        label: "Condition Treated",
        name: "conditionTreated",
        type: "text",
        placeholder: "Condition Treated",
    },
    {
        id: 4,
        label: "Prescription",
        name: "prescription",
        type: "text",
        placeholder: "Prescription",
    },
];

export const drugsObjStructure = [
    {
        id: 1,
        label: "Substance/Drug",
        name: "substanceName",
        type: "select",
        placeholder: "-- Select an option --",
        options: substancesOptions,
    },
    {
        id: 2,
        label: "Age at first use (years)",
        name: "ageAtFirstUse",
        type: "text",
        placeholder: "e.g. 18",
    },
    {
        id: 3,
        label: "Quantity Used",
        name: "qtyUse",
        type: "text",
        placeholder: "How much used",
    },
    {
        id: 4,
        label: "Usage Frequency",
        name: "usageFrequency",
        type: "select",
        placeholder: "-- Select an option --",
        options: frequencyOptions
    },
    {
        id: 5,
        label: "Last Used",
        name: "lastUsed",
        type: "text",
        placeholder: "e.g. 2 weeks ago",
    },
];


export const drugTreatmentObjStructure = [
    {
        id: 1,
        label: "Facility",
        name: "facility",
        type: "text",
        placeholder: "Facility",
    },
    {
        id: 2,
        label: "Drug/Substance Treated",
        name: "drugTreated",
        type: "text",
        placeholder: "Drug/Substance treated",
    },
    {
        id: 3,
        label: "Date",
        name: "date",
        type: "date",
        placeholder: "MM/DD/YYYY",
    },
    {
        id: 4,
        label: "Did you complete treatment?",
        name: "isTreatmentCompleted",
        type: "select",
        placeholder: "-- Select an option --",
        options: booleanOptions
    },
]