import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../../assets/checkbox.jpg";
import { formatCamelCase } from "../../utils";
import { consents, risksAndBenefits } from "./data";
import LetterHead from "../LetterHead";

const PdfDoc = ({ data }) => {
    const treatmentConsentData = {
        verification: {
            id: { title: "Patient ID:", value: data.verification.id },
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
            dob: {
                title: "Date of Birth:",
                value: new Date(data.verification.dob).toLocaleDateString(),
            },
            streetAddress: {
                title: "Street Address:",
                value: data.verification.street,
            },
            city: { title: "City:", value: data.verification.city },
            state: { title: "State:", value: data.verification.state },
            zipCode: {
                title: "Zip Code:",
                value: data.verification.zipCode,
            },
        },
        consent: {
            patient: {
                patientSignature: {
                    title: "Patient's Signature:",
                    value: data.consent.patientSignature,
                },
                patientSignDate: {
                    title: "Date:",
                    value: new Date(
                        data.consent.patientSignDate
                    ).toLocaleDateString(),
                },
            },
            guardian: {
                guardianName: {
                    title: "Guardian Name:",
                    value: data.consent.guardianName,
                },
                patientGuardianRelationship: {
                    title: "Relationship:",
                    value: data.consent.patientGuardianRelationship,
                },
                guardianSignature: {
                    title: "Guardian Signature:",
                    value: data.consent.guardianSignature,
                },
                guardianSignDate: {
                    title: "Date:",
                    value: new Date(
                        data.consent.guardianSignDate
                    ).toLocaleDateString(),
                },
            },
        },
    };

    const { verification, consent } = treatmentConsentData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        Telehealth, In-Person Treatment, and
                        Medication/Education Consent Form
                    </Text>

                    {/* Patient Personal Info */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Patient Information
                        </Text>
                        <View style={styles.row}>
                            {Object.entries(verification).map(([key, val]) => (
                                <View key={key} style={styles.fieldItem}>
                                    <Text style={styles.key}>{val.title}</Text>
                                    <Text style={styles.value}>
                                        {val.value || "N/A"}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Consents */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Treatment Consents
                        </Text>
                        {consents.map((consent) => (
                            <View
                                key={consent.id}
                                style={{
                                    ...styles.flexCol,
                                    marginBottom: "10",
                                }}
                            >
                                <Text style={styles.consentTitle}>
                                    {consent.title}
                                </Text>
                                <Text style={styles.consentDescr}>
                                    {String(consent.consent) +
                                        " " +
                                        String(consent.risk)}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Risks and Benefits */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Risks & Benefits
                        </Text>
                        {risksAndBenefits.map((risk) => (
                            <View
                                key={risk.id}
                                style={{
                                    ...styles.flexCol,
                                    marginBottom: "10",
                                }}
                            >
                                <Text style={styles.consentTitle}>
                                    {risk.title}
                                </Text>
                                <Text style={styles.consentDescr}>
                                    {risk.descr}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Acknowledgement
                        </Text>

                        <View
                            style={{
                                ...styles.flexRow,
                                marginBottom: "16",
                            }}
                        >
                            <Image
                                src={checkbox || ""}
                                style={{ width: 30, height: 30 }}
                            />
                            <Text style={styles.consentLabel}>
                                {`By signing below, I, ${verification.fullName.value} confirm that I have read and understand the above information, that all of my questions have been answered, and that I voluntarily consent to participate in telehealth services, receive in-person treatment, and accept medication and educational materials as part of my behavioral health care.`}
                            </Text>
                        </View>

                        <View style={styles.flexCol}>
                            {/* Guardian Info and Signature */}
                            {data.consent.isMinor.toLowerCase() === "yes" && (
                                <View style={styles.sectionWrapper}>
                                    <View
                                        style={{
                                            ...styles.row,
                                            ...styles.flexRowBetween,
                                            width: "100%",
                                        }}
                                    >
                                        {Object.values(consent.guardian).map(
                                            (obj, index) =>
                                                obj.title
                                                    .toLowerCase()
                                                    .includes("signature") ? (
                                                    <View
                                                        key={index}
                                                        style={{
                                                            ...styles.flexRow,
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Text
                                                            style={styles.key}
                                                        >
                                                            {obj.title}
                                                        </Text>
                                                        {obj.value ? (
                                                            <Image
                                                                src={obj.value}
                                                                style={{
                                                                    width: 100,
                                                                }}
                                                            />
                                                        ) : (
                                                            <Text
                                                                style={
                                                                    styles.value
                                                                }
                                                            >
                                                                N/A
                                                            </Text>
                                                        )}
                                                    </View>
                                                ) : (
                                                    <View
                                                        key={index}
                                                        style={{
                                                            ...styles.flexRow,
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Text
                                                            style={styles.key}
                                                        >
                                                            {obj.title}
                                                        </Text>
                                                        <Text
                                                            style={styles.value}
                                                        >
                                                            {obj.value || "N/A"}
                                                        </Text>
                                                    </View>
                                                )
                                        )}
                                    </View>
                                </View>
                            )}

                            {/* Patient Signature and Date */}
                            <View style={styles.sectionWrapper}>
                                <View
                                    style={{
                                        ...styles.flexRowBetween,
                                        width: "100%",
                                    }}
                                >
                                    {Object.values(consent.patient).map((obj, index) =>
                                        obj.title
                                            .toLocaleLowerCase()
                                            .includes("signature") ? (
                                            <View
                                            key={index}
                                                style={{
                                                    ...styles.flexRow,
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text style={styles.key}>
                                                    {obj.title}
                                                </Text>
                                                {obj.value ? (
                                                    <Image
                                                        src={obj.value}
                                                        style={{
                                                            width: 100,
                                                        }}
                                                    />
                                                ) : (
                                                    <Text style={styles.value}>
                                                        N/A
                                                    </Text>
                                                )}
                                            </View>
                                        ) : (
                                            <View
                                                style={{
                                                    ...styles.flexRow,
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text style={styles.key}>
                                                    {obj.title}
                                                </Text>
                                                <Text style={styles.value}>
                                                    {obj.value || "N/A"}
                                                </Text>
                                            </View>
                                        )
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
