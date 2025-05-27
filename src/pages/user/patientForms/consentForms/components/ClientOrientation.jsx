import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
    NumberedList,
} from "./pdfFormComponents";
import { clientOrientationList } from "./data";

const ClientOrientation = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title>Acknowledge of Clients Orientation</Title>

            <Paragraph>
                I, <UnderlinedText>{fullName}</UnderlinedText> have been
                orientated on the following:
            </Paragraph>

            <NumberedList title="" items={clientOrientationList} isBullet={true} />

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

export default ClientOrientation;
