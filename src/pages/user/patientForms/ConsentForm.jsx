import { signatureForms, dataCollectionForms, programForms } from "./data";
import { useLoaderData } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import LinkButton from "../../../components/LinkButton";
import Breadcrumb from "../../../components/Breadcrumb";

export const consentFormLoader = ({ params }) => {
    const slug = params.slug;

    const formInfo = programForms.filter(
        (form) => form.slug === slug
    );

    return formInfo.length > 0
        ? formInfo[0]
        : {
              status: "error",
              message: "The patient form you requested could not be found.",
          };
};

const ConsentForm = () => {
    const formObj = useLoaderData();

    if (formObj.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {formObj.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {formObj.message}
                    </p>
                    <LinkButton
                        name="Home"
                        to="/"
                        bgColor="green"
                        icon={<MdOutlineHome className="text-xl" />}
                    />
                </div>
            </section>
        );
    }

    return (
        <section className="">
            <Breadcrumb obj={formObj} page="forms" />

            <div className="wrapper py-5 md:py-16">
                <div className="space-y-10">
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-darkBlue">{formObj.title}</h1>
                    {formObj.component}
                </div>
            </div>
        </section>
    );
};

export default ConsentForm;
