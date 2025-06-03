import React, { useState } from "react";
import { PDFViewer, pdf } from "@react-pdf/renderer";

const PdfPreview = ({ Doc, ...rest }) => {
    const [loading, setLoading] = useState(false);

    const sendPdfToServer = async () => {
        setLoading(true);
        try {
            const blob = await pdf(
                <PdfDoc dataObj={patientData} letterhead={letterhead} />
            ).toBlob();

            console.log(blob);

            // const formData = new FormData();
            // formData.append("file", blob, "patient_info.pdf");

            // const response = await axios.post("https://your-backend-endpoint.com/upload", formData, {
            //     headers: { "Content-Type": "multipart/form-data" },
            // });

            // console.log("PDF uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading PDF:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PDFViewer style={{ width: "100%", height: "800px" }} {...rest}>{Doc}</PDFViewer>
    );
};

export default PdfPreview;
