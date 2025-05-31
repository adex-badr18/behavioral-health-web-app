import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Image,
} from "@react-pdf/renderer";
import oxygenBold from "../../../../../assets/fonts/Oxygen-Bold.ttf";
import oxygenRegular from "../../../../../assets/fonts/Oxygen-Regular.ttf";
import times from "../../../../../assets/fonts/times.ttf";
import timesBold from "../../../../../assets/fonts/times-bold.ttf";
import timesItalic from "../../../../../assets/fonts/times-italic.ttf";
import logo from "../../../../../assets/bles-logo-secondary.png";

// Register Oxygen font
// Font.register({
//     family: "Oxygen",
//     fonts: [{ src: oxygenRegular }, { src: oxygenBold, fontWeight: 700 }],
// });

// Register Times New Roman font
Font.register({
    family: "Times",
    fonts: [
        { src: times, fontWeight: 400, fontStyle: "normal" },
        { src: timesBold, fontWeight: 700, fontStyle: "normal" },
        { src: timesItalic, fontWeight: 400, fontStyle: "italic" },
    ],
});

// Styles
const styles = StyleSheet.create({
    page: {
        fontFamily: "Times",
        fontSize: 12,
        lineHeight: 1.3,
        paddingTop: 80,
        paddingBottom: 60,
        paddingHorizontal: 40,
        position: "relative",
    },
    header: {
        position: "absolute",
        top: 16,
        left: 40,
        right: 40,
        height: 40,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    headerImage: {
        height: "100%",
        objectFit: "contain",
    },
    pageContentWrapper: {
        marginVertical: 10,
    },
    footer: {
        position: "absolute",
        bottom: 20,
        right: 40,
        textAlign: "right",
        display: "flex",
        flexDirection: "column",
    },
    footerText: { fontSize: 12, color: "#10A500" },
    paragraph: {
        textAlign: "justify",
        marginBottom: 8,
    },
    paragraphWide: {
        textAlign: "justify",
        marginBottom: 8,
        lineHeight: 1.8,
    },
    paragraphItalic: { fontStyle: "italic" },
    title: {
        fontSize: 14,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 16,
        textTransform: "uppercase",
    },
    subtitle: {
        fontWeight: 700,
        marginVertical: 6,
    },
    ordinaryText: { fontFamily: "Times", fontSize: 12 },
    boldText: { fontWeight: 700 },
    underlinedText: {
        textDecoration: "underline",
    },
    listContainer: {
        marginBottom: 10,
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 7,
        marginBottom: 3,
        marginLeft: 10,
    },
    listIndex: {
        width: 20,
    },
    listBullet: {
        width: 6,
        height: 6,
        borderRadius: "100%",
        border: "1px solid black",
        backgroundColor: "black",
        marginTop: 3,
        marginRight: 10,
    },
    listText: {
        flex: 1,
        textAlign: "justify",
    },
    bulletList: {
        paddingLeft: 20,
        marginTop: 4,
    },
    bulletItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 7,
        marginBottom: 3,
    },
    bulletSymbol: {
        width: 7,
        height: 7,
        borderRadius: "100%",
        border: "1px solid black",
        backgroundColor: "transparent",
        marginTop: 3,
    },
    bulletText: {
        flex: 1,
        fontFamily: "Times",
        textAlign: "justify",
    },
    flexBetweenContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    flexGap: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
    },
    signatureImage: {
        width: 120,
        height: 50,
        objectFit: "contain",
    },
    checkboxImage: {
        width: 16,
        objectFit: "contain",
    },
    grid: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 10,
    },
    column: {
        width: "47%",
        borderBottom: "1px solid black",
    },
    sectionDivider: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#080808",
        marginVertical: 16,
    },
});

export const Paragraph = ({
    children,
    islineHeightWide = false,
    isItalic = false,
    style = {},
}) => {
    const lineHeightStyles = islineHeightWide
        ? { ...styles.paragraphWide, ...style }
        : { ...styles.paragraph, ...style };

    const italicStyles = isItalic && { fontStyle: "italic" };

    return (
        <Text style={{ ...lineHeightStyles, ...italicStyles }}>{children}</Text>
    );
};

export const Title = ({ children, style = {} }) => (
    <Text style={{ ...styles.title, ...style }}>{children}</Text>
);

export const OrdinaryText = ({ children }) => (
    <Text style={styles.ordinaryText}>{children}</Text>
);

export const BoldText = ({ children, style }) => (
    <Text style={{ ...styles.boldText, ...style }}>{children}</Text>
);

export const UnderlinedText = ({ children }) => (
    <Text style={styles.underlinedText}>{children}</Text>
);

export const SectionDivider = ({ children, style = {}, ...rest }) => (
    <View style={{ ...styles.sectionDivider, ...style }} {...rest}>
        {children}
    </View>
);

