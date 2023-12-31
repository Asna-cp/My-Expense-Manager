import React, { useState } from "react";
import AddExpenseModal from "./AddExpenseModal";
import { nanoid } from "nanoid";
import DeleteModal from "./DeleteModal";
import DeleteIcon from "../asset/icons/DeleteIcon";
import EditIcon from "../asset/icons/EditIcon";
import SearchIcon from "../asset/icons/SearchIcon";
import FilterIcon from "../asset/icons/FilterIcon";
import EditExpenseModal from "./EditExpenseModal";

function ViewExpenses() {
  const [isDelete, setIsDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  //Edit Expenses
  const [modalOpen, setModalOpen] = useState(false);
  const [editRow, setEditRow] = useState({});
  const [search, setSearch] = useState();

  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      name: "Groceries",
      category: "Food",
      date: "2023-10-15",
      amount: "$50.00",
      updatedAt: "2023-10-16",
      createdBy: "John Doe",
    },
    {
      id: nanoid(),
      name: "Internet Bill",
      category: "Utility",
      date: "2023-10-12",
      amount: "$70.00",
      updatedAt: "2023-10-14",
      createdBy: "Jane Smith",
    },
  ]);

  const addNewExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  const handleIsAdded = (isAdded) => {
    setIsAdd(isAdded);
  };
  const handleDelete = (id) => {
    setIsDelete(true);
    const deletedExpenses = expenses.filter((items) => items.id !== id);
    setExpenses([...deletedExpenses]);
  };

  const handleEdit = (expense) => {
    setEditRow(expense);
    setModalOpen(true);
  };

  return (
    <div className=" relative overflow-x-auto  min-h-full  justify-center px-6 py-12 lg:px-8">
      {!isAdd ? (
        <>
          <div className="flex justify-between mb-4">
            <h1 className="text-xl font-semibold">My Expense Manager</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.search)}
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <SearchIcon />
              <div className="relative inline-block">
                <select className="block appearance-none w-32 ml-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-primary-600">
                  <option>Filter By</option>
                  <option>Date</option>
                  <option>Name</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FilterIcon />
                </div>
              </div>

              <button
                onClick={() => setIsAdd(true)}
                className="bg-green-500 text-white  py-1.5 px-2  rounded hover:bg-green-600"
              >
                Create New Expense
              </button>
            </div>
          </div>
          <div className="relative w-92 overflow-x-auto">
            <table className=" min-w-full border">
              <thead>
                <tr className="border-b">
                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Date of Expense
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Updated at
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Created by
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  text-left block md:table-cell"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((item, id) => (
                  <tr
                    key={item.id}
                    className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                  >
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      {item.name}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      {item.category}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      {item.date}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      {item.amount}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      {item.updatedAt}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      {item.createdBy}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell font-thin">
                      <button className="mr-2" onClick={() => handleEdit(item)}>
                        <EditIcon />

                        {modalOpen && (
                          <EditExpenseModal
                            setExpenses={setExpenses}
                            expenses={expenses}
                            editRow={editRow}
                            closeModal={() => {
                              setModalOpen(false);
                            }}
                          />
                        )}
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <AddExpenseModal
          addNewExpense={addNewExpense}
          handleIsAdded={handleIsAdded}
        />
      )}
      {isDelete && <DeleteModal setIsDelete={setIsDelete} />}
    </div>
  );
}

export default ViewExpenses;
