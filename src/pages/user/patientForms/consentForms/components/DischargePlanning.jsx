import { View } from "@react-pdf/renderer";
import { Paragraph, Title, NumberedList, Subtitle } from "./pdfFormComponents";
import {
    dischargePlanningList1,
    dischargePlanningList2,
    dischargePlanningList3,
    dischargePlanningList4,
} from "./data";

const DischargePlanning = () => {
    return (
        <View>
            <Title>DISCHARGE PLANNING & EXIT CONDITIONS</Title>

            <NumberedList
                title="I understand that I may be discharged for any of the following:"
                items={dischargePlanningList1}
                isBullet={true}
            />

            <NumberedList
                title="Upon discharge:"
                items={dischargePlanningList2}
                isBullet={true}
            />

            <Subtitle>CONFIDENTIALITY AND COMMUNICATION POLICY</Subtitle>

            <NumberedList
                title="I acknowledge that:"
                items={dischargePlanningList3}
                isBullet={true}
            />

            <Paragraph>
                I understand that staff must report suspected abuse, suicidal
                behavior, or threats to safety to appropriate authorities.
            </Paragraph>

            <Subtitle>GRIEVANCE PROCEDURE</Subtitle>

            <NumberedList
                title="I understand that:"
                items={dischargePlanningList4}
                isBullet={true}
            />
        </View>
    );
};

export default DischargePlanning;
