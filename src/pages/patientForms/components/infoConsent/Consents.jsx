import DateField from "../../../../components/DateField";
import SignaturePad from "../../../../components/SignaturePad";
import { Checkbox } from "../../../../components/CheckboxGroup";

import { consents } from "./data";

const Consents = ({ formData, onChange, infoConsent, setInfoConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    console.log(formData)
    console.log(infoConsent)

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Agreement Terms and Consent
                </h3>

                <div className="space-y-4">
                    {consents.map((option) => (
                        <div
                            key={option.id}
                            className="p-4 border rounded-lg space-y-4"
                        >
                            <h5 className="font-medium text-darkBlue text-lg md:text-xl">
                                {option.title}
                            </h5>

                            <p className="text-grey">{option.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border rounded space-y-5">
                <h4 className="text-xl text-darkBlue font-medium">
                    Agreement Confirmation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="space-y-1 col-span-2">
                        <label htmlFor="lastName" className="block text-grey">
                            Patient's Name
                        </label>
                        <div id="lastName" className="input">
                            {patientFullName}
                        </div>
                    </div>

                    <DateField
                        label="Date"
                        name="date"
                        field="date"
                        section="consent"
                        placeholder="MM/DD/YYYY"
                        handleFormElementChange={onChange}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        defaultDate={new Date()}
                    />
                </div>

                <Checkbox
                    label={`I, ${patientFullName} understand and agree to all the terms and conditions stated above.`}
                    value={`I, ${patientFullName} understand and agree to all the terms and conditions stated above.`}
                    checked={infoConsent}
                    onChange={() => setInfoConsent((prev) => !prev)}
                    checkedClass="border-2 border-darkBlue"
                    unCheckedClass="border-lightGrey"
                />

                <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-grey">
                        Signature
                    </label>
                    <SignaturePad
                        handleInputChange={onChange}
                        section="consent"
                        fieldPath="signature"
                    />
                </div>
            </div>
        </div>
    );
};

export default Consents;
