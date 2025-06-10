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
import {
    earlyInterventionList1,
    earlyInterventionList2,
    earlyInterventionList3,
    earlyInterventionList4,
    earlyInterventionList5,
    earlyInterventionList6,
} from "./data";

const EarlyInterventionConsent = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title>
                Early Intervention Services (ASAM Level 0.5) Consent Form
            </Title>

            <Subtitle>PURPOSE OF EARLY INTERVENTION SERVICES</Subtitle>
            <NumberedList
                title="I understand that BrightLife Enhancement Services is offering Early Intervention services consistent with ASAM Level 0.5. These services are designed for individuals who may be at risk for developing a substance use disorder but do not currently meet the diagnostic criteria for a substance use disorder. The goal is to provide:"
                items={earlyInterventionList1}
                isBullet={true}
            />

            <Subtitle>NATURE OF SERVICES</Subtitle>
            <NumberedList
                title="I understand that:"
                items={earlyInterventionList2}
                isBullet={true}
            />

            <Subtitle>CONFIDENTIALITY & 42 CFR PART 2</Subtitle>
            <NumberedList
                title={
                    <Paragraph>
                        If during screening or services I disclose substance use
                        information that meets the threshold for protection
                        under <BoldText>42 CFR Part 2</BoldText>, I understand:
                    </Paragraph>
                }
                items={earlyInterventionList3}
                isBullet={true}
            />

            <Subtitle>VOLUNTARY PARTICIPATION</Subtitle>
            <NumberedList
                title="I understand that my participation in Early Intervention is voluntary. I may:"
                items={earlyInterventionList4}
                isBullet={true}
            />

            <Subtitle break>REFERRALS</Subtitle>
            <NumberedList
                title="If during this process my provider determines that I may benefit from a higher level of care or if I meet criteria for a substance use disorder, I may be offered a referral for:"
                items={earlyInterventionList5}
                isBullet={true}
            />

            <Subtitle>PATIENT ACKNOWLEDGMENT AND CONSENT</Subtitle>
            <NumberedList
                title="I understand and agree to the following:"
                items={earlyInterventionList6}
                isBullet={true}
            />

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Printed Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Signature:</BoldText>
                    <SignatureImage src={signature} style={{width: 200}} />
                </FlexGapContainer>
            </FlexBetweenContainer>

            <FlexGapContainer>
                <BoldText>Date:</BoldText>
                <UnderlinedText>{date}</UnderlinedText>
            </FlexGapContainer>
        </View>
    );
};

export default EarlyInterventionConsent;
