import React from 'react'

function IconButton({ children }) {
    return (
        <div className="p-2 w-fit rounded-full active:bg-white hover:cursor-pointer shadow-md hover:shadow-none transition-all shadow-[#ffffff38] hover:bg-slate-500">
            <div className='w-4 h-4 text-white'>{children}</div>
        </div>
    )
}

export default IconButton