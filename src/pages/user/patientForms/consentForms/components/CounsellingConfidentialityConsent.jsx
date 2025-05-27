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
    Subtitle,
} from "./pdfFormComponents";
import { confidentialityList1, confidentialityList2 } from "./data";

const CounsellingConfidentialityConsent = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title style={{ marginBottom: 10 }}>
                Counseling Confidentiality Consent Form
            </Title>

            <FlexGapContainer>
                <BoldText>Full Name:</BoldText>
                <UnderlinedText>{fullName}</UnderlinedText>
            </FlexGapContainer>

            <Paragraph>
                Brightlife Enhancement Services is committed to maintaining the
                confidentiality of information shared during counseling
                sessions. Please carefully review and sign this form to
                acknowledge your understanding of our confidentiality practices.
            </Paragraph>

            <FlexColContainer>
                <BoldText>Confidentiality Policy</BoldText>
                <Paragraph>
                    All information disclosed within counseling sessions is
                    confidential and may not be revealed to anyone outside of
                    Brightlife Enhancement Services without your written
                    permission, except where disclosure is permitted or required
                    by law.
                </Paragraph>
            </FlexColContainer>

            <FlexColContainer>
                <BoldText>Limits to Confidentiality</BoldText>

                <NumberedList
                    title="Confidentiality will be maintained except in the following situations:"
                    items={confidentialityList1}
                    isBullet={true}
                    isListHeader={true}
                    isSingleLine={true}
                />
            </FlexColContainer>

            <Paragraph>
                In any of these situations, Brightlife Enhancement Services will
                limit disclosure to what is necessary and required by law.
            </Paragraph>

            <FlexColContainer>
                <BoldText>Use of Electronic Communication</BoldText>
                <Paragraph>
                    Brightlife Enhancement Services may communicate with you via
                    phone, text, email, or telehealth platforms. While all
                    efforts are made to protect your information, electronic
                    communications may have risks of unauthorized access.
                </Paragraph>
            </FlexColContainer>

            <FlexColContainer>
                <BoldText>Authorization</BoldText>

                <NumberedList
                    title="By signing below, I acknowledge that:"
                    items={confidentialityList2}
                    isBullet={true}
                />
            </FlexColContainer>

            <FlexBetweenContainer style={{ marginVertical: 3 }}>
                <FlexGapContainer>
                    <BoldText>Signature:</BoldText>
                    <SignatureImage src={signature} />
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Date:</BoldText>
                    <UnderlinedText>{date}</UnderlinedText>
                </FlexGapContainer>
            </FlexBetweenContainer>

            <Paragraph isItalic={true}>This consent form will be maintained in your confidential clinical record.</Paragraph>
        </View>
    );
};

export default CounsellingConfidentialityConsent;
