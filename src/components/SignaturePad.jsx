import { useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({
    handleInputChange,
    section,
    fieldPath,
    dateSection,
    dateFieldPath,
    signature,
}) => {
    const sigCanvasRef = useRef(null);

    useEffect(() => {
        if (signature && sigCanvasRef.current) {
            sigCanvasRef.current.fromDataURL(signature);
        }
    }, [signature]);

    // Save signature to state after drawing ends
    const handleDrawingEnded = () => {
        if (sigCanvasRef.current) {
            const signatureData = sigCanvasRef.current.toDataURL();
            handleInputChange(section, fieldPath, signatureData);
            handleInputChange(
                dateSection,
                dateFieldPath,
                new Date().toISOString()
            );
        }
    };

    // Clear signature
    const clearSignature = (e) => {
        e.preventDefault();

        handleInputChange(section, fieldPath, "");
        handleInputChange(dateSection, dateFieldPath, "");
        sigCanvasRef.current.clear();
    };

    return (
        <div className="space-y-2 relative">
            <SignatureCanvas
                ref={sigCanvasRef}
                onEnd={handleDrawingEnded}
                penColor="blue"
                canvasProps={{
                    className: "border rounded-lg w-full h-56",
                }}
            />
            <button
                onClick={clearSignature}
                className="absolute top-2 right-4 bg-vividRed hover:bg-red-500 text-white text-sm font-medium px-2 py-1 rounded-md"
            >
                Clear
            </button>
        </div>
    );
};

export default SignaturePad;
