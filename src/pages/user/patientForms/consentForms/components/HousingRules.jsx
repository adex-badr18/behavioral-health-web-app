import { View } from "@react-pdf/renderer";
import { Paragraph, Title, NumberedList, Subtitle } from "./pdfFormComponents";
import {
    housingRulesList1,
    housingRulesList2,
    housingRulesList3,
} from "./data";

const HousingRules = () => {
    return (
        <View>
            <Title>HOUSING RULES & STRUCTURE</Title>

            <NumberedList
                title="I agree to the following conditions of residency:"
                items={housingRulesList1}
                isBullet={true}
            />

            <Paragraph>
                Failure to adhere to house rules may result in behavior
                contracts, temporary suspension, or discharge depending on
                severity.
            </Paragraph>

            <Subtitle>MEDICATION MANAGEMENT</Subtitle>

            <NumberedList
                title="If I am prescribed medications (including psychiatric medications or MAT):"
                items={housingRulesList2}
                isBullet={true}
            />

            <Paragraph>
                Diversion or misuse of medication is grounds for discharge.
            </Paragraph>

            <Subtitle>FINANCIAL RESPONSIBILITY & PROPERTY POLICY</Subtitle>

            <NumberedList
                title="I understand:"
                items={housingRulesList3}
                isBullet={true}
            />
        </View>
    );
};

export default HousingRules;
