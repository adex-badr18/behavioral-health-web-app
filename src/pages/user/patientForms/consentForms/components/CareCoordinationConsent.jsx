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
import {
    careCoordinationList1,
    careCoordinationList2,
    careCoordinationList3,
    careCoordinationList4,
} from "./data";

const CareCoordinationConsent = ({ data }) => {
    const { fullName, signature, date } = data;

    return (
        <View style={{fontSize: 11}}>
            <Title style={{ marginBottom: 10 }}>
                Consent for Coordination of Care
            </Title>

            <FlexGapContainer>
                <BoldText>Full Name:</BoldText>
                <UnderlinedText>{fullName}</UnderlinedText>
            </FlexGapContainer>

            <Paragraph>
                Brightlife Enhancement Services is dedicated to providing
                comprehensive and integrated care for all the individuals we
                serve. To ensure high-quality services and optimal outcomes, it
                may be necessary to coordinate your care with other healthcare
                providers, community organizations, and service agencies
                involved in your treatment or support.
            </Paragraph>

            <FlexColContainer>
                <BoldText>Purpose of Coordination</BoldText>

                <NumberedList
                    title="By signing this consent form, you authorize Brightlife Enhancement Services to:"
                    items={careCoordinationList1}
                    isBullet={true}
                />
            </FlexColContainer>

            <NumberedList
                title="Information That May Be Shared"
                items={careCoordinationList2}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <FlexColContainer>
                <BoldText>Confidentiality</BoldText>
                <Paragraph>
                    All information shared will comply with the Health Insurance
                    Portability and Accountability Act (HIPAA) and other
                    applicable state and federal confidentiality laws. Only the
                    minimum necessary information will be shared to fulfill the
                    coordination purpose.
                </Paragraph>
            </FlexColContainer>

            <NumberedList
                title="Authorization Details"
                items={careCoordinationList3}
                isBullet={true}
                titleStyle={{ fontWeight: "bold" }}
            />

            <FlexColContainer>
                <BoldText>Authorization</BoldText>

                <NumberedList
                    title="By signing below, I acknowledge that:"
                    items={careCoordinationList4}
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
        </View>
    );
};

export default CareCoordinationConsent;
