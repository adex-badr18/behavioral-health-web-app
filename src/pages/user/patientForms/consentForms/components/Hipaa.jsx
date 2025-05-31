import { View } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    FlexBetweenContainer,
    FlexGapContainer,
    SignatureImage,
    BoldText,
    UnderlinedText,
} from "./pdfFormComponents";

const Hipaa = ({ data }) => {
    const { signature, date } = data;

    return (
        <View>
            <Title>HIPAA Acknowledgement</Title>

            <Paragraph>
                The Health Insurance Portability and Accountability Act (HIPAA)
                and the Health Information Technology of Economic and Clinical
                Act (the HITECH Act) are regulatory standards for privacy and
                security. BrightLife Enhancement Services LLC is committed to
                maintaining the privacy and integrity of privileged information
                and complying with all the requirements of HIPAA and the HITECH
                act. The American Recovery and Reinvestment Act of 2009 contains
                significant changes to the HIPAA Act of 1996. Security Breach
                Notification, application to Business Association, and
                improvement enforcement are areas that have been incorporated
                into the American Recovery and Reinvestment Act of 2009. An
                important part of HIPAA, known as the Privacy Rule, was
                developed to address the electronic transfer of private
                information. The Privacy Rule seeks to prevent the dissemination
                of information of protected health information (PHI), I.e., that
                sort of information that a participant might have an expectation
                will not be shared without his or her permission. Enumerated in
                45 C.F.R. SS 164.514, an individual’s PHI includes information
                that could identify and/ or reveal medical information about the
                person. If you believe your privacy rights have been violated,
                you can file a complaint, or to receive more information about
                our privacy policy practices, please contact us.
            </Paragraph>

            <Paragraph>
                BrightLife Enhancement Services, LLC 226 N Potomac Street,
                Hagerstown MD 21740
            </Paragraph>

            <Paragraph>
                We will not retaliate against one for filing a complaint. For
                information about HIPAA or to file a complaint: The U.S
                Department of Health and Human Services Office of Civil Rights
                200 Independence Avenue, S.W. Washington, D.C. 20201 Toll-Free:
                1-877-696-6775
            </Paragraph>

            <Paragraph>
                I have received a copy of the Privacy Practices/ HIPAA Forms. I
                understand the above information regarding protected health
                information (PHI)
            </Paragraph>

            <FlexBetweenContainer>
                <FlexGapContainer>
                    <BoldText>Client Signature:</BoldText>
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

export default Hipaa;
