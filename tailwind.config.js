/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#223645",
                deepBlue: "#13232F",
                borderColor: "#24333E",
                vividRed: "#E12454",
                lightGreen: "#8FB569",
                lightGrey: "#F0F1F2",
                deepGrey: "#2b3944",
                lightGrey: "#959ca2",
                grey: "#647589",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                agu: ["Agu Display", "serif"]
            },
            fontSize: {
                default: "15px",
            },
            padding: {
                default: "15px",
            },
            lineHeight: {
                default: "20px",
            },
            backgroundImage: {
                "service-center-image":
                    "url('/src/assets/service-center-image.webp')",
                "psychotic-service-image":
                    "url('/src/assets/behavioral-disorder.jpg')",
                "depression-service-image": "url('/src/assets/depression.jpg')",
                "anxiety-service-image": "url('/src/assets/anxiety.jpg')",
                "more-services-image":
                    "url('/src/assets/behavioral-disorder2.jpg')",
                "get-in-touch-bg": "url('/src/assets/section-bg2.jpg')",
            },
            screens: {
                bsm: "400px",
                smallsm: "500px",
                blg: "1000px",
                bxl: "1200px",
                b2xl: "1400px",
            },
        },
    },
    plugins: [],
};
