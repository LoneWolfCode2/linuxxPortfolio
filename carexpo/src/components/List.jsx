import React from 'react'

function List({ sx, subheader, children }) {
    return (
        <div className='bg-slate-500 rounded-sm text-white'>{children}</div>
    )
}

export default List