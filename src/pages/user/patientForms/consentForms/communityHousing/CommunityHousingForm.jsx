import FieldItem from "../../../../../components/FieldItem";
import SignaturePad from "../../../../../components/SignaturePad";
import { convertIsoDateToReadable } from "../../../../utils";
import SelectField from "../../../../../components/SelectField";
import { insuranceNames } from "../../../appointment/data";

const CommunityHousingForm = ({ formData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-3 text-center">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        Community Housing Consent Forms
                    </h3>

                    <p className="text-originalGreen">
                        Please fill the form below carefuly. Sign the forms to
                        confirm your authorization.
                    </p>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Authorization to Bill Insurance
                    </h4>

                    <SelectField
                        label="Insurance Company"
                        name="insuranceCompany"
                        title="-- Select an option --"
                        data={insuranceNames}
                        value={formData.data.insuranceCompany}
                        section="data"
                        field="insuranceCompany"
                        handleSelectChange={onChange}
                        isRequired={true}
                    />
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

export default CommunityHousingForm;
