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
    SectionDivider,
} from "./pdfFormComponents";
import {
    weightLossList1,
    weightLossList2,
    weightLossList3,
    weightLossList4,
    weightLossList5,
    weightLossList6,
    weightLossList7,
    weightLossList8,
    weightLossList9,
    weightLossList10,
    weightLossList11,
    weightLossList12,
    weightLossList13,
    weightLossList14,
    weightLossList15,
} from "./data";

const WeightLossConsent = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title style={{ textAlign: "left" }}>
                BrightLife Enhancement Services
            </Title>

            <Subtitle style={{ marginVertical: 0 }}>
                Weight Loss Consent for Appetite Suppressants, B12 Injections &
                GLP-1 Medications
            </Subtitle>
            <Subtitle>Effective Date: 2025</Subtitle>

            <Subtitle style={{ textTransform: "uppercase" }}>
                REQUIRED LABS
            </Subtitle>
            <NumberedList
                title="I understand that prior to initiating or continuing weight loss treatment through BrightLife Enhancement Services, I must provide current lab results, either completed on-site or through an external lab. Required tests include:"
                items={weightLossList1}
                isBullet={true}
            />
            <Paragraph>
                Labs must be completed within the last 12 months and submitted
                prior to medication refills. Lab results must show no
                contraindications to therapy. Failure to provide lab results may
                result in treatment delay or discontinuation.
            </Paragraph>

            <SectionDivider />

            <Subtitle>HIPAA POLICY</Subtitle>
            <Paragraph>
                I acknowledge receipt and review of the HIPAA Privacy Practices
                of BrightLife Enhancement Services. I understand that my health
                information is protected under HIPAA and will only be used and
                disclosed in accordance with these standards.
            </Paragraph>

            <SectionDivider />

            <Subtitle>FINANCIAL POLICY</Subtitle>
            <NumberedList
                title="BrightLife Enhancement Services operates on a fee-for-service basis. I understand:"
                items={weightLossList2}
                isBullet={true}
            />

            <Subtitle break>
                INFORMED CONSENT FOR APPETITE SUPPRESSANTS
            </Subtitle>
            <NumberedList
                title="I understand and acknowledge the following:"
                items={weightLossList3}
                isBullet={true}
            />

            <Paragraph>
                I have reviewed the following statements from my provider:
            </Paragraph>

            <Paragraph>
                "Appetite suppressants have labeling developed by the
                manufacturer and approved by the FDA. However, clinical
                experience and evolving evidence support longer and/or
                higher-dose use in select patients. Risks and benefits are
                discussed, and therapy is tailored accordingly."
            </Paragraph>

            <NumberedList
                title="I understand:"
                items={weightLossList4}
                isBullet={true}
            />
            <Paragraph>
                I agree to immediately report adverse effects or medical changes
                to BrightLife staff and will not adjust or stop medications
                without consulting my provider.
            </Paragraph>

            <SectionDivider />

            <Subtitle>PATIENT RESPONSIBILITIES</Subtitle>
            <NumberedList
                title="I agree to:"
                items={weightLossList5}
                isBullet={true}
            />

            <Subtitle break>RISKS OF PROPOSED TREATMENT</Subtitle>
            <NumberedList
                title="Potential side effects include:"
                items={weightLossList6}
                isBullet={true}
            />
            <Paragraph>
                I understand the risks and have had the opportunity to discuss
                them with Islammiyyah Al- Ameen, CRNP and all prescribing
                Physician, Psychiatrist or Nurse Practitioners associated with
                BrightLife Enhancement services, llc
            </Paragraph>

            <SectionDivider />

            <Subtitle>NO GUARANTEE OF RESULTS</Subtitle>
            <NumberedList
                title="I acknowledge that:"
                items={weightLossList7}
                isBullet={true}
            />

            <SectionDivider />

            <Subtitle>
                INFORMED CONSENT FOR GLP-1 RECEPTOR AGONISTS (e.g.,
                SEMAGLUTIDE/TIRZEPATIDE)
            </Subtitle>
            <Paragraph>
                These medications include Wegovy, Ozempic, Mounjaro, Trulicity,
                Saxenda, Rybelsus, and compounded variations.
            </Paragraph>
            <NumberedList
                title="Qualifications for Use:"
                items={weightLossList8}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
            <NumberedList
                title="Laboratory Requirements:"
                items={weightLossList9}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
            <NumberedList
                title="Common Side Effects:"
                items={weightLossList10}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
            <NumberedList
                title="Serious Side Effects:"
                items={weightLossList11}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <Paragraph>
                I understand compounded GLP-1 formulations are not FDA-approved
                for weight loss and are used off-label.
            </Paragraph>

            <SectionDivider />

            <NumberedList
                title="SUBLINGUAL SEMAGLUTIDE CONSENT (IF APPLICABLE)"
                items={weightLossList12}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
            <SectionDivider />

            <NumberedList
                title="INFORMED CONSENT FOR VITAMIN B12 LIPOTROPIC INJECTIONS"
                items={weightLossList13}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
            <SectionDivider />

            <NumberedList
                title="INFORMED CONSENT FOR VITAMIN B12 LIPOTROPIC INJECTIONS"
                items={weightLossList14}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
            <Paragraph>
                I understand I should notify my provider if pregnant, lactating,
                or if I have chronic liver/kidney disease, anemia, or allergies
                to components in the injection.
            </Paragraph>
            <SectionDivider />

            <Subtitle>PREGNANCY AND MEDICATION USE</Subtitle>
            <NumberedList
                title="I affirm:"
                items={weightLossList15}
                isBullet={true}
            />
            <SectionDivider />

            <Subtitle>DISCLOSURE & INTEGRATIVE CARE CONSENT</Subtitle>
            <Paragraph>
                I understand that some treatments may be integrative or
                off-label. I have been informed of risks, alternatives, and have
                the opportunity to ask questions. I agree to pursue treatment
                voluntarily.
            </Paragraph>
            <SectionDivider />

            <Subtitle>PATIENT ACKNOWLEDGMENT</Subtitle>
            <NumberedList
                title="I certify that:"
                items={weightLossList13}
                isBullet={true}
            />

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Full Name:</BoldText>
                    <UnderlinedText>{fullName}</UnderlinedText>
                </FlexGapContainer>

                <FlexGapContainer>
                    <BoldText>Signature:</BoldText>
                    <SignatureImage src={signature} />
                </FlexGapContainer>
            </FlexBetweenContainer>

            <FlexGapContainer>
                <BoldText>Date:</BoldText>
                <UnderlinedText>{date}</UnderlinedText>
            </FlexGapContainer>
        </View>
    );
};

export default WeightLossConsent;
