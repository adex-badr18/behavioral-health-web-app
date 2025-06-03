import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    NumberedList,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
    CheckboxImage,
    OrdinaryText,
    FlexColContainer,
    GridLayout,
} from "./pdfFormComponents";
import checkedImg from "../../../../../assets/checked.png";
import uncheckedImg from "../../../../../assets/unchecked.png";
import { formatCamelCase, formatOptionsForPdf } from "../../utils";
import { useMemo } from "react";

const ReleaseReceive = ({ data }) => {
    const {
        fullName,
        dob,
        programs,
        permissions,
        secondParty,
        itemsCovered,
        otherItemsCovered,
        date,
        signature,
    } = data;

    const allPrograms = [
        "Mental Health Services",
        "PRP",
        "Substance Use Treatment",
    ];
    const allPermissions = [
        "Release",
        "Receive",
        "Verbally discuss the information checked with the second party as directed below",
    ];
    const allItemsCovered = [
        "Acknowledgement of receipt of services",
        "Diagnosis",
        "Lab Results",
        "Progress Note",
        "Medication Record",
        "Intake Assessment",
        "Treatment Plan",
        "Clinical Summmary",
    ];

    const { formattedPrograms, formattedPermissions, formattedItemsCovered } =
        useMemo(() => {
            return {
                formattedPrograms: formatOptionsForPdf(
                    allPrograms,
                    programs,
                    ""
                ),
                formattedPermissions: formatOptionsForPdf(
                    allPermissions,
                    permissions,
                    ""
                ),
                formattedItemsCovered: formatOptionsForPdf(
                    allItemsCovered,
                    itemsCovered,
                    otherItemsCovered
                ),
            };
        }, [programs, permissions, itemsCovered, otherItemsCovered]);

    return (
        <View>
            <Title>AUTHORIZATION TO RELEASE/RECEIVE INFORMATION</Title>

            <FlexColContainer>
                <FlexGapContainer containerStyle={{ alignItems: "flex-start" }}>
                    <BoldText>Agency:</BoldText>
                    <FlexColContainer containerStyle={{ gap: 2 }}>
                        <OrdinaryText>
                            BrightLife Enhancement Services
                        </OrdinaryText>
                        <OrdinaryText>
                            226 N Potomac Street Hagerstown MD 21740
                        </OrdinaryText>
                    </FlexColContainer>
                </FlexGapContainer>

                <FlexGapContainer containerStyle={{ gap: 30 }}>
                    <BoldText>Program: </BoldText>

                    {formattedPrograms.map((choice, index) => (
                        <FlexGapContainer key={index}>
                            <CheckboxImage
                                src={choice.value ? checkedImg : uncheckedImg}
                            />
                            <OrdinaryText>
                                {choice.title}
                                {/* {key === "PRP" ? key : formatCamelCase(key)} */}
                            </OrdinaryText>
                        </FlexGapContainer>
                    ))}
                </FlexGapContainer>
            </FlexColContainer>

            <Title style={{ fontSize: 12, marginBottom: 2, marginTop: 5 }}>
                FOR THE RELEASE OF PROTECTED HEALTH INFORMATION
            </Title>

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Patient's Full Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Patient's DOB:</BoldText>
                    <UnderlinedText>{dob}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <Paragraph>
                I above name program Brightlife Enhancement Services has my
                permission to
            </Paragraph>

            <FlexColContainer containerStyle={{ gap: 0 }}>
                {formattedPermissions.map((choice, index) => (
                    <FlexGapContainer key={index}>
                        <CheckboxImage
                            src={choice.value ? checkedImg : uncheckedImg}
                        />
                        <OrdinaryText>{choice.title}</OrdinaryText>
                    </FlexGapContainer>
                ))}
            </FlexColContainer>

            <BoldText style={{ marginTop: 12, marginBottom: 6 }}>
                Second Party:
            </BoldText>

            <FlexColContainer containerStyle={{ gap: 0 }}>
                <FlexGapContainer>
                    <BoldText>Other Individual/Agency:</BoldText>
                    <OrdinaryText>{secondParty.name}</OrdinaryText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Phone Number:</BoldText>
                    <OrdinaryText>{secondParty.phone}</OrdinaryText>
                </FlexGapContainer>
            </FlexColContainer>

            <FlexColContainer>
                <BoldText style={{ marginTop: 12, marginBottom: 6 }}>
                    Check all items covered by this release:
                </BoldText>

                <FlexGapContainer
                    containerStyle={{
                        rowGap: 5,
                        columnGap: 20,
                        flexWrap: "wrap",
                    }}
                >
                    {formattedItemsCovered.map((choice, index) => (
                        <FlexGapContainer key={index}>
                            <CheckboxImage
                                src={choice.value ? checkedImg : uncheckedImg}
                            />

                            {choice.title.toLowerCase() === "others" ? (
                                <OrdinaryText>
                                    <OrdinaryText>{choice.title}:</OrdinaryText>{" "}
                                    <UnderlinedText>
                                        {choice.value}
                                    </UnderlinedText>
                                </OrdinaryText>
                            ) : (
                                <OrdinaryText>{choice.title}</OrdinaryText>
                            )}
                        </FlexGapContainer>
                    ))}
                </FlexGapContainer>
            </FlexColContainer>

            <Paragraph style={{ marginBottom: 0, marginTop: 10 }}>
                Purpose of information disclosure
            </Paragraph>

            <Paragraph>
                I understand that treatment, payment, enrollment in a health
                plan, or eligibility for benefits is not dependent on my signing
                this authorization. By signing below, I acknowledge that I have
                read and understand this document and that I have voluntarily
                given my provider authorization to disclose my records. I
                understand that I may revoke this authorization at any time by
                providing a written notice to my provider, however the
                revocation will not have an effect on any actions taken prior to
                the date my revocation is received. I understand that my
                information may be redisclosed by the authorized
                person/organization receiving the information, and at that
                point, the information may no longer be protected under the
                terms of this agreement. This authorization will expire one year
                following the date signed unless revoked in writing.
            </Paragraph>

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Client/Guardian Signature:</BoldText>
                    <SignatureImage src={signature} />
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Date:</BoldText>
                    <UnderlinedText>{date}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>
        </View>
    );
};

export default ReleaseReceive;
