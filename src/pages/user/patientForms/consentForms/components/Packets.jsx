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
} from "./pdfFormComponents";

const Packets = ({ list, title }) => {
    return (
        <View>
            <Title>{title}</Title>

            {list.map((item, index) => (
                <Paragraph key={index}>{item}</Paragraph>
            ))}
        </View>
    );
};

export default Packets;
