import { View } from "@react-pdf/renderer";
import { Paragraph, Title, NumberedList, Subtitle } from "./pdfFormComponents";
import {
    residentialCareList1,
    residentialCareList2,
    residentialCareList3,
} from "./data";

const ResidentialCare = () => {
    return (
        <View>
            <Title>
                CONSENT TO RESIDENTIAL CARE PARTICIPATION
            </Title>

            <NumberedList
                title="I voluntarily consent to participate in BrightLife Enhancement Services’ Residential Supportive Housing Program (ASAM Level 3.1). I acknowledge:"
                items={residentialCareList1}
                isBullet={true}
            />

            <Paragraph>
                I understand that violation of housing expectations, including
                relapse, threats to safety, or consistent noncompliance, may
                lead to immediate discharge.
            </Paragraph>

            <Subtitle>RESIDENT RIGHTS & RESPONSIBILITIES</Subtitle>

            <NumberedList
                title="As a resident, I have the right to:"
                items={residentialCareList2}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <NumberedList
                title="As a resident, I am responsible for:"
                items={residentialCareList3}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />
        </View>
    );
};

export default ResidentialCare;
