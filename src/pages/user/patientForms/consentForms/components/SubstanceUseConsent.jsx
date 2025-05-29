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
    FlexColContainer,
} from "./pdfFormComponents";
import { substanceUseList1, substanceUseList2 } from "./data";

const SubstanceUseConsent = () => {
    return (
        <View>
            <FlexColContainer containerStyle={{ marginBottom: 12 }}>
                <Subtitle style={{ marginVertical: 0, fontSize: 13 }}>
                    Effective Date: 2025
                </Subtitle>
                <BoldText>
                    For ASAM Levels 1.0 (Outpatient), 2.1 (Intensive
                    Outpatient), and 2.5 (Partial Hospitalization)
                </BoldText>
            </FlexColContainer>

            <Title>INFORMED CONSENT FOR SUBSTANCE USE TREATMENT</Title>

            <NumberedList
                title="I, the undersigned, hereby voluntarily consent to receive substance use disorder treatment at BrightLife Enhancement Services. I understand that the program may include a combination of the following services:"
                items={substanceUseList1}
                isBullet={true}
            />

            <Paragraph>
                I understand that treatment will be tailored based on ASAM level
                of care and adjusted as clinically appropriate. I acknowledge
                that participation in treatment is voluntary and I may withdraw
                consent at any time, understanding the potential consequences to
                my treatment plan.
            </Paragraph>

            <Subtitle>NOTICE OF PRIVACY UNDER 42 CFR PART 2</Subtitle>
            <NumberedList
                title={
                    <Paragraph>
                        I acknowledge and understand that BrightLife Enhancement
                        Services is governed by{" "}
                        <BoldText>42 CFR Part 2</BoldText>, which provides
                        strict federal protection for the confidentiality of
                        individuals receiving substance use treatment. This
                        means:
                    </Paragraph>
                }
                items={substanceUseList2}
                isBullet={true}
            />
        </View>
    );
};

export default SubstanceUseConsent;
