import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    NumberedList,
    Subtitle,
} from "./pdfFormComponents";
import { housingList1, housingList2 } from "./data";

const HousingOverview = () => {
    return (
        <View>
            <Title style={{ marginBottom: 10 }}>
                PROGRAM OVERVIEW (ASAM Level 3.1)
            </Title>

            <Paragraph>
                BrightLife Enhancement Services provides ASAM Level 3.1
                Residential Supportive Housing for individuals recovering from
                substance use disorders. This program is designed for clients
                who require a safe, supportive, and structured living
                environment but do not need 24-hour medical or psychiatric care.
                The program focuses on stability, community reintegration,
                relapse prevention, and development of independent living
                skills.
            </Paragraph>

            <NumberedList
                title="Services include:"
                items={housingList1}
                isBullet={true}
            />

            <Subtitle>ADMISSION CRITERIA</Subtitle>

            <NumberedList
                title="To be eligible for BrightLife’s ASAM Level 3.1 Residential Supportive Housing Program, individuals must meet the following criteria:"
                items={housingList2}
                isBullet={true}
            />

            <Paragraph>
                Admission is subject to availability and a full intake
                assessment. BrightLife reserves the right to deny admission
                based on appropriateness for the level of care or safety
                considerations.
            </Paragraph>
        </View>
    );
};

export default HousingOverview;
