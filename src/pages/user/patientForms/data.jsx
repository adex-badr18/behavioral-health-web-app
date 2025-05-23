import PatientRegistrationForm from "./components/patientReg/PatientRegistrationForm";
import AdhdForm from "./components/adhd/AdhdForm";
import AnxietyDisorderForm from "./components/anxietyDisorder/AnxietyDisorderForm";
import ControlledSubstanceForm from "./components/controlledSubstance/ControlledSubstanceForm";
import DepressionAssessmentForm from "./components/depressionAssessment/DepressionAssessmentForm";
import InitialEvaluationForm from "./components/initialEvaluation/InitialEvaluationForm";
import IntakeForm from "./components/intake/IntakeForm";
import MedicationConsentForm from "./components/medicationConsent/MedicationConsentForm";
import MoodDisorderForm from "./components/moodDisorder/MoodDisorderForm";
import NoticeOfPrivacy from "./components/privacyPolicy/NoticeOfPrivacy";
import PatientInfoConsent from "./components/infoConsent/PatientInfoConsent";
import ReleaseReceive from "./components/releaseReceive/ReleaseReceive";
import ScreeningForm from "./components/screening/ScreeningForm";
import SelfPayAgreement from "./components/selfPay/SelfPayAgreement";
import TerminationPolicy from "./components/terminationPolicy/TerminationPolicy";
import TreatmentConsentForm from "./components/treatmentConsent/TreatmentConsentForm";

// Programs
import Omhc from "./consentForms/omhc/Omhc";

export const dataCollectionForms = [
    {
        id: 1,
        slug: "patient-registration-form",
        title: "Patient Registration Form",
        shortName: "Registration Form",
        description:
            "This form helps us gather essential details about you, such as contact information and medical history, to ensure a smooth onboarding process.",
        link: "/forms/patient-registration-form",
        component: <PatientRegistrationForm />,
    },
    {
        id: 2,
        slug: "intake-form",
        title: "Intake Form",
        shortName: "Intake Form",
        description:
            "A comprehensive form designed to understand your concerns and set the foundation for your personalized treatment plan.",
        link: "/forms/intake-form",
        component: <IntakeForm />,
    },
    {
        id: 3,
        slug: "screening-form",
        title: "Screening Form",
        shortName: "Screening Form",
        description:
            "Used to identify specific behavioral health needs, this form allows our specialists to provide targeted care.",
        link: "/forms/screening-form",
        component: <ScreeningForm />,
    },
    {
        id: 4,
        slug: "initial-evaluation-form",
        title: "Initial Evaluation Form",
        shortName: "Evaluation Form",
        description:
            "This form helps us gain deeper insights into your health background, symptoms, and goals for effective treatment.",
        link: "/forms/initial-evaluation-form",
        component: <InitialEvaluationForm />,
    },
    {
        id: 5,
        slug: "depression-assessment-form",
        title: "PHQ-9 Depression Assessment Form",
        shortName: "Depression Form",
        description:
            "This form screens for depression and measures its severity, guiding tailored treatment decisions.",
        link: "/forms/depression-assessment-form",
        component: <DepressionAssessmentForm />,
    },
    {
        id: 6,
        slug: "generalized-anxiety-disorder-form",
        title: "Generalized Anxiety Disorder 7-item (GAD-7) Scale",
        shortName: "Anxiety Disorder",
        description:
            "This quick screening tool assesses anxiety symptoms to create a focused care plan for managing stress.",
        link: "/forms/generalized-anxiety-disorder-form",
        component: <AnxietyDisorderForm />,
    },
    {
        id: 7,
        slug: "mood-disorder-form",
        title: "Mood Disorder Questionnaire Screening",
        shortName: "Mood Disorder",
        description:
            "This form helps identify mood disorders like bipolar disorder, offering key insights into your emotional health.",
        link: "/forms/mood-disorder-form",
        component: <MoodDisorderForm />,
    },
    {
        id: 8,
        slug: "adhd-form",
        title: "Adult ADHD Self-Report Scale (ASRS-V I. I) Symptom Checklist",
        shortName: "ADHD Form",
        description:
            "A self-assessment tool to evaluate ADHD symptoms and guide diagnostic and treatment steps.",
        link: "/forms/adhd-form",
        component: <AdhdForm />,
    },
];

