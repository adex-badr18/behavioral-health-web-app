import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
} from "./pdfFormComponents";

const BillInsurance = ({
    fullName,
    clientAddress,
    insuranceCompany,
    signature,
    date,
}) => {
    return (
        <View>
            <Title>Authorization To Bill Insurance</Title>

            <FlexGapContainer>
                <BoldText>Full Name:</BoldText>
                <UnderlinedText>{fullName}</UnderlinedText>
            </FlexGapContainer>

            <FlexGapContainer>
                <BoldText>Client Address:</BoldText>
                <UnderlinedText>{clientAddress}</UnderlinedText>
            </FlexGapContainer>

            <FlexGapContainer>
                <BoldText>Date:</BoldText>
                <UnderlinedText>{date}</UnderlinedText>
            </FlexGapContainer>

            <FlexGapContainer>
                <BoldText>Insurance Company:</BoldText>
                <UnderlinedText>{insuranceCompany}</UnderlinedText>
            </FlexGapContainer>

            <Paragraph>
                I, the undersigned, hereby certify and attest that I have sought
                evaluation, treatment, or medical advice from the staff at the
                clinic named above. I therefore authorize the medical staff and
                personnel to release me or my minor child’s medical information
                to the insurance company listed above for the purpose of
                determining and receiving benefits for medical bills.
            </Paragraph>

            <Paragraph>
                I understand and acknowledge that the medical staff will submit
                my claim to the insurance company on my behalf. I further
                understand that I will be held responsible for any amount of
                medical bills not covered by my insurance policy or claims, and
                that I will be responsible for paying all deductibles, fees,
                co-payments, and co-insurance payments required.
            </Paragraph>

            <Paragraph>
                I understand that any portion of my medical bills not covered by
                insurance will be billed to me at the address I have provided
                above. Non-compliance or defaulting on payments may result in
                denial of service and/or legal claims against me for
                non-payment.
            </Paragraph>

            <FlexBetweenContainer>
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

export default BillInsurance;
