import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
    NumberedList,
    Subtitle,
    FlexColContainer,
} from "./pdfFormComponents";

const Packets = ({ list, title, subtitle, otherText }) => {
    return (
        <View>
            <Title>{title}</Title>

            <FlexColContainer containerStyle={{ marginBottom: 12 }}>
                {subtitle && (
                    <Subtitle style={{ marginVertical: 0, fontSize: 13 }}>
                        {subtitle}
                    </Subtitle>
                )}
                {otherText && <BoldText>{otherText}</BoldText>}
            </FlexColContainer>

            {list.map((item, index) => (
                <Paragraph key={index}>{item}</Paragraph>
            ))}
        </View>
    );
};

export default Packets;
