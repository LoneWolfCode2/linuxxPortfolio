import React from 'react'

function ListItem({ children, disablePadding }) {
    if (children?.type?.name === "ListItemButton") {
        return (
            <div className={`p-0 flex justify-start gap-4 my-2 items-center hover:bg-[#ffffff12]`}>{children}</div>
        )
    }
    return (
        <div className={`${disablePadding ? "p-0" : "p-4"} flex justify-start gap-4 my-2 items-center hover:bg-[#ffffff12]`}>{children}</div>
    )
}

export default ListItem