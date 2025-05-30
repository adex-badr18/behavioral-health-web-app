import { convertToUSDateTime } from "../utils";

export const appointments = [
    {
        id: "1",
        patientId: "",
        firstName: "James",
        middleName: "Joy",
        lastName: "Rodriguez",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: new Date().toISOString(),
        status: "Attended",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "2",
        patientId: "",
        firstName: "Adam",
        middleName: "Joy",
        lastName: "Smith",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Individual Therapy",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Missed",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "3",
        patientId: "",
        firstName: "Bukola",
        middleName: "Joy",
        lastName: "Almarouf",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Individual Therapy",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "4",
        patientId: "",
        firstName: "Mushrif",
        middleName: "Joy",
        lastName: "Ajayi",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Attended",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "5",
        patientId: "",
        firstName: "Isabella",
        middleName: "Joy",
        lastName: "Evans",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Missed",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "6",
        patientId: "",
        firstName: "Bukola",
        middleName: "Joy",
        lastName: "Almarouf",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "7",
        patientId: "",
        firstName: "Mushrif",
        middleName: "Joy",
        lastName: "Ajayi",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Attended",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "8",
        patientId: "",
        firstName: "Isabella",
        middleName: "Joy",
        lastName: "Evans",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Missed",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "9",
        patientId: "",
        firstName: "Bukola",
        middleName: "Joy",
        lastName: "Almarouf",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "10",
        patientId: "",
        firstName: "Mushrif",
        middleName: "Joy",
        lastName: "Ajayi",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Attended",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "11",
        patientId: "",
        firstName: "Isabella",
        middleName: "Joy",
        lastName: "Evans",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Missed",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "12",
        patientId: "",
        firstName: "Bukola",
        middleName: "Joy",
        lastName: "Almarouf",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "13",
        patientId: "",
        firstName: "Mushrif",
        middleName: "Joy",
        lastName: "Ajayi",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Attended",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "14",
        patientId: "",
        firstName: "Isabella",
        middleName: "Joy",
        lastName: "Evans",
        phone: "+4104567891",
        dob: "2025-02-13",
        gender: "Female",
        email: "username@gmail.com",
        streetAddress: "1 Example Street",
        city: "Example",
        state: "Example",
        zipCode: "123456",
        appointmentType: "In-person",
        service: "Medical Rehab",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        purpose: "To resolve bipolar disorder and lack of concntration",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    // Add more data here
];

export const appointmentsColumns = [
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "appointmentDateTime",
        header: "Appointment Date Time",
        cell: (prop) => {
            const value = new Date(prop.getValue()).toLocaleString() || "N/A";
            return <span className="text-deepGrey">{value}</span>;
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (prop) => {
            const value = prop.getValue() || "N/A";

            return (
                <span
                    className={`p-1 w-20 block text-center rounded text-xs capitalize ${
                        value.toLowerCase() === "attended"
                            ? "bg-lightGreen text-offWhite"
                            : value.toLowerCase() === "upcoming"
                            ? "bg-yellow-700 text-offWhite"
                            : value.toLowerCase() === "missed"
                            ? "bg-vividRed text-offWhite"
                            : "text-deepGrey text-lg"
                    }`}
                >
                    {value}
                </span>
            );
        },
    },
];

export const appointmentStatusOptions = [
    { id: 1, text: "Attended", value: "Attended" },
    { id: 2, text: "Missed", value: "Missed" },
    { id: 3, text: "Upcoming", value: "Upcoming" },
];
