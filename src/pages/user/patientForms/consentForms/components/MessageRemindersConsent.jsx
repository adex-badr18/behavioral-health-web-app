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
import { messageRemindersList } from "./data";

const MessageRemindersConsent = ({ data }) => {
    const { fullName, phone, signature, date } = data;

    return (
        <View>
            <Title style={{marginBottom: 10}}>
                Consent for Text Message Reminders and SMS Communication
            </Title>

            <FlexBetweenContainer style={{marginVertical: 3}}>
                <FlexGapContainer>
                    <BoldText>Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Phone Number:</BoldText>
                    <UnderlinedText>{phone}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <Paragraph>
                This consent form authorizes BrightLife Enhancement Services,
                LLC (BLES) to communicate with you via text messages (SMS) to
                provide appointment reminders, important updates, and other
                related information. The goal is to ensure timely and efficient
                communication regarding your care and services.
            </Paragraph>

            <NumberedList
                title="Terms of Consent"
                items={messageRemindersList}
                isListHeader={true}
                titleStyle={{fontWeight: "bold"}}
            />

            <Subtitle style={{marginVertical: 3}}>Consent Agreement</Subtitle>

            <Paragraph>
                By signing below, I acknowledge and agree to the terms outlined
                in this consent form. I authorize to communicate with me via
                text messages (SMS) for the purposes listed above. I understand
                that I can opt- out of this communication at any time.
            </Paragraph>

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

export default MessageRemindersConsent;
