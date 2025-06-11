import React, { useState } from "react";
import { PDFViewer, pdf, usePDF } from "@react-pdf/renderer";
import pdfImage from "../assets/pdf-image.png"

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
        <div className="md:h-[90vh] w-full p-6 border border-gray-300 rounded overflow-auto">
            <object
                data={pdfDoc.url}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <div className="flex flex-col gap-2 items-center">
                    <img src={pdfImage} className="w-16" alt="" />
                    <p className="p-4 text-center">
                        Your device does not support embedded PDFs.
                    </p>
                    <a
                        href={pdfDoc.url}
                        download
                        className="inline-block text-white bg-originalGreen px-4 py-2 rounded-md text-center"
                    >
                        Open Document
                    </a>
                </div>
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
