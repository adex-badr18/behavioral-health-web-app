import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    NumberedList,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
} from "./pdfFormComponents";
import {
    marylandNoticeList1,
    marylandNoticeList2,
    marylandNoticeList3,
    marylandNoticeList4,
    marylandNoticeList5,
} from "./data";

const MarylandNotice = ({ data }) => {
    const { signature, date } = data;

    return (
        <View>
            <Title>Maryland Notice Form</Title>

            <Paragraph style={{ textAlign: "center" }}>
                Notice of Policies and Practices to Protect the Privacy of Your
                Health Information.
            </Paragraph>

            <Paragraph style={{ textTransform: "uppercase" }}>
                THIS NOTICE DESCRIBES HOW PSYCHOLOGICAL, PSYCHIATRIC
                REHABILITATION, AND MEDICAL INFORMATION ABOUT YOU MIGHT BE USED
                AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
                PLEASE REVIEW IT CAREFULLY.
            </Paragraph>

            <Paragraph style={{ fontWeight: "bold" }}>
                I. Uses and disclosures for Treatment, Payment, and Health Care
                Operations
            </Paragraph>

            <Paragraph>
                BLES may use or disclose your protected health information
                (PHI), for treatment, payments, and health care operations
                purposes with your written authorization. To help clarify these
                terms, here are some definitions. o “PHI” refers to information
                in your health record that could identify you. o “Treatment,
                payment, and health care operations” * Treatment is when we
                provide, coordinate, or manage your health care and other
                services related to your health care. An example of treatment
                would be when we consult when consult with another healthcare
                provider, such as your family physician or another mental health
                provider. * Payment is when we obtain reimbursement for your
                healthcare. Examples of payment are when we disclose your PHI to
                your health insurer to obtain reimbursement for your health care
                or to determine eligibility or coverage. * Health Care
                Operations are activities related to the performance and
                operation of the Young Adult Institute. Examples of healthcare
                operations are quality assessment and improvement activities,
                business-related matters such as adult and administrative
                services, and case management and care coordination. o “Use”
                applies only to activities within the clinic such as sharing,
                employing, applying, utilizing, examining, and analyzing
                information that identifies you. o “Disclosure” applies to
                activities outside the clinic such as releasing, transferring,
                or providing access to information about you to other parties. o
                “Authorization” is your written permission to disclose
                confidential mental health information. All authorization to
                disclosure must be in a specific legally acquired form.
            </Paragraph>

            <Paragraph style={{ fontWeight: "bold" }}>
                II. Other Uses and Disclosure Requiring Authorization
            </Paragraph>

            <Paragraph>
                BLES may use or disclose PHI for a purpose outside of treatment,
                payment, or health care operations when your appropriate
                authorization is obtained, in those instances when we are asked
                for information for purposes outside of treatment, payment, or
                health care operations, we will obtain an authorization from you
                before releasing this information. BLES will also need to obtain
                authorization from you before releasing your Psychotherapy
                Notes. “Psychotherapy Notes” are notes that have been made about
                a conversation during a private, group, joint, or family
                counseling session, which have been kept separate from the rest
                of your medical record. These notes give a greater degree of
                protection than PHI.
            </Paragraph>

            <Paragraph>
                You may revoke all such authorizations (of PHI or Psychotherapy
                Notes) at any time, provided each revocation is in writing. You
                may not revoke an authorization to the extent that (1) we have
                relied on that authorization; or (2) If the authorization was
                obtained as a condition of obtaining insurance coverage, the law
                provides the insurer the right to contest the claim under the
                policy.
            </Paragraph>

            <Paragraph style={{ fontWeight: "bold", marginTop: 16 }}>
                III. Uses and Disclosure without Authorization.
            </Paragraph>

            <NumberedList
                title="BLES may use or disclose PHI without your consent or authorization in the following circumstances:"
                items={marylandNoticeList1}
                isBullet={true}
            />

            <NumberedList
                title="IV. Patient’s Rights and Clinical Staffs Duties Patient’s Rights:"
                items={marylandNoticeList2}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <NumberedList
                title="BLES. Staff Duties:"
                items={marylandNoticeList3}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
                break
            />

            <NumberedList
                title="V. Questions and Complaints"
                items={marylandNoticeList4}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <NumberedList
                title="VI. Effective Date, Restrictions, and Changes to Privacy Policy"
                items={marylandNoticeList5}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

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

export default MarylandNotice;
