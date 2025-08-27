'use client'
import Link from "next/link"
import Logo from "../icons/logo"
import SimpleButton from "../ui/simple-button-1"

export default function Appbar(){
    return(
        <div className="z-20 sticky top-0 h-20 w-full bg-base-gray-2 flex flex-row justify-between border-border border px-40 items-center">
            <div className="flex gap-2">
                <Logo></Logo>
                <div className="text-2xl font-semibold self-center bg-gradient-to-r bg-clip-text from-accent-red to-accent-yellow text-transparent">
                    CinemaSpot
                </div>  
            </div>
            <div className="flex gap-6">
                <Link
                    href={"/auth/login"} 
                    className="text-xl font-semibold self-center bg-gradient-to-r bg-clip-text from-accent-red to-accent-yellow text-transparent">
                    Login
                </Link>
                <SimpleButton text="Signup" url="/auth/signup"></SimpleButton>
            </div>
        </div>
    )
}
