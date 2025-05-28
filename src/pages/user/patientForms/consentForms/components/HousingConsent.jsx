import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    NumberedList,
    Subtitle,
    FlexGapContainer,
    BoldText,
    UnderlinedText,
    FlexBetweenContainer,
    SignatureImage,
} from "./pdfFormComponents";
import { housingConsentList } from "./data";

const HousingConsent = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title>ACKNOWLEDGMENT AND CONSENT</Title>

            <NumberedList
                title="By signing below, I:"
                items={housingConsentList}
                isBullet={true}
            />

            <FlexGapContainer>
                <BoldText>Client Full Name:</BoldText>
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
        </View>
    );
};

export default HousingConsent;
