import FieldItem from "../../../../../components/FieldItem";
import SignaturePad from "../../../../../components/SignaturePad";
import { convertIsoDateToReadable } from "../../../../utils";

const WeightLossForm = ({ formData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-3 text-center">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        MEDICATION-ASSISTED WEIGHT LOSS
                    </h3>

                    <p className="text-originalGreen">
                        Sign the form to confirm your authorization.
                    </p>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                {/* Signatures and consents */}
                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Signature & Date
                    </h4>

                    <SignaturePad
                        handleInputChange={onChange}
                        section="data"
                        fieldPath="signature"
                        dateSection="data"
                        dateFieldPath="date"
                        signature={formData.data.signature}
                    />

                    {formData.data?.date && (
                        <FieldItem
                            label="Date"
                            value={convertIsoDateToReadable(
                                formData.data?.date
                            )}
                            isRequired={true}
                        />
                    )}
                </div>
            </div>
        </form>
    );
};

export default WeightLossForm;
