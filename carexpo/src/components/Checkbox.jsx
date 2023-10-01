import React from 'react'

function Checkbox({ label }) {
    return (
        <div className='flex items-center'>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-[#444cf7] text-blue-600 bg-[#444cf7] border-gray-300 rounded focus:ring-[#444cf7] dark:focus:ring-[#444cf7] dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600" />
            {label && <label for="disabled-checkbox" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">{label}</label>}
        </div>


    )
}

export default Checkbox
