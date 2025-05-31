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
    Subtitle,
} from "./pdfFormComponents";
import { grievancePolicyList } from "./data";

const GrievancePolicy = ({ data }) => {
    const { fullName, signature, date, otherText } = data;

    return (
        <View>
            <Title>Notification of Grievance Policy</Title>

            <NumberedList
                title="BLES may use or disclose PHI without your consent or authorization in the following circumstances:"
                items={grievancePolicyList}
                isListHeader={true}
            />

            <Subtitle>Acknowledgment of Notification</Subtitle>

            <Paragraph>
                By signing below, I acknowledge that I have been informed of
                Bright Life Enhancement Services' Grievance Policy and
                understand my rights and the procedures for filing a complaint.
            </Paragraph>

            <FlexGapContainer>
                <BoldText>Client Name:</BoldText>
                <UnderlinedText>{fullName}</UnderlinedText>
            </FlexGapContainer>

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Client Signature:</BoldText>
                    <SignatureImage src={signature} />
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Date:</BoldText>
                    <UnderlinedText>{date}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            {otherText && <Paragraph>{otherText}</Paragraph>}
        </View>
    );
};

export default GrievancePolicy;
