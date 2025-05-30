import { convertToUSDateTime } from "../utils";

export const recentPatients = [
    {
        id: "PAT0000001",
        firstName: "James",
        lastName: "Rodriguez",
        dob: new Date("03/21/1974").toLocaleDateString(),
        gender: "Male",
        phone: "+4104567891",
        email: "rodrijay@gmail.com",
    },
    {
        id: "PAT0000002",
        firstName: "Adam",
        lastName: "Smith",
        dob: new Date("03/21/1974").toLocaleDateString(),
        gender: "Male",
        phone: "+4104567891",
        email: "smith97dams@gmail.com",
    },
    {
        id: "PAT0000003",
        firstName: "Bukola",
        lastName: "Almarouf",
        dob: new Date("03/21/1974").toLocaleDateString(),
        gender: "Female",
        phone: "+4104567891",
        email: "marouf_buk@gmail.com",
    },
    {
        id: "PAT0000004",
        firstName: "Mushrif",
        lastName: "Ajayi",
        dob: new Date("03/21/1974").toLocaleDateString(),
        gender: "Male",
        phone: "+4104567891",
        email: "mushajayi@gmail.com",
    },
    {
        id: "PAT0000005",
        firstName: "Isabella",
        lastName: "Evans",
        dob: new Date("03/21/1960").toLocaleDateString(),
        gender: "Female",
        phone: "+4104567891",
        email: "isbevans@gmail.com",
    },
    // Add more data here
];

export const recentPatientsColumns = [
    {
        accessorKey: "patientId",
        header: "Patient ID",
    },
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    // {
    //     accessorKey: "dob",
    //     header: "Date of Birth",
    // },
    {
        accessorKey: "gender",
        header: "Gender",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    // {
    //     accessorKey: "status",
    //     header: "Status",
    //     cell: (prop) => {
    //         const value = prop.getValue();

    //         return (
    //             <span
    //                 className={`p-1 w-16 block text-center rounded text-xs ${
    //                     value.toLowerCase() === "approved"
    //                         ? "bg-[#00555552] text-[#005555]"
    //                         : "bg-[#DB2F2F52] text-[#DB2F2F]"
    //                 }`}
    //             >
    //                 {value}
    //             </span>
    //         );
    //     },
    // },
];

export const statsData = [
    {
        id: 1,
        title: "Registered Patients",
        entity: "patient",
        value: 205,
        numOfNew: 5,
    },
    {
        id: 2,
        title: "Appointments",
        entity: "appointment",
        value: 129,
        numOfNew: 3,
    },
    {
        id: 3,
        title: "Reviews",
        entity: "review",
        value: 11,
        numOfNew: 5,
    },
];

export const recentAppointments = [
    {
        id: "1",
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
        service: "Medical Rehab0",
        dateTime: new Date().toISOString(),
        status: "Upcoming",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "2",
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
        service: "Medical Rehab0",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "3",
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
        service: "Medical Rehab0",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "4",
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
        service: "Medical Rehab0",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    {
        id: "5",
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
        service: "Medical Rehab0",
        dateTime: "2025-02-13T14:30:00Z",
        status: "Upcoming",
        paymentMethod: "Insurance Card",
        insuranceName: "Medicare",
        insuranceNumber: "123456789",
    },
    // Add more data here
];

export const recentAppointmentsColumns = [
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
        header: "Appointment Date",
        cell: (prop) => `${new Date(prop.getValue()).toLocaleString()}`,
    },
];

export const recentReviews = [
    {
        id: "1",
        name: "James",
        email: "username@gmail.com",
        rating: "5",
    },
    {
        id: "2",
        name: "Adam",
        email: "username@gmail.com",
        rating: "5",
    },
    {
        id: "3",
        name: "Bukola",
        email: "username@gmail.com",
        rating: "4",
    },
    {
        id: "4",
        name: "Mushrif",
        email: "username@gmail.com",
        rating: "3",
    },
    {
        id: "5",
        name: "Isabella",
        email: "username@gmail.com",
        rating: "5",
    },
    // Add more data here
];

export const recentReviewsColumns = [
    {
        accessorKey: "nickname",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "rating",
        header: "Rating",
    },
];