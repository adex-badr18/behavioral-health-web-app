import { useNavigate } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";

const BackButton = () => {
    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleNavigateBack}
            className="rounded-lg px-3 py-2 text-sm flex items-center justify-center gap-2 divide-x-2 font-poppins font-semibold text-nowrap transition-colors duration-300 bg-deepGreen text-white divide-white hover:bg-originalGreen"
        >
            <CgArrowLeft className="text-xl font-bold" />
            <span className="pl-2">Go Back</span>
        </button>
    );
};

export default BackButton;
