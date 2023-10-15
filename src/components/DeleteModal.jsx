import React from 'react'

const DeleteModal = ({setIsDelete}) => {
    const handleDelete =(id)=>{
        setIsDelete(false)
        // const deletedExpenses = expenses.filter((items)=> items.id !== id)  
        // setExpenses([...deletedExpenses])
      }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
     id='outerDiv'
   >
    <div className=' w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col gap-4'>
      <p>Are you sure you want to delete?</p>
      <div className="flex justify-center space-x-2">
          <button
            onClick={() => setIsDelete(false)}
            className="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            No
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Yes, Delete
          </button>
        </div>
   
    </div>
</div>
  )
}

export default DeleteModal
