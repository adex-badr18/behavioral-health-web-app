import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ obj, page }) => {
    const { pathname } = useLocation();

    const breadcrumbList = pathname.split("/").map((path, index) => {
        if (path === "") {
            return { id: index + 1, name: "Home", link: "/" };
        }

        if (!isNaN(path)) {
            return { id: index + 1, name: obj.shortName || obj.name, link: "" };
        }

        if (path.includes("-")) {
            return { id: index + 1, name: obj.title || obj.name, link: "" };
        }

        return {
            id: index + 1,
            name: `${path.slice(0, 1).toUpperCase()}${path.slice(1)}`,
            link: `/${path}`,
        };
    });

    return (
        <div
            className={`hidden blg:flex flex-col items-center justify-center gap-[10px] px-3 font-poppins h-[350px] ${
                page.toLowerCase() === "services"
                    ? "bg-services-breadcrumb-bg"
                    : page.toLowerCase() === "programs"
                    ? "bg-get-in-touch-bg"
                    : "bg-deepBlue"
            } bg-no-repeat bg-cover bg-center`}
        >
            <h1
                data-aos="fade-up"
                className="text-white text-center text-[40px] font-bold"
            >
                {obj.name}
            </h1>

            <div className="flex items-center justify-center flex-wrap gap-3 divide-x-2 divide-white">
                {breadcrumbList.map((item, index) => {
                    return (
                        <Link
                            key={item.id}
                            to={item.link}
                            data-aos="fade-up"
                            data-aos-delay={index * 300}
                            className={`pl-4 text-lg font-semibold ${
                                item.link ? "text-white" : "text-lightGreen"
                            }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
