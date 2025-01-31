import { useState } from "react";
import MultiStepForm from "../../../../components/MultiStepForm";
import VerificationStep from "../../../../components/VerificationStep";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../components/PdfPreview";
import PrivacyPolicy from "./PrivacyPolicy";

const NoticeOfPrivacy = () => {
    const [policyConsent, setPolicyConsent] = useState(false);
    const [formData, setFormData] = useState({
        verification: {
            id: "",
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
        },
        consent: {
            patientSignature: "",
            noticeEffectDate: "",
            date: new Date(),
        },
    });

    // Handle form element change
    const handleFormElementChange = (section, fieldPath, value) => {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    const formSteps = {
        steps: ["Verification", "Privacy Practices", "Preview"],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Privacy Practices",
                component: (
                    <PrivacyPolicy
                        formData={formData}
                        onChange={handleFormElementChange}
                        consent={policyConsent}
                        setConsent={setPolicyConsent}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: (
                    <PdfPreview key={7} Doc={<PdfDoc data={formData} />} />
                ),
            },
        ],
    };

    return (
        <div>
            <MultiStepForm
                formData={formData}
                formSize="md"
                optionalFields={[]}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
            />
        </div>
    );
};

export default NoticeOfPrivacy;
