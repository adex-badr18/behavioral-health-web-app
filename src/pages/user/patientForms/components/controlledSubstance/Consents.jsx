import DateField from "../../../../../components/DateField";
import TextField from "../../../../../components/TextField";
import SignaturePad from "../../../../../components/SignaturePad";
import { Checkbox } from "../../../../../components/CheckboxGroup";
import SelectField from "../../../../../components/SelectField";
import FieldItem from "../../../../../components/FieldItem";
import { consents } from "./data";
import { booleanOptions } from "../../data";
import { convertIsoDateToReadable } from "../../../../utils";

const Consents = ({ formData, onChange, consent, setConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    console.log(formData);

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                        Controlled Substance Form
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <p className="text-deepGrey text-center">
                    Please read this form carefully and ask any questions you
                    may have before signing.
                </p>

                <p className="text-deepGrey">
                    I acknowledge that I have been prescribed controlled
                    substances as part of my treatment plan at{" "}
                    <span className="text-lightGreen font-semibold">
                        BrightLife Enhancement Services.
                    </span>
                </p>

                <p className="text-deepGrey">
                    I understand that controlled substances are medications
                    regulated by federal and state laws due to their potential
                    for abuse, dependency, and misuse. This form outlines the
                    associated risks, patient responsibilities, and guidelines
                    for the safe use of these medications.
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

                            <p className="text-deepGrey">{consent.consent}</p>

                            {consent.lists && (
                                <ul className="">
                                    {consent.lists.map((item) => (
                                        <li
                                            key={item.id}
                                            className="flex items-start gap-4 text-deepGrey"
                                        >
                                            <div className="h-2 w-2 rounded-full bg-deepGrey flex-shrink-0 mt-2"></div>
                                            <span className="">
                                                {item.title && (
                                                    <strong>{`${item.title}: `}</strong>
                                                )}
                                                {item.descr}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {consent.secConsent && (
                                <p className="text-deepGrey">
                                    {consent.secConsent}
                                </p>
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
                    isRequired={true}
                />

                <div className="p-4 border rounded space-y-5">
                    <h5 className="tex-lg font-medium">Patient Signature</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <FieldItem
                            label="Patient's Name"
                            value={patientFullName}
                            colspanClass="col-span-2"
                            isRequired={true}
                        />

                        {formData.consent.patientSignDate && (
                            <FieldItem
                                label="Date"
                                value={convertIsoDateToReadable(
                                    formData.consent.patientSignDate
                                )}
                                isRequired={true}
                            />
                        )}
                    </div>

                    <div className="space-y-1">
                        <label className="block text-deepGrey">
                            Patient Signature{" "}
                            <small className="text-vividRed text-lg">*</small>
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="patientSignature"
                            dateSection="consent"
                            dateFieldPath="patientSignDate"
                            signature={formData.consent.patientSignature}
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
                        isRequired={true}
                    />
                )}

                {/* Guardian Signature if patient is a minor */}
                {formData.consent.isMinor.toLowerCase() === "yes" && (
                    <div className="p-4 border rounded space-y-5">
                        <h5 className="tex-lg font-medium">
                            Legal Guardian/Authorized Representative
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <TextField
                                type="text"
                                label="Guaardian's Name"
                                name="guardianName"
                                placeholder="Guaardian's Name"
                                section="consent"
                                field="guardianName"
                                value={formData.consent.guardianName}
                                handleInputChange={onChange}
                                isRequired={true}
                            />

                            <TextField
                                type="text"
                                label="Relationship to Patient"
                                name="patientGuardianRelationship"
                                placeholder="Relationship to Patient"
                                section="consent"
                                field="patientGuardianRelationship"
                                value={
                                    formData.consent.patientGuardianRelationship
                                }
                                handleInputChange={onChange}
                                isRequired={true}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-deepGrey">
                                Guardian Signature{" "}
                                <small className="text-vividRed text-lg">
                                    *
                                </small>
                            </label>
                            <SignaturePad
                                handleInputChange={onChange}
                                section="consent"
                                fieldPath="guardianSignature"
                                dateSection="consent"
                                dateFieldPath="guardianSignDate"
                                signature={formData.consent.guardianSignature}
                            />
                        </div>

                        {formData.consent.guardianSignDate && (
                            <FieldItem
                                label="Date"
                                value={convertIsoDateToReadable(
                                    formData.consent.guardianSignDate
                                )}
                                isRequired={true}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Consents;
