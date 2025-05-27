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
    FlexColContainer,
    Subtitle
} from "./pdfFormComponents";
import { telehealthList1, telehealthList2 } from "./data";

const TelehealthConsent = ({ signature, date }) => {
    return (
        <View style={{fontSize: 11}}>
            <Title>Telehealth Services Informed Consent</Title>

            <FlexColContainer>
                <BoldText>Definition of Telehealth</BoldText>
                <Paragraph>
                    Telehealth involves the use of electronic communications to
                    enable professionals to connect with individuals using
                    interactive video and audio communications. Telehealth
                    includes the practice of psychological health care delivery,
                    diagnosis, consultation, treatment, referral to resources,
                    education, and the transfer of medical and clinical data.
                </Paragraph>
            </FlexColContainer>

            <NumberedList
                title="I understand that I have the rights with respect to telehealth:"
                items={telehealthList1}
                titleStyle={{fontWeight: "bold"}}
                containerStyle={{marginBottom: 5}}
                bulletListStyle={{paddingLeft: 50}}
            />

            <Subtitle style={{marginVertical: 3}}>Consent to The Use of Telehealth</Subtitle>

            <NumberedList
                title="By signing this form, I certify:"
                items={telehealthList2}
                isBullet={true}
            />

            <FlexBetweenContainer style={{marginVertical: 3}}>
                <FlexGapContainer>
                    <BoldText>Signature:</BoldText>
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

export default TelehealthConsent;
