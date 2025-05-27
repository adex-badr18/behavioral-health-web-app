import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    NumberedList,
    FlexBetweenContainer,
    FlexGapContainer,
    FlexColContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
    Subtitle,
} from "./pdfFormComponents";
import { itfList1, itfList2, itfList3 } from "./data";

const ItpConsent = ({ data }) => {
    const { fullName, dob, signature, date } = data;

    return (
        <View>
            <Title style={{ marginBottom: 10 }}>
                Consent for Individualized Treatment Plan (ITP)
            </Title>

            <FlexBetweenContainer style={{ marginVertical: 3 }}>
                <FlexGapContainer>
                    <BoldText>Participant Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Date of Birth:</BoldText>
                    <UnderlinedText>{dob}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <Paragraph>
                BrightLife Enhancement Services is committed to providing
                personalized care through the development and implementation of
                an Individualized Treatment Plan (ITP). The ITP is a critical
                tool that outlines your treatment goals, the services you will
                receive, and the strategies that will be used to help you
                achieve optimal outcomes.
            </Paragraph>

            <NumberedList
                title="Purpose of the Individualized Treatment Plan"
                items={itfList1}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <NumberedList
                title="My Rights and Responsibilities Regarding the ITP"
                items={itfList2}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <FlexColContainer>
                <BoldText>Confidentiality</BoldText>
                <Paragraph>
                    Information contained in the treatment plan is protected
                    under HIPAA and other relevant privacy laws. It will only be
                    shared with other providers or agencies with my written
                    consent, except where disclosure is permitted or required by
                    law.
                </Paragraph>
            </FlexColContainer>

            <FlexColContainer>
                <BoldText>Authorization</BoldText>

                <NumberedList
                    title="By signing below, I acknowledge that:"
                    items={itfList3}
                    isBullet={true}
                />
            </FlexColContainer>

            <FlexBetweenContainer style={{ marginVertical: 3 }}>
                <FlexGapContainer>
                    <BoldText>Signature of Participant/Guardian:</BoldText>
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

export default ItpConsent;