export const programForms = [
    {
        id: 1,
        slug: "omhc-consent",
        title: "OMHC Consent",
        shortName: "OMHC Consent",
        description: "",
        link: "/forms/consent/omhc-consent/1",
        component: <Omhc />,
    },
    {
        id: 2,
        slug: "prp-consent",
        title: "PRP - Adults",
        shortName: "PRP - Adults",
        description: "",
        link: "/forms/consent/prp-consent",
        component: <ControlledSubstanceForm />,
    },
    {
        id: 3,
        slug: "asam-0.5-early-intervention",
        title: "ASAM 0.5 Early Intervention",
        shortName: "ASAM 0.5 Early Intervention",
        description: "",
        link: "/forms/consent/asam-0.5-early-intervention",
        component: <NoticeOfPrivacy />,
    },
    {
        id: 4,
        slug: "asam-1.0-outpatient-treatment",
        title: "ASAM Level 1.0 Outpatient Treatment",
        shortName: "ASAM Level 1.0 Outpatient Treatment",
        description: "",
        link: "/forms/consent/asam-1.0-outpatient-treatment",
        component: <PatientInfoConsent />,
    },
    {
        id: 5,
        slug: "asam-2.1-outpatient-treatment",
        title: "ASAM Level 2.1 Outpatient Treatment",
        shortName: "ASAM Level 2.1 Outpatient Treatment",
        description: "",
        link: "/forms/consent/asam-2.1-outpatient-treatment",
        component: <PatientInfoConsent />,
    },
    {
        id: 6,
        slug: "asam-2.5-outpatient-treatment",
        title: "ASAM Level 2.5 Outpatient Treatment",
        shortName: "ASAM Level 2.5 Outpatient Treatment",
        description: "",
        link: "/forms/consent/asam-2.5-outpatient-treatment",
        component: <PatientInfoConsent />,
    },
    {
        id: 7,
        slug: "community-housing",
        title: "Community Housing",
        shortName: "Community Housing",
        description: "",
        link: "/forms/consent/community-housing",
        component: <SelfPayAgreement />,
    },
    {
        id: 8,
        slug: "dui-dwi",
        title: "DUI/DWI",
        shortName: "DUI/DWI",
        description: "",
        link: "/forms/consent/dui-dwi",
        component: <ReleaseReceive />,
    },
    {
        id: 9,
        slug: "supported-employment",
        title: "Supported Employment",
        shortName: "Supported Employment",
        description: "",
        link: "/forms/consent/supported-employment",
        component: <TerminationPolicy />,
    },
    {
        id: 10,
        slug: "medication-assisted-weight-loss",
        title: "Medication-Assisted Weight Loss",
        shortName: "Medication-Assisted Weight Loss",
        description: "",
        link: "/forms/consent/medication-assisted-weight-loss",
        component: <TreatmentConsentForm />,
    },
];
export const signatureForms = [
    {
        id: 1,
        slug: "medication-consent-form",
        title: "Medication Consent Form",
        shortName: "Medication Consent",
        description:
            "This ensures you understand and agree to the prescribed medications, fostering safe and informed care.",
        link: "/forms/medication-consent-form",
        component: <MedicationConsentForm />,
    },
    {
        id: 2,
        slug: "controlled-substance-form",
        title: "Controlled Substance Form",
        shortName: "Controlled Substance",
        description:
            "Required for regulated medications, this form emphasizes accountability and proper usage in your treatment.",
        link: "/forms/controlled-substance-form",
        component: <ControlledSubstanceForm />,
    },
    {
        id: 3,
        slug: "notice-of-privacy-practices",
        title: "Notice of Privacy Practices",
        shortName: "Notice of Privacy",
        description:
            "Acknowledges your understanding of how your health information is used and protected in compliance with regulations.",
        link: "/forms/notice-of-privacy-practices",
        component: <NoticeOfPrivacy />,
    },
    {
        id: 4,
        slug: "patient-information-consent-and-financial-policy",
        title: "Patient Information Consent and Financial Policy",
        shortName: "Information Consent",
        description:
            "This form outlines consent for information use and agreement to clinic policies for seamless service delivery.",
        link: "/forms/patient-information-consent-and-financial-policy",
        component: <PatientInfoConsent />,
    },
    {
        id: 5,
        slug: "self-pay-agreement",
        title: "Self-Pay Agreement",
        shortName: "Self-Pay Agreement",
        description:
            "Ensures transparency about payment terms for self-funded care, fostering a smooth financial process.",
        link: "/forms/self-pay-agreement",
        component: <SelfPayAgreement />,
    },
    {
        id: 6,
        slug: "release-receive",
        title: "Release Receive",
        shortName: "Release Receive",
        description:
            "Authorizes the sharing of relevant medical information with specified individuals or organizations for coordinated care.",
        link: "/forms/release-receive",
        component: <ReleaseReceive />,
    },
    {
        id: 7,
        slug: "termination-policy",
        title: "Termination Policy",
        shortName: "Termination Policy",
        description:
            "Defines the terms and conditions for discontinuing care to ensure a clear and professional transition.",
        link: "/forms/termination-policy",
        component: <TerminationPolicy />,
    },
    {
        id: 8,
        slug: "telehealth-in-person-treatment-and-medication-education-consent-form",
        title: "Telehealth, In-Person Treatment, and Medication/Education Consent Form",
        shortName: "Treatment Consent",
        description:
            "Combines essential consent for telehealth sessions, in-person care, and treatment education, prioritizing flexibility and transparency.",
        link: "/forms/telehealth-in-person-treatment-and-medication-education-consent-form",
        component: <TreatmentConsentForm />,
    },
];

