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
    duiOverviewList1,
    duiOverviewList2,
    duiOverviewList3,
    duiOverviewList4,
    duiOverviewList5,
    duiOverviewList6,
} from "./data";

const DuiOverview = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title>PROGRAM OVERVIEW</Title>

            <NumberedList
                title="The DUI/DWI Education Program at BrightLife Enhancement Services is designed to provide individuals charged with driving under the influence (DUI) or driving while impaired (DWI) with education regarding:"
                items={duiOverviewList1}
                isBullet={true}
            />
            <Paragraph>
                <BoldText>NOTE:</BoldText>{" "}
                This program is educational in nature. It is not a substitute
                for clinical treatment or therapy, and participation does not
                constitute a therapeutic relationship with a licensed mental
                health or substance use clinician unless separately enrolled in
                treatment services.
            </Paragraph>

            <Subtitle>CONSENT TO PARTICIPATE</Subtitle>
            <NumberedList
                title="I, the undersigned, consent to participate in the DUI/DWI Education Program provided by BrightLife Enhancement Services. I understand:"
                items={duiOverviewList2}
                isBullet={true}
            />

            <Subtitle>CONFIDENTIALITY AND LIMITS</Subtitle>
            <NumberedList
                title={
                    <Paragraph>
                        I understand that BrightLife Enhancement Services
                        follows all applicable federal and state laws, including{" "}
                        <BoldText>HIPAA</BoldText> and, where applicable,{" "}
                        <BoldText>42 CFR Part 2</BoldText>. My participation is
                        confidential, with exceptions for:
                    </Paragraph>
                }
                items={duiOverviewList3}
                isBullet={true}
            />
            <Paragraph>
                I will be informed when disclosures are necessary and may revoke
                any signed release of information (ROI) at any time, unless
                prohibited by court mandate.
            </Paragraph>

            <Subtitle break>PARTICIPATION EXPECTATIONS AND RULES</Subtitle>
            <NumberedList
                title="I understand that as a participant in the DUI/DWI Education Program, I am expected to:"
                items={duiOverviewList4}
                isBullet={true}
            />
            <Paragraph>
                Failure to comply with these rules may result in dismissal from
                the program without credit.
            </Paragraph>

            <Subtitle>FEES AND PAYMENT POLICY</Subtitle>
            <NumberedList
                title="I understand:"
                items={duiOverviewList5}
                isBullet={true}
            />

            <Subtitle>CERTIFICATE OF COMPLETION</Subtitle>
            <NumberedList
                title="A Certificate of Completion will be provided once the following are fulfilled:"
                items={duiOverviewList6}
                isBullet={true}
            />

            <Subtitle>ACKNOWLEDGMENT AND CONSENT</Subtitle>
            <Paragraph>
                I have read and understand the contents of this DUI/DWI
                Education Program Consent Packet. I agree to follow all rules,
                participate fully, and authorize BrightLife to communicate with
                authorized entities as applicable to my case. I understand that
                this program is educational in nature and does not substitute
                for treatment unless otherwise enrolled in a separate clinical
                service.
            </Paragraph>

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

export default DuiOverview;
