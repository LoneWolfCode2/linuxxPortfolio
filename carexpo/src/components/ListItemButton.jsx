import React from 'react'

function ListItemButton({ children, onClick, selected }) {
    const handleClick = (e) => {
        onClick(e);
    }
    return (
        <button onClick={(e) => handleClick(e)} className={`'cursor-pointer p-4 transition-all duration-700 w-full flex justify-start items-center gap-4 ${selected ? 'bg-[#444cf7]' : null}`}>{children}</button>
    )
}

export default ListItemButton