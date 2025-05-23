import { Document } from "@react-pdf/renderer";
import PdfPreview from "../../../../../components/PdfPreview";
import ClientRight from "../components/ClientRight";

const Omhc = () => {
    return (
        <PdfPreview
            Doc={
                <Document>
                    <ClientRight />
                </Document>
            }
        />
    );
};

export default Omhc;
