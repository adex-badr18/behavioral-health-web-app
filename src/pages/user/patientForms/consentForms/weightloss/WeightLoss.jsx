import { Document } from "@react-pdf/renderer";
import PdfPreview from "../../../../../components/PdfPreview";
import WeightLossConsent from "../components/WeightLossConsent";
import { PageWrapper } from "../components/pdfFormComponents";
import signature from "../../../../../assets/signature.jpg";

const WeightLoss = () => {
    return (
        <PdfPreview
            Doc={
                <Document>
                    <PageWrapper>
                        <WeightLossConsent
                            data={{
                                fullName: "Johnson Williams",
                                signature: signature,
                                date: "03/04/2024",
                            }}
                        />
                    </PageWrapper>
                </Document>
            }
        />
    );
};

export default WeightLoss;
