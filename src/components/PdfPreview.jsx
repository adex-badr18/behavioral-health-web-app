import React, { useState } from "react";
import { PDFViewer, pdf, usePDF } from "@react-pdf/renderer";

import Spinner from "./Spinner";

const PdfPreview = ({ Doc, title, ...rest }) => {
    // SECOND OPTION

    const [pdfDoc, updatePdfDoc] = usePDF({ document: Doc });

    if (pdfDoc.loading) {
        return (
            <Spinner
                secondaryText={`Loading document...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    if (pdfDoc.error) {
        return <p>Failed to load document: {pdfDoc.error.message}</p>;
    }

    return (
        <div className="h-[90vh] w-full border border-gray-300 rounded overflow-auto">
            <object
                data={pdfDoc.url}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <p className="p-4">
                    Your device does not support embedded PDFs.{" "}
                    <a
                        href={pdfDoc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Open PDF in a new tab
                    </a>
                    .
                </p>
            </object>
        </div>
    );

    // FIRST OPTION

    // const [loading, setLoading] = useState(false);

    // const sendPdfToServer = async () => {
    //     setLoading(true);
    //     try {
    //         const blob = await pdf(
    //             <PdfDoc dataObj={patientData} letterhead={letterhead} />
    //         ).toBlob();

    //         console.log(blob);

    //         // const formData = new FormData();
    //         // formData.append("file", blob, "patient_info.pdf");

    //         // const response = await axios.post("https://your-backend-endpoint.com/upload", formData, {
    //         //     headers: { "Content-Type": "multipart/form-data" },
    //         // });

    //         // console.log("PDF uploaded successfully:", response.data);
    //     } catch (error) {
    //         console.error("Error uploading PDF:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // return (
    //     <PDFViewer style={{ width: "100%", height: "800px" }} {...rest}>{Doc}</PDFViewer>
    // );
};

export default PdfPreview;
