import { Document, Page } from "@react-pdf/renderer";
import PdfPreview from "../../../../../components/PdfPreview";
import ClientRight from "../components/ClientRight";
import RightAcknowledgement from "../components/RightAcknowledgement";
import ConsentForServices from "../components/ConsentForServices";
import MedicationAgreement from "../components/MedicationAgreement";
import Hipaa from "../components/Hipaa";
import { PageWrapper } from "../components/pdfFormComponents";
import signature from "../../../../../assets/signature.jpg";
import MarylandNotice from "../components/MarylandNotice";
import BillInsurance from "../components/BillInsurance";
import ReleaseReceive from "../components/ReleaseReceive";
import GrievancePolicy from "../components/GrievancePolicy";
import TelehealthConsent from "../components/TelehealthConsent";
import MessageRemindersConsent from "../components/MessageRemindersConsent";
import CounsellingConfidentialityConsent from "../components/CounsellingConfidentialityConsent";
import CareCoordinationConsent from "../components/CareCoordinationConsent";
import ItpConsent from "../components/ItpConsent";
import ProfessionalConduct from "../components/ProfessionalConduct";
import ClientOrientation from "../components/ClientOrientation";
import Packets from "../components/Packets";

const Omhc = () => {
    return (
        <PdfPreview
            Doc={
                <Document>
                    {[
                        <Packets
                            list={[
                                "Copy of Photo ID -Send or Bring in during first visit",
                                "Copy of Insurance Card- Send or Bring in during first visit",
                                "Client’s Rights Acknowledgement",
                                "Consent for the Services",
                                "HIPAA Authorization Form",
                                "Notice of Policies and Practices to Protect the Privacy of Your Health Information.",
                                "Grievance Policy",
                                "Records Release",
                                "Counseling Confidentiality",
                                "Coordination of Care",
                                "ITP Agreement",
                            ]}
                            title="CONSENT FOR SERVICES FORMS"
                        />,
                        <ClientRight
                            data={{
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <RightAcknowledgement
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <ConsentForServices
                            data={{
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <MedicationAgreement
                            data={{
                                fullName: "Johnson Tulip",
                                whoYouAre: [
                                    {
                                        title: "Client",
                                        value: true,
                                    },
                                    {
                                        title: "Parent",
                                        value: false,
                                    },
                                ],
                                dob: `05/21/1990`,
                                pharmacy: `The Gideon Pharmacy`,
                                prescribedMedications: [
                                    "Paracetamol",
                                    "Procold",
                                    "Coughtalin",
                                ],
                                signature: signature,
                                date: `05/05/2023`,
                            }}
                        />,
                        <Hipaa
                            data={{
                                signature: signature,
                                date: "05/12/2025",
                            }}
                        />,
                        <MarylandNotice
                            data={{
                                signature: signature,
                                date: "05/12/2025",
                            }}
                        />,
                        <BillInsurance
                            data={{
                                fullName: "Jackson Williams",
                                clientAddress:
                                    "204 Potomac Street Maryland 214567",
                                insuranceCompany: "Medicare",
                                signature: signature,
                                date: "02/23/2025",
                            }}
                        />,
                        <ReleaseReceive
                            data={{
                                fullName: "Johnson Tulip",
                                programs: [
                                    {
                                        title: "Mental Health Services",
                                        value: true,
                                    },
                                    {
                                        title: "PRP",
                                        value: false,
                                    },
                                    {
                                        title: "Substance Use Treatment",
                                        value: false,
                                    },
                                ],
                                dob: `05/21/1990`,
                                permissions: [
                                    {
                                        title: "Release",
                                        value: true,
                                    },
                                    {
                                        title: "Receive",
                                        value: false,
                                    },
                                    {
                                        title: "Verbally discuss the information checked with the second party as directed below",
                                        value: false,
                                    },
                                ],
                                secondParty: {
                                    name: "Gideon Health Care",
                                    phone: "4103423456",
                                    fax: "4109871234",
                                },
                                itemsCovered: [
                                    {
                                        title: "Acknowledgement of receipt of services",
                                        value: true,
                                    },
                                    {
                                        title: "Diagnosis",
                                        value: false,
                                    },
                                    {
                                        title: "Lab Results",
                                        value: false,
                                    },
                                    {
                                        title: "Progress Note",
                                        value: true,
                                    },
                                    {
                                        title: "Medication Record",
                                        value: true,
                                    },
                                    {
                                        title: "Intake Assessment",
                                        value: false,
                                    },
                                    {
                                        title: "Treatment Plan",
                                        value: false,
                                    },
                                    {
                                        title: "Clinical Summary",
                                        value: false,
                                    },
                                    {
                                        title: "Psychological Summary",
                                        value: false,
                                    },
                                    {
                                        title: "Others",
                                        value: "",
                                    },
                                ],
                                signature: signature,
                                date: `05/05/2023`,
                            }}
                        />,
                        <GrievancePolicy
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                                otherText:
                                    "For questions or assistance with filing a grievance, contact the Client Rights Representative during business hours (9:00 AM - 4:00 PM).",
                            }}
                        />,
                        <TelehealthConsent
                            data={{ signature: signature, date: "03/04/2024" }}
                        />,
                        <MessageRemindersConsent
                            data={{
                                fullName: "Johnson Williams",
                                phone: "4102345678",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <CounsellingConfidentialityConsent
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <CareCoordinationConsent
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <ItpConsent
                            data={{
                                fullName: "Johnson Williams",
                                dob: "01/04/1990",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <ProfessionalConduct
                            data={{
                                fullName: "Johnson Williams",
                                dob: "01/04/1990",
                                initial: "AB",
                                acceptanceChoices: [
                                    {
                                        title: "Yes, I understand and have been given the opportunity to ask questions about Advance Directives and the MOLST form.",
                                        value: true,
                                    },
                                    {
                                        title: "No, I decline to discuss this at this time.",
                                        value: false,
                                    },
                                ],
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <ClientOrientation
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                    ].map((consentForm, index) => (
                        <PageWrapper key={index}>{consentForm}</PageWrapper>
                    ))}
                </Document>
            }
        />
    );
};

export default Omhc;
