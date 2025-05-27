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
    CheckboxImage,
    OrdinaryText
} from "./pdfFormComponents";
import { professionalConductList } from "./data";

import checkedImg from "../../../../../assets/checked.png";
import uncheckedImg from "../../../../../assets/unchecked.png";

const ProfessionalConduct = ({ data }) => {
    const { fullName, dob, initial, acceptanceChoices, signature, date } = data;

    return (
        <View>
            <Title style={{ marginBottom: 10 }}>
                Standards of Professional Conduct & Program Overview
            </Title>

            <Paragraph>
                Please initial each section to confirm your understanding:
            </Paragraph>

            <FlexBetweenContainer style={{ marginVertical: 3 }}>
                <FlexGapContainer>
                    <BoldText>Client Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>DOB:</BoldText>
                    <UnderlinedText>{dob}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <NumberedList
                title="As a client referred to the PRP program, I acknowledge that I have received and understand the following information regarding
                participation, policies, and standards of professional conduct:"
                items={professionalConductList}
                isListHeader={true}
                initial={initial}
            />

            <Paragraph>Please select one:</Paragraph>

            <FlexColContainer containerStyle={{ gap: 0 }}>
                {acceptanceChoices.map((choice, index) => (
                    <FlexGapContainer key={index}>
                        <CheckboxImage
                            src={choice.value ? checkedImg : uncheckedImg}
                        />
                        <OrdinaryText>{choice.title}</OrdinaryText>
                    </FlexGapContainer>
                ))}
            </FlexColContainer>

            <FlexColContainer>
                <BoldText>Client Consent & Signature</BoldText>
                <Paragraph>
                    I confirm that I have reviewed and understand all items
                    above. I have had the opportunity to ask questions, and I
                    consent to participate in PRP services as outlined.
                </Paragraph>
            </FlexColContainer>

            <FlexBetweenContainer style={{ marginVertical: 3 }}>
                <FlexGapContainer>
                    <BoldText>Client Signature:</BoldText>
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

export default ProfessionalConduct;
