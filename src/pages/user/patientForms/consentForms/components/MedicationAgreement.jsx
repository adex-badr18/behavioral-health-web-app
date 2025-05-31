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
    GridLayout,
} from "./pdfFormComponents";
import checkedImg from "../../../../../assets/checked.png";
import uncheckedImg from "../../../../../assets/unchecked.png";

const MedicationAgreement = ({ data }) => {
    const {
        fullName,
        dob,
        whoYouAre,
        prescribedMedications,
        pharmacy,
        signature,
        date,
    } = data;

    return (
        <View>
            <Title>Medication Agreement</Title>

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Name of Client:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>DOB:</BoldText>
                    <UnderlinedText>{dob}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <FlexGapContainer containerStyle={{ gap: 30 }}>
                <Paragraph>I am the: </Paragraph>

                {whoYouAre.map((choice, index) => (
                    <FlexGapContainer key={index}>
                        <CheckboxImage
                            src={choice.value ? checkedImg : uncheckedImg}
                        />
                        <OrdinaryText>{choice.title}</OrdinaryText>
                    </FlexGapContainer>
                ))}
            </FlexGapContainer>

            <View>
                <Paragraph>
                    The medication that has been prescribed is/are:
                </Paragraph>
                <GridLayout
                    items={prescribedMedications}
                    descriptiveText="prescribed medications"
                />
            </View>

            <FlexGapContainer containerStyle={{ marginTop: 12 }}>
                <BoldText>My last known pharmacy:</BoldText>
                <UnderlinedText>{pharmacy}</UnderlinedText>
            </FlexGapContainer>

            <Paragraph>
                I verify that I am aware of the effects of the medication
                prescribed by the psychiatrist for my ongoing condition. I have
                been provided with written descriptive information regarding
                these medications, including benefits, risks, and side effects.
                I have been afforded the opportunity to ask questions regarding
                these benefits, risks, and side effects.
            </Paragraph>

            <Paragraph>
                Having been fully informed, I consent to treatment with this
                medication.
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

export default MedicationAgreement;
