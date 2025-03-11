import { useNavigate } from "react-router-dom";

const Error = ({ message = "Sorry, something went wrong." }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full px-16 md:px-0 h-[100vh] flex items-center justify-center">
            <div className="bg-white border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg">
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-vividRed mt-4">
                    Error!
                </p>
                <p className="text-deepGrey mt-4 pb-4 border-b-2 text-center">
                    {message}
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                    <button
                        className="w-full rounded-lg p-4 bg-lightGreen hover:bg-lighterGreen text-white font-semibold text-nowrap transition duration-500"
                        onClick={() => navigate("/")}
                    >
                        Return Home
                    </button>
                    <button
                        className="w-full rounded-lg p-4 bg-darkBlue hover:bg-deepBlue text-white font-semibold text-nowrap transition duration-500"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                    <button
                        className="w-full rounded-lg p-4 bg-vividRed hover:bg-red-500 text-white font-semibold text-nowrap transition duration-500"
                        onClick={() => window.location.reload()}
                    >
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
