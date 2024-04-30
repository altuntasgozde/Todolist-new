import React from 'react'

export const Button = ({children, onClick}) => {
  return (
    <>
        <button onClick={onClick} className="py-3 px-4 ml-2 inline-flex w-1/3 items-center gap-x-2 text-sm font-semibold rounded-lg border justify-center border-transparent bg-black text-center text-white  disabled:opacity-50 disabled:pointer-events-none">
            {children}
        </button>
    </>
  )
}
