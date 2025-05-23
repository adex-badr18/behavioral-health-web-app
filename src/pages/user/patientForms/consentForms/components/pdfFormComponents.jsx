import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import oxygenBold from "../../../../../assets/fonts/Oxygen-Bold.ttf";
import oxygenRegular from "../../../../../assets/fonts/Oxygen-Regular.ttf";
import oxygenLight from "../../../../../assets/fonts/Oxygen-Light.ttf";

// Register Oxygen font
Font.register({
    family: "Oxygen",
    fonts: [{ src: oxygenRegular }, { src: oxygenBold, fontWeight: 700 }],
});

// Styles
const styles = StyleSheet.create({
    paragraph: {
        fontFamily: "Oxygen",
        fontSize: 12,
        textAlign: "justify",
        marginBottom: 8,
    },
    title: {
        fontFamily: "Oxygen",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 12,
        textTransform: "uppercase",
    },
    subtitle: {
        fontFamily: "Oxygen",
        fontSize: 14,
        fontWeight: "600",
        marginVertical: 6,
    },
    listContainer: {
        marginLeft: 20,
        marginBottom: 10,
    },
    // listItem: {
    //     fontFamily: "Oxygen",
    //     fontSize: 12,
    //     marginBottom: 4,
    //     textAlign: "justify",
    // },
    // bulletItem: {
    //     marginLeft: 12,
    //     fontSize: 12,
    //     fontFamily: "Oxygen",
    // },

    listItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 6,
    },
    listIndex: {
        width: 20,
        fontFamily: "Oxygen",
        fontSize: 12,
        lineHeight: 1.4,
    },
    listText: {
        flex: 1,
        fontFamily: "Oxygen",
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 1.4,
    },
    bulletList: {
        paddingLeft: 20,
        marginTop: 4,
    },
    bulletItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 4,
    },
    bulletSymbol: {
        width: 12,
        fontFamily: "Oxygen",
        fontSize: 10,
        marginRight: 5,
    },
    bulletText: {
        flex: 1,
        fontFamily: "Oxygen",
        fontSize: 11,
        textAlign: "justify",
    },
    flexBetweenContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
});

export const Paragraph = ({ children }) => (
    <Text style={styles.paragraph}>{children}</Text>
);

export const Title = ({ children }) => (
    <Text style={styles.title}>{children}</Text>
);

export const Subtitle = ({ children, alignCenter = false }) => (
    <Text
        style={[
            styles.subtitle,
            { textAlign: alignCenter ? "center" : "left" },
        ]}
    >
        {children}
    </Text>
);

// export const NumberedList = ({ title, items }) => (
//     <View>
//         {title && <Paragraph>{title}</Paragraph>}
//         <View style={styles.listContainer}>
//             {items.map((item, index) => (
//                 <View key={index}>
//                     <Text style={styles.listItem}>{`${index + 1}. ${
//                         item.text
//                     }`}</Text>
//                     {item.subItems && (
//                         <View style={styles.bulletItem}>
//                             {item.subItems.map((subItem, subIndex) => (
//                                 <Text key={subIndex}>{`• ${subItem}`}</Text>
//                             ))}
//                         </View>
//                     )}
//                 </View>
//             ))}
//         </View>
//     </View>
// );

export const NumberedList = ({ title, items = [] }) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.paragraph}>{title}</Text>

            {items.map((item, index) => (
                <View key={index}>
                    <View style={styles.listItem}>
                        <Text style={styles.listIndex}>{`${index + 1}.`}</Text>
                        <Text style={styles.listText}>{item.text}</Text>
                    </View>

                    {item.subItems && item.subItems.length > 0 && (
                        <View style={styles.bulletList}>
                            {item.subItems.map((subItem, i) => (
                                <View key={i} style={styles.bulletItem}>
                                    <Text style={styles.bulletSymbol}>
                                        {"\u2022"}
                                    </Text>
                                    <Text style={styles.bulletText}>
                                        {subItem}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

export const FlexBetweenContainer = ({ children }) => (
    <View style={styles.flexBetweenContainer}>{children}</View>
);
