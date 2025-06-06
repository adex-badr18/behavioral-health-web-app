import LinkButton from "../../../../components/LinkButton";
import { MdOutlineContactPage, MdOutlineGroups3 } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";

const GetInTouch = () => {
    return (
        <section className="px-5 md:px-10 py-24 bg-get-in-touch-bg bg-cover bg-no-repeat bg-center">
            <div className="container">
                <div className="text-white space-y-5 w-full md:w-7/12">
                    <h2 className="font-poppins">
                        <span
                            className="font-semibold text-xl leading-[30px]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Get In Touch
                        </span>
                        <span
                            className="block mt-5 text-3xl md:text-5xl leading-[40px] md:leading-[58px] font-bold"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            Best Behavioral/Mental Care Near Your City
                        </span>
                    </h2>

                    <p
                        className="font-rubik text-lg leading-[28px]"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        We've 15 years of experience in Behavioral & Mental Health
                        services.
                    </p>
                </div>

                <div className="flex flex-wrap gap-5 mt-8 md:mt-12">
                    <LinkButton
                        name="Contact Us"
                        icon={<MdOutlineContactPage className="" />}
                        bgColor="green"
                        variant="outline"
                        to="/contact"
                        data-aos="fade-right"
                        data-aos-delay="1500"
                    />
                    <LinkButton
                        name="Services"
                        icon={<GiGearStickPattern className="" />}
                        bgColor="green"
                        to="/services"
                        data-aos="fade-left"
                        data-aos-delay="1500"
                    />
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
