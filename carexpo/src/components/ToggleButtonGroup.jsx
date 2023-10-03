import React from 'react'

function ToggleButtonGroup({ children, value, onChange, aria_label, }) {
    const handleChange = (e, newItem) => {
        onChange(newItem)
    }
    return (
        <div className='flex text-white'>{
            children.map((child) => {
                return (
                    <div onClick={(e) => handleChange(e, child.props.value)} value={child.props.value} className={`${value === child.props.value ? "bg-[#4447cf]" : null} p-2 first:rounded-l-md bg-slate-500 last:rounded-r-md active:bg-slate-300 hover:bg-slate-400 cursor-pointer`}>{child}</div>
                )
            })
        }</div >
    )
}

export default ToggleButtonGroup