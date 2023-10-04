import React, { useState } from 'react'

function Tooltip({ children, title }) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='relative p-3 w-fit' onMouseLeave={() => setIsVisible(false)} >
            <div onMouseEnter={() => setIsVisible(true)} >{children}</div>
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} bg-slate-600 text-white p-1 rounded-md whitespace-nowrap w-fit absolute -bottom-7 right-0 left-0`}>{title}</div>
        </div >
    )
}

export default Tooltip