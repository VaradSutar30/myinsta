import Link from 'next/link'
import React from 'react'

const SidebarButton = ({ icon, text, link }) => {
    return (
        <Link href={link} className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
            {icon}
            <span>{text}</span>
        </Link>
    )
}

export default SidebarButton