export const genderOptions = [
    { id: 1, text: "Male", value: "Male" },
    { id: 2, text: "Female", value: "Female" },
    { id: 3, text: "Transgender", value: "Transgender" },
    { id: 4, text: "Declined", value: "Declined" },
    { id: 5, text: "Non-Binary", value: "Non-Binary" },
    { id: 6, text: "Prefer Not to Say", value: "Prefer Not to Say" },
];

export const employmentOptions = [
    { id: 1, text: "Employed", value: "Employed" },
    { id: 2, text: "Self-Employed", value: "Self-Employed" },
    { id: 3, text: "Unemployed", value: "Unemployed" },
    { id: 4, text: "Retired", value: "Retired" },
    { id: 5, text: "Student", value: "Student" },
    { id: 6, text: "Homemaker", value: "Homemaker" },
    { id: 7, text: "Other", value: "Other" },
];

export const educationOptions = [
    { id: 1, text: "High School Diploma", value: "High School Diploma" },
    { id: 2, text: "Associate's Degree", value: "Associate's Degree" },
    { id: 3, text: "Bachelor's Degree", value: "Bachelor's Degree" },
    { id: 4, text: "Master's Degree", value: "Master's Degree" },
    { id: 5, text: "Professional Degree", value: "Professional Degree" },
    { id: 6, text: "Doctoral Degree", value: "Doctoral Degree" },
    { id: 7, text: "Other", value: "Other" },
];

export const raceOptions = [
    { id: 1, text: "White", value: "White" },
    {
        id: 2,
        text: "Black or African American",
        value: "Black Or African American",
    },
    { id: 3, text: "Asian", value: "Asian" },
    {
        id: 4,
        text: "Native American or Alaska Native",
        value: "Native American Or Alaska Native",
    },
    { id: 5, text: "Multiracial", value: "Multiracial" },
    { id: 6, text: "Prefer Not to Say", value: "Prefer Not To Say" },
];

export const maritalStatusOptions = [
    { id: 1, text: "Single", value: "Single" },
    { id: 2, text: "Married", value: "Married" },
    { id: 3, text: "Divorced", value: "Divorced" },
    { id: 4, text: "Widowed", value: "Widowed" },
    { id: 5, text: "Separated", value: "Separated" },
    { id: 6, text: "Domestic Partnership", value: "Domestic Partnership" },
    { id: 7, text: "Prefer Not to Say", value: "Prefer Not to Say" },
];

export const religionOptions = [
    { id: 1, text: "Islam", value: "Islam" },
    { id: 2, text: "Christianity", value: "Christianity" },
    { id: 3, text: "Judaism", value: "Judaism" },
    { id: 4, text: "Hinduism", value: "Hinduism" },
    { id: 5, text: "Buddhism", value: "Buddhism" },
    { id: 6, text: "Sikhism", value: "Sikhism" },
    { id: 7, text: "Atheism", value: "Atheism" },
    { id: 8, text: "Agnosticism", value: "Agnosticism" },
    { id: 9, text: "Other", value: "Other" },
    { id: 10, text: "Prefer Not to Say", value: "prefer not to say" },
];

