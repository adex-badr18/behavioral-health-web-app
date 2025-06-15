import { useState } from "react";
import Blob from "../components/Blob";
import logo from "../../../assets/bles-logo-secondary.png";
import Logo from "../../../components/layout/Logo";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SubmitButton from "../../../components/SubmitButton";
import { useAuth } from "../components/auth/AuthProvider";
import { useLogin } from "../../../hooks/useGeneral";
import { objectToFormData } from "../../utils";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "fronteers.dev@gmail.com",
        password: "password",
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/admin/dashboard";

    const { mutate, isError, error, isPending } = useLogin({
        onSuccess: (response) => {
            login(response);
            navigate(from, { replace: true });
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = objectToFormData(formData);
        mutate(payload);

        // Temporary login
        // login(formData)
        // navigate(from, { replace: true });
    };

    return (
        <div className="h-screen flex">
            <div className="hidden md:block relative bg-darkBlue flex-1 p-10">
                <Link to="/">
                    <Logo logoSrc={logo} />
                </Link>

                <div className="h-1/2 translate-y-1/2">
                    <h1 className="text-offWhite font-knewave text-4xl leading-[60px]">
                        <span className="">ADMIN LOGIN:</span>
                        <span className="block">
                            BRIGHTLIFE ENHANCEMENT SERVICES
                        </span>
                    </h1>
                </div>
                <Blob />
            </div>

            <div className="flex-1 p-10 bg-offWhite flex flex-col items-center justify-center gap-10">
                <Link to="/" className="md:hidden">
                    <Logo logoSrc={logo} />
                </Link>

                <div className="bg-white px-11 py-8 rounded-lg shadow space-y-10 w-full max-w-lg">
                    <h3 className="text-3xl text-emeraldGreen text-center font-montserrat">
                        Log in
                    </h3>

                    {isError && (
                        <p className="text-vividRed text-center">
                            {error.message}
                        </p>
                    )}

                    <div className="">
                        <form className="">
                            <div className="space-y-6">
                                <div className="flex flex-col gap-2 mb-6">
                                    <label
                                        htmlFor="email"
                                        className="text-deepGrey font-roboto"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="input"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="password"
                                        className="text-deepGrey"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="input"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="remember-me"
                                        id="remember-me"
                                        className=""
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="text-[#808080] text-xs font-lato"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="space-y-5">
                                    <SubmitButton
                                        loadingText="Logging in..."
                                        submitText="Log in"
                                        onSubmit={handleSubmit}
                                        isSubmitting={isPending}
                                    />
                                    {/* <Link className="block text-center text-orange font-lato">
                                        Forgot your password?
                                    </Link> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
