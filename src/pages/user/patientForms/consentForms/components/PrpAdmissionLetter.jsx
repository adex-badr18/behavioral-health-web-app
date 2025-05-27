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
} from "./pdfFormComponents";
import signature from "../../../../../assets/prp-signature.png"

const PrpAdmissionLetter = ({ data }) => {
    const { fullName, dob } = data;

    return (
        <View>
            <Title>PRP Admission Letter</Title>

            <Paragraph>Dear Esteemed Client,</Paragraph>

            <FlexBetweenContainer style={{ marginTop: 5, marginBottom: 10 }}>
                <FlexGapContainer>
                    <BoldText>Full Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>DOB:</BoldText>
                    <UnderlinedText>{dob}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <Paragraph style={{lineHeight: "1.3", marginBottom: 12}}>
                We are pleased to welcome you to the Psychiatric Rehabilitation
                Program (PRP) at BrightLife Enhancement Services. After a
                careful review of the referral from your mental health provider,
                your psychiatric rehabilitation assessment, background history,
                and feedback from Carelon (Maryland Medicaid), we are happy to
                inform you that you have been formally admitted into the PRP
                program.
            </Paragraph>

            <Paragraph style={{lineHeight: "1.3", marginBottom: 12}}>
                This program is designed to support you in building the skills
                and strategies necessary for greater independence, improved
                daily functioning, and overall wellness. Services may include
                skill-building activities, support with appointments, chronic
                health management, and other rehabilitative interventions
                delivered in either an on-site or off-site setting based on your
                needs and preferences.
            </Paragraph>

            <Paragraph style={{lineHeight: "1.3", marginBottom: 12}}>
                PRP services will be provided throughout the course of your
                treatment plan, with regular check-ins to monitor progress and
                adjust supports as needed. Should continued services be
                clinically appropriate, we will work with your insurance
                provider to request any necessary extensions.
            </Paragraph>

            <Paragraph style={{lineHeight: "1.3", marginBottom: 12}}>
                As a valued client of BLES, your active participation is
                essential to your success. We encourage consistent engagement,
                open communication with your rehabilitation coordinator, and
                collaboration in setting and working toward your personal goals.
                We’re truly honored to be part of your wellness journey and look
                forward to working with you.
            </Paragraph>

            <Paragraph>Warm regards,</Paragraph>

            

            <FlexColContainer containerStyle={{gap: 0}}>
                <SignatureImage src={signature} />
                <OrdinaryText>Oriyomi Afolayan CPRP</OrdinaryText>               
                <OrdinaryText>Program Director</OrdinaryText>               
                <OrdinaryText>BrightLife Enhancement Services</OrdinaryText>               
            </FlexColContainer>
        </View>
    );
};

export default PrpAdmissionLetter;
