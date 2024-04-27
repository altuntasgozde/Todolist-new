import { useState } from 'react'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState("")
  const [values, setValues] = useState([])

  const handleChange = () => {
    if (inputValue !== "") {
      setValues([...values, inputValue])
      setInputValue("")
    }

  }

  const deleteInput = (index) => {
    const newValues = [...values]
    newValues.splice(index, 1)
    setValues(newValues)
  }

  const deleteAll = () => {
    setValues([])
  }

  return (
    <div className='App p-12'>
      <div className='border border-1 mx-80 rounded-lg shadow-lg bg-white'>
        <p className="text-xl font-bold mt-5 text-center">Todo List</p>
        <div className='p-5 mx-5'>
          <div className='flex mt-12'>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" placeholder="Add To do..." />
            <button type="button" onClick={handleChange} className="py-3 px-4 ml-2 inline-flex w-1/3 items-center gap-x-2 text-sm font-semibold rounded-lg border justify-center border-transparent bg-black text-center text-white  disabled:opacity-50 disabled:pointer-events-none">
              Add
            </button>
          </div>
          <div className='mt-12'>
            {values.map((value, index) => <div className='border border-1 flex justify-between p-5 rounded-lg mt-3'><p key={index}>{value} </p><span className='cursor-pointer' onClick={() => deleteInput(index)}>X</span></div>)}
          </div>
          <div className='justify-start flex mt-5'>
            {values.length !== 0 ? <button type="button" onClick={deleteAll} className="py-3 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border justify-center border-transparent bg-black text-center text-white disabled:opacity-50 disabled:pointer-events-none">
              Delete All
            </button> : null}

          </div>
        </div>
      </div>
    </div>



  )
}

export default App;
