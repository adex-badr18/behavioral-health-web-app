import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../../assets/checkbox.jpg";
import { consents } from "./data";
import LetterHead from "../LetterHead";
import { convertIsoDateToReadable } from "../../../../utils";

const PdfDoc = ({ data }) => {
    const terminationData = {
        verification: {
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
            dob: {
                title: "Date of Birth:",
                value: data.verification.dob
                    ? new Date(data.verification.dob).toLocaleDateString()
                    : "N/A",
            },
            streetAddress: {
                title: "Street Address:",
                value: data.verification.address.streetName,
            },
            city: { title: "City:", value: data.verification.address.city },
            state: { title: "State:", value: data.verification.address.state },
            zipCode: {
                title: "Zip Code:",
                value: data.verification.address.zipCode,
            },
        },
        consent: {
            patientSignature: {
                title: "Patient's Signature:",
                value: data.consent.patientSignature,
            },
            witnessName: {
                title: " Witness Name:",
                value: data.consent.witnessName,
            },
            witnessSignature: {
                title: " Witness' Signature:",
                value: data.consent.witnessSignature,
            },
            patientSignDate: {
                title: "Patient Signature Date:",
                value: convertIsoDateToReadable(
                    data.consent.patientSignDate
                ) || "N/A",
            },
            witnessSignDate: {
                title: "Witness Signature Date:",
                value: convertIsoDateToReadable(
                    data.consent.witnessSignDate
                ) || "N/A",
            },
        },
    };

    const { verification, consent } = terminationData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Letterhead */}
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>Termination Policy Form</Text>

                    {/* Patient Personal Info */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Patient Information
                        </Text>

                        <View style={{ ...styles.fieldItem, marginBottom: 20 }}>
                            <Text style={styles.key}>Patient ID</Text>
                            <Text style={styles.value}>
                                {data?.verification?.patientId || "N/A"}
                            </Text>
                        </View>


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

                    {/* Agreement & Consents */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Termination Policy
                        </Text>
                        <View style={styles.flexCol}>
                            {consents.map((consent) => (
                                <View key={consent.id} style={styles.flexCol}>
                                    <View style={styles.flexRow}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {consent.description}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Acknowledgement
                        </Text>

                        <View style={styles.flexCol}>
                            <View style={styles.flexRow}>
                                <Image
                                    src={checkbox || ""}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={styles.consentLabel}>
                                    {`I, ${verification.fullName.value} understand and agree to BrightLife Enhancement Services Termination Policy stated above.`}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Witness Name and Signature */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>Witness</Text>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 5,
                                flexWrap: "wrap",
                            }}
                        >
                            <View
                                style={{
                                    ...styles.flexRow,
                                    alignItems: "center",
                                    width: "",
                                }}
                            >
                                <Text style={styles.key}>Witness Name:</Text>
                                <Text style={styles.value}>
                                    {consent.witnessName.value || "N/A"}
                                </Text>
                            </View>

                            <View
                                style={{
                                    ...styles.flexRow,
                                    alignItems: "center",
                                    width: "",
                                }}
                            >
                                <Text style={styles.key}>
                                    Witness Signature Date:
                                </Text>
                                <Text style={styles.value}>
                                    {consent.witnessSignDate.value || "N/A"}
                                </Text>
                            </View>

                            <View
                                style={{
                                    ...styles.flexRow,
                                    alignItems: "center",
                                    width: "",
                                }}
                            >
                                <Text style={styles.key}>
                                    Witness Signature:
                                </Text>
                                {consent.witnessSignature.value ? (
                                    <Image
                                        src={
                                            consent.witnessSignature?.value ||
                                            ""
                                        }
                                        style={{ width: 100 }}
                                    />
                                ) : (
                                    <Text style={styles.value}>N/A</Text>
                                )}
                            </View>
                        </View>
                    </View>

                    {/* Patient's Date and Signature */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>Patient</Text>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 5,
                                flexWrap: "wrap",
                                marginTop: "-30",
                            }}
                        >
                            <View
                                style={{
                                    ...styles.flexRow,
                                    alignItems: "center",
                                }}
                            >
                                <Text style={styles.key}>
                                    Patient Signature:
                                </Text>
                                {consent.patientSignature.value ? (
                                    <Image
                                        src={
                                            consent.patientSignature?.value ||
                                            ""
                                        }
                                        style={{ width: 100 }}
                                    />
                                ) : (
                                    <Text style={styles.value}>N/A</Text>
                                )}
                            </View>

                            <View
                                style={{
                                    ...styles.flexRow,
                                    alignItems: "center",
                                }}
                            >
                                <Text style={styles.key}>
                                    Patient Signature Date:
                                </Text>
                                <Text style={styles.value}>
                                    {consent.patientSignDate.value}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
