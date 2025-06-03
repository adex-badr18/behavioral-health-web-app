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
} from "./pdfFormComponents";
import { consentForServicesList } from "./data";

const ConsentForServices = ({ data }) => {
    const { signature, date } = data;

    return (
        <View style={{ fontSize: 11 }}>
            <Title style={{marginVertical: 10}}>Consent For Services</Title>

            <Paragraph>Dear</Paragraph>
            <NumberedList
                title="This is to notify you/ your child/ ward has been found eligible and accepted to receive mental health services from BrightLife Enhancement Services, LLC, (BLES). The acceptance is based on the following:"
                items={consentForServicesList}
                bulletListStyle={{ paddingLeft: 50 }}
            />

            <FlexBetweenContainer style={{ marginVertical: 0 }}>
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

export default ConsentForServices;
