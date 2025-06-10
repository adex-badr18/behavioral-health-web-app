import { Document } from "@react-pdf/renderer";
import WeightLossConsent from "../components/WeightLossConsent";
import { PageWrapper } from "../components/pdfFormComponents";
import { getFullName } from "../../utils";
import { convertIsoDateToReadable } from "../../../../utils";

const WeightLossDoc = ({ formData }) => {
    const fullName = getFullName({
        firstName: formData?.basicInfo?.firstName || "",
        middleName: formData?.basicInfo?.middleName || "",
        lastName: formData?.basicInfo?.lastName || "",
    });

    return (
        <Document>
            <PageWrapper>
                <WeightLossConsent
                    data={{
                        fullName,
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />
            </PageWrapper>
        </Document>
    );
};

export default WeightLossDoc;
