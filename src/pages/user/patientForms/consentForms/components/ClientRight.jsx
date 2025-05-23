import { Page } from "@react-pdf/renderer";
import {
    Paragraph,
    Title,
    Subtitle,
    NumberedList,
    FlexBetweenContainer,
} from "./pdfFormComponents";
import { clientRights } from "./data";

const ClientRight = () => {
    return (
        <Page size="A4" style={{ padding: 40 }}>
            <Title>The Rights of Clients</Title>

            <Paragraph>
                Your rights as a client are important. You have the right to
                fair, consistent and professional treatment at our program. If
                you feel your individual rights have been violated, you may use
                the grievance procedure. The confidentiality/privacy of client
                records maintained by the program is protected by HIPAA federal
                law as well as 42 CFR Part 2. For detailed information on
                BrightLife Enhancement Services, LLC, refer to the document
                entitled HIPAA Acknowledgement regardless of whether he/she is
                admitted as a client.
            </Paragraph>

            <NumberedList
                title="The following is a summary of non-HIPAA, 42 CFR Part 2 client rights as they pertain to your involvement with this program."
                items={clientRights}
            />

            <Paragraph>
                Any individual or agency receiving this information is
                prohibited from making further disclosure of this information.
                The confidentiality of this information is protected by two
                federal laws, the Health Insurance Portability and
                Accountability Act of 1996 (HIPAA), 42 US 1130d et seq, 45 CFR
                Part 2. They prohibit making any disclosure of this information
                except with the specific written consent of the person to whom
                it pertains. A general authorization for the release of medical
                or other information, if held by another party, is not for the
                purpose.
            </Paragraph>

            <FlexBetweenContainer></FlexBetweenContainer>
        </Page>
    );
};

export default ClientRight;
