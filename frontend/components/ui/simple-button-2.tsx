'use client'

import Link from "next/link"

export default function SimpleButton2({text ,url}:{text : string , url : string}){
    return (
        <Link
            href={url} 
            className="rounded-lg px-4 py-2 ring-2 outline-hidden ring-accent-red hover:bg-accent-rose text-accent-rose hover:text-white cursor-pointer">
            {text}
        </Link>
    )
}