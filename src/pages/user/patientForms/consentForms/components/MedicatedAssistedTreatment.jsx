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
    matList1,
    matList2,
    matList3,
    matList4,
    matList5,
    matList6,
    matList7,
    matList8,
    matList9,
    matList10,
    matList11,
    matList12,
} from "./data";

const MedicatedAssistedTreatment = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View>
            <Title>MEDICATION-ASSISTED TREATMENT (MAT) CONSENT</Title>

            <NumberedList
                title="I understand that MAT may be offered as part of an integrated treatment plan for alcohol or opioid use disorder. I understand the following options may be available depending on clinical assessment:"
                items={matList1}
                isListHeader={true}
                isSingleLine={true}
                isBullet={true}
            />

            <NumberedList
                title="I understand:"
                items={matList2}
                isBullet={true}
            />

            <Paragraph>
                My provider has reviewed the risks, benefits, and alternatives
                with me.
            </Paragraph>

            <Subtitle>DRUG AND ALCOHOL TESTING CONSENT</Subtitle>
            <NumberedList
                title="I consent to random or scheduled testing for drug and alcohol use as a part of my treatment monitoring. This may include:"
                items={matList3}
                isBullet={true}
            />

            <NumberedList
                title="I understand:"
                items={matList4}
                isBullet={true}
            />

            <Subtitle break>GROUP THERAPY PARTICIPATION AGREEMENT</Subtitle>
            <NumberedList
                title="I agree to actively and respectfully participate in group therapy sessions. I understand that group participation is a cornerstone of substance use treatment at BrightLife. I agree to:"
                items={matList5}
                isBullet={true}
            />
            <Paragraph>
                Violation of these conditions may result in a clinical
                intervention, removal from the group, or program discharge.
            </Paragraph>

            <Subtitle>URINALYSIS AND BREATHALYZER TESTING CONSENT</Subtitle>
            <NumberedList
                title="I understand and consent to urinalysis and/or breathalyzer testing as a tool to:"
                items={matList6}
                isBullet={true}
            />
            <Paragraph>
                All results will be part of my confidential treatment record. If
                I dispute a result, I may request confirmatory testing at my own
                expense.
            </Paragraph>

            <Subtitle>
                COURT-ORDERED TREATMENT & PROBATION REPORTING
            </Subtitle>
            <NumberedList
                title="If I am receiving services through court mandate or supervision by a probation or parole officer, I authorize BrightLife to:"
                items={matList7}
                isBullet={true}
            />
            <Paragraph>
                This authorization will remain in place until my legal
                obligation is complete unless I revoke it in writing.
            </Paragraph>

            <Subtitle>WITHDRAWAL MANAGEMENT PLAN DISCLOSURE</Subtitle>
            <NumberedList
                title="BrightLife Enhancement Services does not provide inpatient detoxification. If I am actively withdrawing:"
                items={matList8}
                isBullet={true}
            />

            <Subtitle break>RISK OF RELAPSE AND OVERDOSE ACKNOWLEDGMENT</Subtitle>
            <NumberedList
                title="I understand:"
                items={matList9}
                isBullet={true}
                bulletListStyle={{paddingLeft: 40}}
            />
            <Paragraph>
                I will report any relapse, overdose, or hospitalization to my
                treatment team.
            </Paragraph>

            <Subtitle>TREATMENT PARTICIPATION EXPECTATIONS</Subtitle>
            <NumberedList
                title="As a participant in the program, I agree to the following:"
                items={matList10}
                isBullet={true}
            />
            <Paragraph>
                Failure to comply may result in treatment plan revision or
                discharge.
            </Paragraph>

            <Subtitle>CRISIS SAFETY PLAN AGREEMENT</Subtitle>
            <NumberedList
                title={
                    <Paragraph>
                        I will collaborate with my assigned clinician to develop
                        and maintain a{" "}
                        <BoldText>personalized Crisis Safety Plan</BoldText>{" "}
                        that includes:
                    </Paragraph>
                }
                items={matList11}
                isBullet={true}
                bulletListStyle={{paddingLeft: 50}}
            />
            <Paragraph>
                This plan will be reviewed regularly and updated as needed.
            </Paragraph>

            <Subtitle>FINAL PATIENT CONSENT ACKNOWLEDGMENT</Subtitle>
            <NumberedList
                title="I confirm that:"
                items={matList12}
                isBullet={true}
            />

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Printed Client Name:</BoldText>
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

export default MedicatedAssistedTreatment;
