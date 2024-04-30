import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { BsXLg } from "react-icons/bs";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  const handleChange = () => {
    if (inputValue !== '') {
      setValues([...values, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const deleteInput = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const deleteAll = () => {
    setValues([]);
  };

  const handleToggleCheckbox = (index) => {
    const newValues = [...values];
    newValues[index].checked = !newValues[index].checked;
    setValues(newValues);
  };

  return (
    <div className='App p-12'>
      <div className='border border-1 mx-80 rounded-lg shadow-lg bg-white'>
        <p className='text-xl font-bold mt-5 text-center'>Todo List</p>
        <div className='p-5 mx-5'>
          <div className='flex mt-12'>
            <input
              type='text'
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className='py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
              placeholder='Add To do...'
            />
            <Button onClick={handleChange}>Add</Button>
          </div>
          <div className='mt-12'>
            {values.map((value, index) => (
              <div
                className={`border border-1 flex justify-between p-5 rounded-lg mt-3`}
                key={index}
              >
                <div className='flex items-center'>
                  <input
                    className='h-6 w-6 rounded-2xl border-gray-300 shadow-sm'
                    type='checkbox'
                    checked={value.checked}
                    onChange={() => handleToggleCheckbox(index)}
                  />
                  <p className={`ml-3 ${value.checked ? 'text-gray-500 line-through' : ''}`}>
                    {value.text}
                  </p>
                </div>
                <span
                  className='cursor-pointer mt-1'
                  onClick={() => deleteInput(index)}
                >
                  <BsXLg />
                  
                </span>
              </div>
            ))}
          </div>
          <div className='justify-start flex mt-5'>
            {values.length !== 0 ? (
              <Button onClick={deleteAll}>Delete All</Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

