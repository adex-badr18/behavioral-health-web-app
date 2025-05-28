import { Document } from "@react-pdf/renderer";
import PdfPreview from "../../../../../components/PdfPreview";
import ClientRight from "../components/ClientRight";
import RightAcknowledgement from "../components/RightAcknowledgement";
import ConsentForServices from "../components/ConsentForServices";
import { PageWrapper } from "../components/pdfFormComponents";
import signature from "../../../../../assets/signature.jpg";
import BillInsurance from "../components/BillInsurance";
import GrievancePolicy from "../components/GrievancePolicy";
import TelehealthConsent from "../components/TelehealthConsent";
import MessageRemindersConsent from "../components/MessageRemindersConsent";
import ClientOrientation from "../components/ClientOrientation";
import Packets from "../components/Packets";
import HousingOverview from "../components/HousingOverview";
import ResidentialCare from "../components/ResidentialCare";
import HousingRules from "../components/HousingRules";
import DischargePlanning from "../components/DischargePlanning";
import HousingConsent from "../components/HousingConsent";

const CommunityHousing = () => {
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
                            ]}
                            title="Residential Supportive Housing Program (ASAM Level 3.1)"
                            subtitle="Admission & Consent Packet"
                            otherText="Effective Date: 2025"
                        />,
                        <ClientRight signature={signature} date="05/12/2025" />,
                        <RightAcknowledgement
                            fullName="Jacquiline Johnson"
                            signature={signature}
                            date="05/12/2025"
                        />,
                        <ConsentForServices
                            signature={signature}
                            date="05/12/2025"
                        />,
                        <HousingOverview />,
                        <ResidentialCare />,
                        <HousingRules />,
                        <DischargePlanning />,
                        <HousingConsent
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />,
                        <BillInsurance
                            fullName="Jackson Williams"
                            clientAddress="204 Potomac Street Maryland 214567"
                            insuranceCompany="Medicare"
                            signature={signature}
                            date="02/23/2025"
                        />,
                        <GrievancePolicy
                            fullName="Jack Wilshere"
                            signature={signature}
                            date="01/01/2025"
                            otherText="For questions or assistance with filing a grievance, contact the Client Rights Representative
                            during business hours (9:00 AM - 4:00 PM)."
                        />,
                        <TelehealthConsent
                            signature={signature}
                            date="01/01/2025"
                        />,
                        <MessageRemindersConsent
                            data={{
                                fullName: "Johnson Williams",
                                phone: "4102345678",
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

export default CommunityHousing;
