import React, { useEffect, useState } from "react";

const EditExpenseModal = ({
  closeModal,
  expenses,
  setExpenses,
  handleEdit,
  editRow,
}) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [updatedAt, setupdatedAt] = useState("");
  const [amount, setAmount] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  useEffect(() => {
    setName(editRow.name);
    setDate(editRow.date);
    setCategory(editRow.category);
    setupdatedAt(editRow.updatedAt);
    setAmount(editRow.amount);
    setCreatedBy(editRow.createdBy);
  }, []);

  console.log(editRow);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedExpenses = {
      id: editRow.id,
      name,
      date,
      category,
      updatedAt,
      amount,
      createdBy,
    };
    console.log(updatedExpenses, "updatedf");
    const setUpdatedExpense = expenses.filter((item) => {
      if (item.id !== updatedExpenses.id) return item;
      else return updatedExpenses;
    });
    console.log(setUpdatedExpense, "setdat");
    setExpenses(setUpdatedExpense);
    closeModal();
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="outerDiv"
      >
        <div className=" overflow-y-scroll  w-80 h-80 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col gap-4">
          <div className="flex flex-col justify-center px-3 py-2">
            <h2 className="mt-0 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Edit Expenses
            </h2>

            <div>
              <form className="space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>
                  <div className="mt-1">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      autoComplete="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-1">
                    <input
                      id="category"
                      name="category"
                      type="text"
                      autoComplete="category"
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    UpdatedAt
                  </label>
                  <div className="mt-1">
                    <input
                      id="updatedAt"
                      name="updatedAt"
                      type="text"
                      autoComplete="updatedAt"
                      required
                      value={updatedAt}
                      onChange={(e) => setupdatedAt(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Created By
                  </label>
                  <div className="mt-1">
                    <input
                      id="createdby"
                      name="createdby"
                      type="text"
                      autoComplete="createdby"
                      required
                      value={createdBy}
                      onChange={(e) => setCreatedBy(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Amount
                  </label>
                  <div className="mt-1">
                    <input
                      id="amount"
                      name="amount"
                      type="text"
                      autoComplete="amount"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex  justify-center space-x-2">
                  <button
                    onClick={handleEditSubmit}
                    className="flex justify-center rounded-md
               bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6
                text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => closeModal()}
                    className="flex justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;
