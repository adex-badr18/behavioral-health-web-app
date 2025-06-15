import React, { useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FilterIcon } from "./icons";

const Table = ({
    data,
    columns,
    tableTitle,
    columnFilters,
    isIncludePagination,
    entity,
    isIncludeSearchBox,
    isSnapshot,
    isRowClickable,
    setIsSearchModalOpen,
    isGlobalSearch,
    setGlobalSearch,
    patientId,
}) => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [rowSelection, setRowSelection] = useState({});
    const navigate = useNavigate();
    const entityUrl = `/admin/${entity}`;

    console.log(isGlobalSearch);

    const { defaultSearchReqBody } = useMemo(() => {
        let defaultSearchReqBody;

        if (patientId) {
            if (entity === "appointments") {
                defaultSearchReqBody = {
                    patientId: patientId,
                    firstName: "",
                    lastName: "",
                    middleName: "",
                    dob: "",
                    phone: "",
                    email: "",
                    gender: "",
                    maritalStatus: "",
                    city: "",
                    state: "",
                    appointmentDateTime: "",
                    paymentMode: "",
                };
            } else if (entity === "reviews") {
                defaultSearchReqBody = {
                    patientId: patientId,
                    nickName: "",
                    email: "",
                    rating: "",
                    status: "",
                };
            }
        } else {
            defaultSearchReqBody = {};
        }
        return { defaultSearchReqBody };
    }, [data, entity, patientId]);

    // Define the table instance
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            rowSelection,
        },
        onGlobalFilterChange: setGlobalFilter,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handleRowClick = (entityData) => {
        // const entityData = data.filter((entity) => entity.id === id)[0];
        let id = "";

        if (entity.toLowerCase() === "patients") {
            id = entityData.patientId;
        } else {
            id = entityData.id;
        }

        navigate(`${entityUrl}/${id}`);
    };

    const generateMultiplesOf10 = (totalNumber) => {
        let num = Math.ceil(totalNumber / 10);
        const multiplesOf10 = [];

        for (let i = 1; i <= num; i++) {
            multiplesOf10.push(i * 10);
        }
        return multiplesOf10;
    };

    const handleClearFilters = (e) => {
        e.preventDefault();

        setGlobalFilter("");
        setGlobalSearch(defaultSearchReqBody);
    };

    return (
        <div className="px-4 py-6 bg-offWhite rounded-lg space-y-6 w-full">
            {/* Title Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h2 className="text-lg text-darkBlue font-medium capitalize">
                    {tableTitle}
                </h2>

                {isIncludeSearchBox && (
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <button
                                className="bg-lightGray p-2 rounded-md border hover:bg-gray-300 transition-colors duration-300"
                                onClick={() => setIsSearchModalOpen(true)}
                            >
                                <FilterIcon className="w-6" />
                            </button>

                            {/* Global Filter */}
                            <SearchBox
                                inputName="globalFilter"
                                searchText={globalFilter}
                                onChange={(e) =>
                                    setGlobalFilter(e.target.value)
                                }
                                placeholderText={`Search...`}
                            />
                        </div>

                        {!isGlobalSearch && (
                            <button
                                onClick={handleClearFilters}
                                className="text-vividRed flex items-center gap-1 text-sm"
                            >
                                <IoCloseCircleSharp />
                                <span className="">Reset Filters</span>
                            </button>
                        )}
                    </div>
                )}

                {isSnapshot && (
                    <Link
                        to={`/admin/${entity}`}
                        className="text-lightGreen hover:underline"
                    >
                        View all
                    </Link>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border-spacing-0 table-auto">
                    <thead>
                        <tr className="bg-lightGray">
                            {table.getHeaderGroups().map((headerGroup) =>
                                headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="p-4 text-left font-semibold"
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#959595]">
                        {data.length < 1 ? (
                            <tr className="h-36">
                                <td
                                    className="p-4 text-center min-h-36"
                                    colSpan={
                                        table.getVisibleLeafColumns().length
                                    }
                                >
                                    No record found!
                                </td>
                            </tr>
                        ) : (
                            table.getRowModel().rows.map((row) => {
                                const singleEntityData = row.original;

                                return (
                                    <tr
                                        key={row.id}
                                        className={`${isRowClickable && "cursor-pointer"}`}
                                        {...(isRowClickable && {
                                            onClick: () =>
                                                handleRowClick(
                                                    singleEntityData
                                                ),
                                        })}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="p-4">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {isIncludePagination && data.length > 0 && (
                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="hidden sm:flex items-center gap-4 md:gap-8 text-deepGrey">
                        <span className="font-medium">
                            {`Page ${
                                table.getState().pagination.pageIndex + 1
                            } of ${table.getPageCount()}`}
                        </span>

                        <span className="flex items-center gap-1">
                            Go to page:
                            <input
                                type="number"
                                className="border border-grey p-1 rounded w-10 bg-offWhite"
                                defaultValue={
                                    table.getState().pagination.pageIndex + 1
                                }
                                onChange={(e) => {
                                    const page = e.target.value
                                        ? Number(e.target.value) - 1
                                        : 0;
                                    table.setPageIndex(page);
                                }}
                                min={1}
                                max={table.getPageCount()}
                            />
                        </span>

                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value));
                            }}
                            className="p-1 bg-transparent border border-grey rounded"
                        >
                            {generateMultiplesOf10(data.length).map(
                                (pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                        <button
                            onClick={() => {
                                table.previousPage();
                            }}
                            disabled={!table.getCanPreviousPage()}
                            className="flex items-center justify-center gap-x-2 w-full px-5 py-2 text-lightGreen hover:text-offWhite bg-transparent hover:bg-lightGreen capitalize transition-colors duration-200 border border-lightGreen rounded disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <FaArrowLeftLong
                                size={18}
                                className="hidden sm:block flex-shrink-0"
                            />
                            <span>previous</span>
                        </button>

                        <button
                            onClick={() => {
                                table.nextPage();
                            }}
                            disabled={!table.getCanNextPage()}
                            className="flex items-center justify-center gap-x-2 w-full px-5 py-2 text-offWhite bg-lightGreen capitalize transition-colors duration-200 border border-lightGreen hover:border-lighterGreen rounded hover:bg-lighterGreen disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <span>Next</span>
                            <FaArrowRightLong
                                size={18}
                                className="hidden sm:block flex-shrink-0"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;
