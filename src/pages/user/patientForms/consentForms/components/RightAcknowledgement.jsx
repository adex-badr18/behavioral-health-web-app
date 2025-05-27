import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
} from "./pdfFormComponents";

const RightAcknowledgement = ({ fullName, signature, date }) => {
    return (
        <View>
            <Title>Client’s Rights Acknowledgement Form</Title>

            <Paragraph islineHeightWide={true}>
                I, <UnderlinedText>{fullName}</UnderlinedText> have received a
                copy of the BrightLife Enhancement Services, LLC Client’s Right
                Statement. I have read it or had someone read it to me, and I
                understand it. Should I have any questions regarding my client’s
                Rights in the future, I am aware that I may BrightLife
                Enhancement Services, LLC staff for clarification or assistance
                at any time.
            </Paragraph>

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Participant Signature:</BoldText>
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

export default RightAcknowledgement;
