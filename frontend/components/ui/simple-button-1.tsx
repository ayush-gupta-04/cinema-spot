'use client'
import Link from "next/link";


export default function SimpleButton1({text ,url}:{text : string , url : string}){
    return (
        <Link 
            href={url}
            className="rounded-lg px-4 py-2 bg-gradient-to-r from-accent-red to-accent-yellow">
            {text}
        </Link>
    )
}