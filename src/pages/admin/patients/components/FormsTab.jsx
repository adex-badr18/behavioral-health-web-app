import { useState, useEffect, useMemo } from "react";
import { formDocs } from "../data";
import DocsSideNav from "./DocsSideNav";
import { formatTitle } from "../../utils";
import { RiMenuUnfoldLine, RiMenuUnfold2Line } from "react-icons/ri";
import AdhdForm from "./forms/AdhdForm";
import AnxietyDisorderForm from "./forms/AnxietyDisorderForm";
import DepressionAssessmentForm from "./forms/DepressionAssessmentForm";
import IntakeForm from "./forms/IntakeForm";
import MoodDisorderAssessmentForm from "./forms/MoodDisorderAssessmentForm";

const PDF_FORM_KEYS = [
    "omhc-consent",
    "prp-consent",
    "asam-0.5-early-intervention",
    "asam-1.0-outpatient-treatment",
    "asam-2.1-outpatient-treatment",
    "asam-2.5-outpatient-treatment",
    "community-housing",
    "dui-dwi",
    "supported-employment",
    "medication-assisted-weight-loss",
];

const IRRELEVANT_ITEMS = [
    "id",
    "patientId",
    "relativeWithMentalIllnessOrSuicide",
    "patientInformationConsentAndFinancialPolicyForm",
    "initialEvaluationForm",
    "controlledSubstanceForm",
    "medicationConsentForm",
    "patientRegistrationForm",
    "noticeOfPrivacyPracticesForm",
    "releaseReceiveForm",
    "selfPayForm",
    "treatmentConsentTelehealthInPersonTreatmentConsent",
    "terminationPolicy",
    "screeningForm",
];

const FormsTab = ({ forms }) => {
    const relevantForms = Object.entries(forms).filter(
        ([key, value]) => !IRRELEVANT_ITEMS.includes(key)
    );

    const { pdfDocs, uiForms } = useMemo(() => {
        const pdfDocForms = {};
        const otherForms = {};

        relevantForms.forEach(([key, value]) => {
            if (key === "consentForms") {
                value.forEach((consentForm) => {
                    const { consentType } = consentForm;

                    if (PDF_FORM_KEYS.includes(consentType)) {
                        pdfDocForms[consentType] = consentForm;
                    }
                });
            } else {
                if (PDF_FORM_KEYS.includes(key)) {
                    pdfDocForms[key] = value;
                } else {
                    otherForms[key] = value;
                }
            }
        });

        const pdfDocs = Object.entries(pdfDocForms).map(
            ([key, value], index) => ({
                id: index + 1,
                title: formatTitle(key),
                url: value?.file ? value?.file : "",
                pdf: true,
            })
        );

        const uiForms = Object.entries(otherForms).map(
            ([key, value], index) => {
                const otherUiForms = {
                    intakeForm: value ? <IntakeForm data={value} /> : "",
                    adhdForm: value ? <AdhdForm data={value} /> : "",
                    anxietyDisorderForm: value ? (
                        <AnxietyDisorderForm data={value} />
                    ) : (
                        ""
                    ),
                    depressionAssessmentForm: value ? (
                        <DepressionAssessmentForm data={value} />
                    ) : (
                        ""
                    ),
                    moodDisorderAssessmentForm: value ? (
                        <MoodDisorderAssessmentForm data={value} />
                    ) : (
                        ""
                    ),
                };

                return {
                    id: index + 1,
                    key: key,
                    title: formatTitle(key),
                    data: value || "",
                    component: otherUiForms[key],
                };
            }
        );

        return { pdfDocs, uiForms };
    }, [forms]);

    const [documents, setDocuments] = useState(formDocs || []);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [isDocsSidebarOpen, setIsDocsSidebarOpen] = useState(false);

    return (
        <div className="relative flex flex-col sm:flex-row gap-4 md:gap-6 h-screen">
            <button
                className="lg:hidden self-start p-2 rounded bg-offWhite text-darkBlue border shadow"
                onClick={() => setIsDocsSidebarOpen(!isDocsSidebarOpen)}
            >
                {isDocsSidebarOpen ? (
                    <RiMenuUnfold2Line />
                ) : (
                    <RiMenuUnfoldLine />
                )}
            </button>

            <DocsSideNav
                title="Forms"
                data={[...pdfDocs, ...uiForms]}
                selectedDoc={selectedDoc}
                setSelectedDoc={setSelectedDoc}
                isSidebarOpen={isDocsSidebarOpen}
                setIsSidebarOpen={setIsDocsSidebarOpen}
            />

            {/* PDF Preview */}
            <div className="flex-1 p-4 bg-offWhite shadow-lg rounded-lg overflow-y-auto">
                {selectedDoc?.key ? (
                    selectedDoc.component ? (
                        <div className="">{selectedDoc.component}</div>
                    ) : (
                        <p>{`${selectedDoc?.title} has not been filled.`}</p>
                    )
                ) : selectedDoc?.pdf ? (
                    selectedDoc.url ? (
                        <iframe
                            src={selectedDoc.url}
                            loading="lazy"
                            title={selectedDoc.title}
                            className="w-full h-full border-none"
                        ></iframe>
                    ) : (
                        <p className="text-deepGrey">
                            {`${selectedDoc?.title} has not been generated.`}
                        </p>
                    )
                ) : (
                    <p className="text-deepGrey">
                        Select a document to preview
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormsTab;