export const appointmentReminderModeOptions = [
    { id: 1, text: "Automated Text", value: "Automated Text" },
    { id: 2, text: "Automated Email", value: "Automated Email" },
];

export const preferredPhoneOptions = [
    { id: 1, text: "Home Phone", value: "Home Phone" },
    { id: 2, text: "Cell Phone", value: "Cell Phone" },
    { id: 3, text: "Work Phone", value: "Work Phone" },
];

export const langOptions = [
    { id: 1, text: "English", value: "English" },
    { id: 2, text: "Other", value: "Other" },
];

export const ethnicityOptions = [
    { id: 1, text: "Hispanic or Latino", value: "Hispanic or Latino" },
    { id: 2, text: "Not Hispanic or Latino", value: "Not Hispanic or Latino" },
    { id: 3, text: "Prefer Not to Say", value: "Prefer Not to Say" },
];

export const familyRoleOptions = [
    { id: 1, text: "Mother", value: "Mother" },
    { id: 2, text: "Father", value: "Father" },
    { id: 3, text: "Husband", value: "Husband" },
    { id: 4, text: "Son", value: "Son" },
    { id: 5, text: "Daughter", value: "Daughter" },
    { id: 6, text: "Other", value: "Other" },
];

export const relationshipOptions = [
    { id: 1, text: "Self", value: "Self" },
    { id: 2, text: "Spouse", value: "Spouse" },
    { id: 3, text: "Parent", value: "Parent" },
    { id: 4, text: "Child", value: "Child" },
    { id: 5, text: "Other", value: "Other" },
];

export const booleanOptions = [
    { id: 1, text: "Yes", value: "Yes" },
    { id: 2, text: "No", value: "No" },
];

export const sexPreferenceOptions = [
    { id: 1, text: "Heterosexual", value: "Heterosexual" },
    { id: 2, text: "Bisexual", value: "Bisexual" },
    { id: 3, text: "Homosexual", value: "Homosexual" },
];

export const frequencyOptions = [
    { id: 1, text: "None", value: "None" },
    { id: 2, text: "Rarely", value: "Rarely" },
    { id: 3, text: "Sometimes", value: "Sometimes" },
    { id: 4, text: "Often", value: "Often" },
];

export const referralSourceOptions = [
    { id: 1, text: "Insurance", value: "Insurance" },
    { id: 2, text: "Internet", value: "Internet" },
    { id: 3, text: "Friend", value: "Friend" },
    { id: 4, text: "Other", value: "Other" },
];

export const referralTherapistOptions = [
    {
        id: 1,
        text: "Mental Health Therapist/MD",
        value: "Mental Health Therapist/MD",
    },
    { id: 2, text: "Facility", value: "Facility" },
];

export const consentOptions = [
    {
        id: 1,
        title: "Information Accuracy",
        name: "dataAccuracy",
        label: "I confirm that all the information I have provided is accurate and complete to the best of my knowledge. I understand that any incorrect or false information may impact the quality of services provided or the processing of my claims. I agree to update the clinic promptly if any of my personal or insurance details change.",
        value: false,
    },
    {
        id: 2,
        title: "Insurance Authorization",
        name: "insuranceAuth",
        label: "I authorize my health insurance company to remit payments directly to Brightlife Enhancement Services for services provided. This authorization ensures a smooth and efficient billing process on my behalf. I understand that any discrepancies in coverage or payments will be communicated to me for resolution.",
        value: false,
    },
    {
        id: 3,
        title: "Financial Responsibility",
        name: "finResponsible",
        label: "I acknowledge that I am responsible for any portion of the charges not covered by my insurance, including co-pays, deductibles, or services deemed ineligible by my insurer. I agree to make payments promptly as outlined in the clinic's financial policy. If I face difficulties, I will reach out to discuss available payment arrangements.",
        value: false,
    },
    {
        id: 4,
        title: "Information Release Consent",
        name: "infoRelease",
        label: "I grant permission for Brightlife Enhancement Services to share necessary medical and insurance information with my health insurance provider for claims processing. I understand that this ensures efficient handling of my claims while safeguarding my privacy in accordance with HIPAA regulations. No information will be released beyond what is required for claim purposes.",
        value: false,
    },
];

