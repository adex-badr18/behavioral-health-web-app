import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { IoMdAdd } from "react-icons/io";
import Table from "../../components/Table";
import { programsColumns } from "../data";

const ProgramsTab = ({ programs, patientId }) => {
    return (
        <section className="py-8 relative">
            <PageTitle title="Patient's Program(s)">
                <button className="rounded-lg px-3 py-2 text-sm flex items-center justify-center gap-2 divide-x-2 font-poppins font-semibold text-nowrap transition-colors duration-300 bg-deepGreen text-white divide-white hover:bg-originalGreen">
                    <span className="">Add Program</span>
                    <IoMdAdd className="pl-2 text-2xl font-bold" />
                </button>
            </PageTitle>

            <Table
                data={programs}
                columns={programsColumns}
                entity="program"
                // isIncludePagination={true}
                // isIncludeSearchBox={true}
                tableTitle="Programs"
                columnFilters={[]}
                isRowClickable={false}
                // setIsSearchModalOpen={setIsSearchModalOpen}
                // isGlobalSearch={
                //     patientId
                //         ? isAllEmptyExceptPatientId(reqBody)
                //         : Object.keys(reqBody).length < 1
                // }
                // setGlobalSearch={setReqBody}
                patientId={patientId}
            />
        </section>
    );
};

export default ProgramsTab;
