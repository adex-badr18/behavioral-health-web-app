import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import Modal from "../../../../components/Modal";
import { IoMdAdd } from "react-icons/io";
import Table from "../../components/Table";
import { programsColumns } from "../data";
import { MdClose } from "react-icons/md";
import NewProgramForm from "./forms/NewProgramForm";

const ProgramsTab = ({ programs, patientId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-8 relative">
            <PageTitle title="Patient's Program(s)">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="rounded-lg px-3 py-2 text-sm flex items-center justify-center gap-2 divide-x-2 font-poppins font-semibold text-nowrap transition-colors duration-300 bg-deepGreen text-white divide-white hover:bg-originalGreen"
                >
                    <span className="">Add Program</span>
                    <IoMdAdd className="pl-2 text-2xl font-bold" />
                </button>
            </PageTitle>

            <Table
                data={programs}
                columns={programsColumns}
                entity="program"
                tableTitle="Programs"
                columnFilters={[]}
                isRowClickable={false}
                patientId={patientId}
            />

            <Modal isOpen={isModalOpen}>
                <div className="w-full max-w-lg overflow-y-auto bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <NewProgramForm
                            patientId={patientId}
                            setIsModalOpen={setIsModalOpen}
                        />
                    }

                    <button
                        className="absolute top-2 right-2 text-2xl p-1 hover:bg-gray-300 rounded-md transition-colors duration-300"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <MdClose />
                    </button>
                </div>
            </Modal>
        </section>
    );
};

export default ProgramsTab;
