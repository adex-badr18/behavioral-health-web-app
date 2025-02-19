import DateField from "../../../../../components/DateField";
import SignaturePad from "../../../../../components/SignaturePad";
import { Checkbox } from "../../../../../components/CheckboxGroup";
import SelectField from "../../../../../components/SelectField";
import FieldItem from "../../../../../components/FieldItem";
import { consents } from "./data";
import { booleanOptions } from "../../data";

const Consents = ({ formData, onChange, consent, setConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    console.log(formData);
    console.log(consent);

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                    Medication Consent Form
                </h3>

                <p className="text-vividRed text-center">
                    Please read this form carefully and ask any questions you
                    may have before signing.
                </p>

                <div className="space-y-4">
                    {consents.map((consent) => (
                        <div
                            key={consent.id}
                            className="p-4 border rounded-lg space-y-4"
                        >
                            <h5 className="font-medium text-darkBlue text-lg md:text-xl">
                                {consent.title}
                            </h5>

                            <p className="text-grey">{consent.consent}</p>

                            {consent.lists && (
                                <ul className="">
                                    {consent.lists.map((item) => (
                                        <li
                                            key={item.id}
                                            className="flex items-start gap-4 text-grey"
                                        >
                                            <div className="h-2 w-2 rounded-full bg-deepGrey flex-shrink-0 mt-2"></div>
                                            <span className="">
                                                <strong>{`${item.title}: `}</strong>
                                                {item.descr}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border rounded space-y-5">
                <h4 className="text-xl text-darkBlue font-medium">
                    Acknowledgement & Agreement
                </h4>

                <Checkbox
                    label={`I, ${patientFullName} have read and understand the above information regarding my prescribed medications. I have had the opportunity to ask questions and receive answers that address my concerns. By signing below, I voluntarily consent to receive treatment as described.`}
                    value={`I, ${patientFullName} have read and understand the above information regarding my prescribed medications. I have had the opportunity to ask questions and receive answers that address my concerns. By signing below, I voluntarily consent to receive treatment as described.`}
                    checked={consent}
                    onChange={() => setConsent((prev) => !prev)}
                    checkedClass="border-2 border-darkBlue"
                    unCheckedClass="border-lightGrey"
                />

                <div className="p-4 border rounded space-y-5">
                    <h5 className="tex-lg font-medium">Patient Signature</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <FieldItem
                            label="Patient's Name"
                            value={patientFullName}
                            colspanClass="col-span-2"
                        />

                        {formData.consent.patientSignDate && (
                            <FieldItem
                                label="Date"
                                value={new Date(
                                    formData.consent.patientSignDate
                                ).toLocaleDateString()}
                            />
                        )}
                    </div>

                    <div className="space-y-1">
                        <label className="block text-grey">
                            Patient Signature
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="patientSignature"
                            dateSection="consent"
                            dateFieldPath="patientSignDate"
                        />
                    </div>
                </div>

                {!formData.consent.guardianSignDate && (
                    <SelectField
                        label="Is Patient a Minor?"
                        name="isMinor"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.consent.isMinor}
                        section="consent"
                        field="isMinor"
                        handleSelectChange={onChange}
                    />
                )}

                {/* Guardian Signature if patient is a minor */}
                {formData.consent.isMinor.toLowerCase() === "yes" && (
                    <div className="p-4 border rounded space-y-5">
                        <h5 className="tex-lg font-medium">
                            Legal Guardian/Authorized Representative
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <FieldItem
                                label="Guardian's Name"
                                value={formData.consent.guardianName}
                            />
                            <FieldItem
                                label="Relationship to Patient"
                                value={
                                    formData.consent.patientGuardianRelationship
                                }
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-grey">
                                Guardian Signature
                            </label>
                            <SignaturePad
                                handleInputChange={onChange}
                                section="consent"
                                fieldPath="guardianSignature"
                                dateSection="consent"
                                dateFieldPath="guardianSignDate"
                            />
                        </div>

                        {formData.consent.guardianSignDate && (
                            <FieldItem
                                label="Date"
                                value={new Date(
                                    formData.consent.guardianSignDate
                                ).toLocaleDateString()}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Consents;
