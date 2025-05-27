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
    OrdinaryText,
    CheckboxImage,
} from "./pdfFormComponents";

const TransportationLiability = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title>Transportation Liability Waiver</Title>

            <Paragraph style={{ lineHeight: 1.3, marginBottom: 12 }}>
                I understand that transportation services provided by BrightLife
                Enhancement Services (BLES) are a courtesy and are offered
                solely at the discretion of the agency. I acknowledge that
                transportation is not a guaranteed service or a client right,
                and availability is subject to scheduling, staff capacity, and
                program guidelines.
            </Paragraph>

            <Paragraph style={{ lineHeight: 1.3, marginBottom: 12 }}>
                By signing below, I agree to use BLES transportation services at
                my own risk. I release and hold harmless BrightLife Enhancement
                Services, its employees, agents, and affiliates from any and all
                liability, claims, demands, or actions, including but not
                limited to accidents, injuries, or damages, that may arise
                during transport provided by or arranged through BLES.
            </Paragraph>

            <Paragraph style={{ lineHeight: 1.3, marginBottom: 12 }}>
                I also agree that I will not pursue legal action or file claims
                against BLES in relation to transportation services.
            </Paragraph>

            <FlexGapContainer containerStyle={{ marginVertical: 5 }}>
                <BoldText>Client Name:</BoldText>
                <UnderlinedText>{fullName}</UnderlinedText>
            </FlexGapContainer>

            <FlexBetweenContainer style={{ marginVertical: 5 }}>
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

export default TransportationLiability;