export const Subtitle = ({
    children,
    alignCenter = false,
    style = {},
    ...rest
}) => (
    <Text
        style={[
            styles.subtitle,
            style,
            { textAlign: alignCenter ? "center" : "left" },
        ]}
        {...rest}
    >
        {children}
    </Text>
);

export const NumberedList = ({
    title,
    isBullet,
    isListHeader,
    isSingleLine = false,
    titleStyle = {},
    containerStyle = {},
    bulletListStyle = {},
    initial,
    items = [],
    ...rest
}) => {
    return (
        <View style={{ ...styles.listContainer, ...containerStyle }} {...rest}>
            <Text style={{ ...styles.paragraph, ...titleStyle }}>{title}</Text>

            {items.length > 0 ? (
                items.map((item, index) => (
                    <View key={index}>
                        <View style={styles.listItem}>
                            {isBullet ? (
                                <View style={styles.listBullet} />
                            ) : initial ? (
                                <UnderlinedText>{initial}</UnderlinedText>
                            ) : (
                                <Text style={styles.listIndex}>{`${
                                    index + 1
                                }.`}</Text>
                            )}
                            {isListHeader ? (
                                <View style={{ flex: 1 }}>
                                    {isSingleLine ? (
                                        <Paragraph style={{ marginBottom: 0 }}>
                                            <BoldText>{`${item.title}: `}</BoldText>
                                            {item.descr}
                                        </Paragraph>
                                    ) : (
                                        <FlexColContainer
                                            containerStyle={{
                                                gap: 0,
                                            }}
                                        >
                                            <BoldText>{`${item.title}:`}</BoldText>
                                            {item.subList ? (
                                                <View
                                                    style={{
                                                        ...styles.bulletList,
                                                    }}
                                                >
                                                    {item.subList.map(
                                                        (listItem, i) => (
                                                            <View
                                                                key={i}
                                                                style={
                                                                    styles.bulletItem
                                                                }
                                                            >
                                                                <View
                                                                    style={
                                                                        styles.bulletSymbol
                                                                    }
                                                                />
                                                                <Text
                                                                    style={
                                                                        styles.bulletText
                                                                    }
                                                                >
                                                                    {listItem}
                                                                </Text>
                                                            </View>
                                                        )
                                                    )}
                                                </View>
                                            ) : (
                                                <Paragraph>
                                                    {item.descr}
                                                </Paragraph>
                                            )}
                                        </FlexColContainer>
                                    )}
                                </View>
                            ) : (
                                <Text style={styles.listText}>{item.text}</Text>
                            )}
                        </View>

                        {item.subItems && item.subItems.length > 0 && (
                            <View
                                style={{
                                    ...styles.bulletList,
                                    ...bulletListStyle,
                                }}
                            >
                                {item.subItems.map((subItem, i) => (
                                    <View key={i} style={styles.bulletItem}>
                                        <View style={styles.bulletSymbol} />
                                        <Text style={styles.bulletText}>
                                            {subItem}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))
            ) : (
                <Text>No list item</Text>
            )}
        </View>
    );
};

export const FlexBetweenContainer = ({ children, style = {} }) => (
    <View style={{ ...styles.flexBetweenContainer, ...style }}>{children}</View>
);

export const FlexGapContainer = ({ children, containerStyle = {} }) => (
    <View style={{ ...styles.flexGap, ...containerStyle }}>{children}</View>
);

export const FlexColContainer = ({ children, containerStyle = {} }) => (
    <View style={{ ...styles.flexCol, ...containerStyle }}>{children}</View>
);

export const PageWrapper = ({ children }) => (
    <Page size="A4" style={styles.page} wrap>
        {/* Header */}
        <View style={styles.header} fixed>
            <Image src={logo} style={styles.headerImage} />
        </View>

        {/* Content */}
        {children}

        {/* Footer */}
        <View style={styles.footer} fixed>
            <Text style={styles.footerText}>26 N Potomac Street</Text>
            <Text style={styles.footerText}>Hagerstown</Text>
            <Text style={styles.footerText}>MD 21740</Text>
        </View>
    </Page>
);

export const SignatureImage = ({ src, style = {} }) => {
    if (!src) return null;

    return <Image src={src} style={[styles.signatureImage, style]} />;
};

export const CheckboxImage = ({ src }) => {
    if (!src) return null;

    return <Image src={src} style={styles.checkboxImage} />;
};

export const GridLayout = ({ items, descriptiveText, columnStyle = {} }) => {
    const hasItems = Array.isArray(items) && items.length > 0;

    return hasItems ? (
        <View style={styles.grid}>
            {items.map((item, index) => (
                <View key={index} style={{ ...styles.column, ...columnStyle }}>
                    <Text>{item}</Text>
                </View>
            ))}
        </View>
    ) : (
        <Text>{`There are no ${descriptiveText}`}</Text>
    );
};
