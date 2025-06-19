import { FaStar } from "react-icons/fa6";

export const reviews = [
    {
        id: "1",
        nickname: "James",
        email: "username@gmail.com",
        rating: "5",
        status: "Published",
        date: "11/06/2024",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "2",
        nickname: "Adam",
        email: "username@gmail.com",
        rating: "5",
        status: "Draft",
        date: "11/06/2024",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "3",
        nickname: "Bukola",
        email: "username@gmail.com",
        rating: "4",
        status: "Draft",
        date: "11/06/2024",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "4",
        nickname: "Mushrif",
        email: "username@gmail.com",
        rating: "3",
        status: "Draft",
        date: "11/06/2024",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend! Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "5",
        nickname: "Isabella",
        email: "username@gmail.com",
        rating: "5",
        status: "Published",
        date: "11/06/2024",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    // Add more data here
];

export const ratingOptions = [
    { id: 1, text: "1 Star", value: "1" },
    { id: 2, text: "2 Stars", value: "2" },
    { id: 3, text: "3 Stars", value: "3" },
    { id: 4, text: "4 Stars", value: "4" },
    { id: 5, text: "5 Stars", value: "5" },
];

export const statusOptions = [
    { id: 1, text: "Published", value: "published" },
    { id: 2, text: "Draft", value: "draft" },
];

export const reviewsColumns = [
    {
        accessorKey: "nickname",
        header: "Nickname",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
        cell: (prop) => {
            const value =
                new Date(prop.getValue()).toLocaleDateString() || "N/A";
            return <span className="">{value}</span>;
        },
    },
    {
        accessorKey: "rating",
        header: "Rating",
        cell: (prop) => {
            const value = Number(prop.getValue());

            return (
                <div className="flex items-center gap-1">
                    {Array.from({ length: value }, (_, index) => (
                        <FaStar
                            key={index}
                            className={`text-yellow-600 text-s`}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (prop) => {
            const value = prop.getValue();

            return (
                <span
                    className={`p-1 w-[65px] block text-center rounded text-xs text-offWhite capitalize ${
                        value.toLowerCase() === "published"
                            ? "bg-lightGreen"
                            : "bg-vividRed"
                    }`}
                >
                    {value}
                </span>
            );
        },
    },
];

export const patientReviewsColumns = [
    {
        accessorKey: "createdAt",
        header: "Date",
        cell: (prop) => {
            const value =
                new Date(prop.getValue()).toLocaleDateString() || "N/A";
            return <span className="">{value}</span>;
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "rating",
        header: "Rating",
        cell: (prop) => {
            const value = Number(prop.getValue());

            return (
                <div className="flex items-center gap-1">
                    {Array.from({ length: value }, (_, index) => (
                        <FaStar
                            key={index}
                            className={`text-yellow-600 text-s`}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (prop) => {
            const value = prop.getValue();

            return (
                <span
                    className={`p-1 w-[65px] block text-center rounded text-xs text-offWhite capitalize ${
                        value.toLowerCase() === "published"
                            ? "bg-lightGreen"
                            : "bg-vividRed"
                    }`}
                >
                    {value}
                </span>
            );
        },
    },
];
