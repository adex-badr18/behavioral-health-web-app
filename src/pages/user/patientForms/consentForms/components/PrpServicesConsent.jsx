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

import { prpServicesList } from "./data"
import checkedImg from "../../../../../assets/checked.png";
import uncheckedImg from "../../../../../assets/unchecked.png";

const PrpServicesConsent = ({ data }) => {
    const { fullName, dob, preferredServices, signature, date } = data;

    return (
        <View>
            <Title style={{ marginBottom: 10 }}>
                CONSENT/AGREEMENT FOR PRP SERVICES
            </Title>

            <FlexBetweenContainer style={{ marginVertical: 3 }}>
                <FlexGapContainer>
                    <BoldText>Client Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Date of Birth:</BoldText>
                    <UnderlinedText>{dob}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <Paragraph>
                As a provider of Psychiatric Rehabilitation Program (PRP)
                services, BrightLife Enhancement Services offers structured
                support to assist individuals in achieving greater independence,
                improved daily functioning, and overall mental wellness.
            </Paragraph>

            <NumberedList
                title="Our PRP services are delivered in the following settings:"
                items={prpServicesList}
                isListHeader={true}
                isSingleLine={true}
                isBullet={true}
            />

            <FlexColContainer containerStyle={{ gap: 0 }}>
                <Paragraph>
                    Please indicate your preferred service setting:
                </Paragraph>
                {preferredServices.map((choice, index) => (
                    <FlexGapContainer containerStyle={{alignItems: "flex-start"}} key={index}>
                        <CheckboxImage
                            src={choice.value ? checkedImg : uncheckedImg}
                        />
                        <OrdinaryText>{choice.title}</OrdinaryText>
                    </FlexGapContainer>
                ))}
            </FlexColContainer>

            <FlexColContainer>
                <BoldText>Consent to Treatment</BoldText>

                <Paragraph>
                    I, the undersigned, do hereby consent to receive PRP
                    services from BrightLife Enhancement Services. I understand
                    the nature and purpose of these services and have had the
                    opportunity to ask questions regarding my treatment. I
                    acknowledge that services will be provided in accordance
                    with the individualized treatment plan developed with my
                    participation and based on my unique needs.
                </Paragraph>

                <Paragraph>
                    I authorize BrightLife Enhancement Services to file a
                    rehabilitation plan on my behalf in order to facilitate any
                    necessary authorizations or approvals to receive PRP
                    services. I understand that participation is voluntary and
                    that I may withdraw consent at any time in writing.
                </Paragraph>

                <Paragraph>
                    I further acknowledge that I have received and reviewed
                    information regarding my rights and responsibilities as a
                    participant in the PRP program, and I agree to comply with
                    the rules and regulations of BrightLife Enhancement
                    Services.
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

export default PrpServicesConsent;