export const patientRegistrationFormSteps = [
    { id: 1, stepTitle: "personal", component: <div>Personal</div> },
    { id: 2, stepTitle: "guarantor", component: <div>Guarantor</div> },
    { id: 3, stepTitle: "emergency", component: <div>Emergency</div> },
    { id: 4, stepTitle: "consent", component: <div>Consent</div> },
    { id: 5, stepTitle: "review", component: <div>Review</div> },
];

const patientRegistrationForm = {
    personal: {
        firstName: "",
        middleName: "",
        lastName: "",
        address: { streetName: "", city: "", state: "", zipCode: "" },
        gender: "",
        dob: new Date(),
        maritalStatus: "",
        homePhone: "",
        cellPhone: "",
        workPhone: "",
        email: "",
        sendMsgToHomePhone: false,
        sendMsgToRelative: false,
        sendMsgToWork: false,
        sendMsgToCellPhone: false,
        highestEduLevel: "",
        employmentStatus: "",
        employer: "",
        occupation: "",
        socialSecurityNumber: "",
        religion: "",
        ethnicity: "",
        race: "",
        preferredLanguage: "",
        preferredModeOfCommunication: "Automated text" || "Automated Email",
    },
    guarantor: {
        firstName: "",
        middleName: "",
        lastName: "",
        dob: new Date(),
        relationship: "",
        address: { streetName: "", city: "", state: "", zipCode: "" },
        phone: "",
        email: "",
        stateIssuedId: "",
        insuranceCard: "",
    },
    guardian: {
        name: "",
        familyRole: "",
        gender: "",
        maritalStatus: "",
        employmentStatus: "",
        employer: "",
        occupation: "",
        address: "",
    },
    emergency: {
        firstName: "",
        middleName: "",
        lastName: "",
        relationship: "",
        address: { streetName: "", city: "", state: "", zipCode: "" },
        homePhone: "",
        cellPhone: "",
        email: "",
    },
    insurance: {
        primaryInsurance: {
            providerName: "",
            providerMemberId: "",
            phone: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
            policyHolderId: "",
            policyHolderName: "",
            policyHolderDob: new Date(),
            groupPlanNumber: "",
            coPay: "",
            subscriber: {
                firstName: "",
                middleName: "",
                lastName: "",
                dob: new Date(),
                employer: "",
            },
        },
        secondaryInsurance: {
            providerName: "",
            providerMemberId: "",
            phone: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
            policyHolderId: "",
            policyHolderName: "",
            policyHolderDob: new Date(),
            groupPlanNumber: "",
            coPay: "",
            subscriber: [
                {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    dob: new Date(),
                    employer: "",
                },
            ],
        },
    },
    consent: { signature: "", date: "" },
};

const intakeForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    intro: {
        doYouShareHome: "",
        complaints: "",
        marriageCount: 0,
        pastMarriagesInfo: [
            { description: "", duration: "", divorceReason: "" },
        ],
        childrenCount: 0,
        sexualPreference: "",
        onProbation: "",
        inLawsuit: "",
    },
    psychHistory: {
        pastProviders: [{ provider: "", appointmentDate: new Date() }],
        currentMedications: [
            {
                medication: "",
                instruction: "",
                conditionTreated: "",
                prescription: "",
            },
        ],
        hasAttemptedSuicide: "",
        isPsychHospitalized: "",
        pastMedications: [
            {
                medication: "",
                instruction: "",
                conditionTreated: "",
                prescription: "",
            },
        ],
    },
    alcoholDrugHistory: {
        alcohol: {
            frequentUsage: "",
            brand: "",
            lastUsed: "",
            drinkGuiltCheck: "",
        },
        substanceUsages: [
            {
                name: "",
                ageAtFirstUse: "",
                qtyUse: "",
                frequentUsage: "",
                lastUsed: "",
            },
        ],
        weeklyAverageSpending: 0,
        pastTreatmentInfo: [
            {
                facility: "",
                date: new Date(),
                type: "",
                isTreatmentCompleted: "",
            },
        ],
        isPastStepRecoveryParticipant: "",
        isCurrentStepRecoveryParticipant: "",
    },
    psychosocialHistory: {
        birthPlace: "",
        growthPlace: "",
        raisedBy: "",
        siblingsCount: 0,
        childhoodInfo: "",
        wasPhysicallyAbused: "",
        wasEmotionallyAbused: "",
        wasSexuallyAbused: "",
    },
    otherHistory: {
        hasMedicalDisability: "",
        pastMedicalHistory: ["description", "description", "..."],
        pastSurgicalHistory: ["description", "description", "..."],
        allergies: ["allergy", "allergy", "..."],
        relativesWithMentalIllnessOrSuicide: [{ relative: "", illness: "" }],
        otherUsefulInfo: "",
    },
};

const screeningForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    screening: {
        mhBhPhone: "",
        helpNeeds: "",
        inCrisis: false,
        currentlyOnPsychMed: false,
        stableOnMed: false,
        isPsychiatristConsult: false,
        isTherapistConsult: false,
        anyMentalHealthTreatment: false,
        suicideAttemptHistory: false,
        harmToSelfOrOthers: false,
        intent: "",
        healthSymptoms: false,
        healthSymptomsFrequency: "",
    },
    referral: {
        name: "",
        address: "",
        phone: "",
    },
};

const initialEvaluationForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    referral: {
        source: "",
        therapist: "",
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        address: { streetName: "", city: "", state: "", zipCode: "" },
    },
    pharmacy: {
        name: "",
        address: "",
        phone: "",
    },
    medications: [
        {
            medication: "",
            dosage: "",
            usageFrequency: "",
        },
    ],
    agreements: {
        primaryCarePhysician: {
            name: "",
            address: "",
            phone: "",
            fax: "",
            infoToAuthorize: "",
        },
    },
};

const depressionForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    assessment: {
        pleasureInterest: 0,
        depressionRate: 0,
        sleepRate: 0,
        fatigueRate: 0,
        appetiteRate: 0,
        failureRate: 0,
        concentrationRate: 0,
        restlessnessRate: 0,
        suicideThought: 0,
    },
};

const anxietyForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    assessment: {
        nervousRate: 0,
        controlOverWorry: 0,
        excessiveWorry: 0,
        relaxTrouble: 0,
        restlessness: 0,
        annoyanceRate: 0,
        frightRate: 0,
        lifeInfluenceSummary: "",
    },
};

const adhdForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    partA: {
        projectCompletionProblem: 0,
        organizationRate: 0,
        memoryRate: 0,
        attitudeToChallenge: 0,
        FidgetRateOnsit: 0,
        activeToWork: 0,
    },
    partB: {
        carelessMistakes: 0,
        AttentionToBoringWork: 0,
        ConcentrationRate: 0,
        misplaceRate: 0,
        distractionRate: 0,
        excuseRate: 0,
        restlessRate: 0,
        troubleRelaxing: 0,
        excessiveTalks: 0,
        PeopleSentenceCompletion: 0,
        patienceOnQueue: 0,
        interruptOthers: 0,
    },
};

const moodForm = {
    verification: {
        id: "",
        date: new Date(),
    },
    first: {
        hyperFeeling: false,
        isIrritable: false,
        isOverConfident: false,
        lessSleep: false,
        talkMore: false,
        pacedThoughts: false,
        easyDistraction: false,
        overEnergetic: false,
        overActive: false,
        overSocial: false,
        sexaholic: false,
        overFoolish: false,
        overSpending: false,
    },
    second: {
        sameTimeOccurrence: false,
        influenceOnLife: "",
        isRelativeWithBipolar: false,
        isBipolarDiagnosed: false,
    },
};

const medicationConsent = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
        guardianName: "",
        guardianSignature: "",
    },
};

const controlledSubstance = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
        guardianName: "",
        guardianSignature: "",
        providerName: "",
        providerSignature: "",
    },
};

const noticeOfPrivacy = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
        noticeEffectDate: new Date(),
    },
};

const patientInfoConsent = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
    },
};

const releaseReceive = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
        providerName: "",
        witnessName: "",
        witnessSignature: "",
    },
    receiveFrom: {
        physicians: [{ name: "", address: "" }],
        therapist: { name: "", address: "" },
    },
    releaseTo: {
        professionals: [{ name: "", address: "" }],
        insuranceProvider: { name: "", address: "" },
    },
};

const terminationPolicy = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
        witnessName: "",
    },
};

const selfPayAgreement = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
    },
};

const telehealthInpersonTreatment = {
    verification: {
        id: "",
        date: new Date(),
    },
    consentInfo: {
        patientName: "",
        patientSignature: "",
        guardianName: "",
        guardianSignature: "",
    },
};
