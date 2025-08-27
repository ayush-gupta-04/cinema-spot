'use client'
import Appbar from "@/components/non-ui/appbar";
import SimpleButton1 from "@/components/ui/simple-button-1";
import SimpleButton2 from "@/components/ui/simple-button-2";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-base-background ">
      <Appbar></Appbar>
      <Screen></Screen>
      <NowShowing></NowShowing>
      <HowItWorks></HowItWorks>
    </div>
  );
}


function NowShowing(){
  return (
    <div className="h-screen flex flex-row justify-center items-center bg-base-gray-2">
      now showing.
    </div>
  )
}

function Screen(){
  return(
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-base-purple">
        <div className="flex flex-col text-7xl font-bold text-center">
          <span className="text-white">Your Next</span>
          <div className="bg-gradient-to-r bg-clip-text text-transparent from-accent-red to-accent-yellow">Movie Experience</div>
          <span className="text-white">Starts Here</span>
        </div>
        <div className="text-gray-400 text-xl">Book tickets for the latest blockbusters, find showtimes near you, and enjoy the magic of cinema.</div>
        <div className="flex gap-4">
          <SimpleButton1 text="Book Now" url = "/booknow"></SimpleButton1>
          <SimpleButton2 text="Explore Movies" url="/movies"></SimpleButton2>
        </div>
        <div></div>
    </div>
  )
}


function HowItWorks(){
  return(
    <div className="h-[60vh] bg-base-gray-1 py-10 px-20">
      <div className="text-center">
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-accent-red to-accent-yellow text-5xl font-bold">How It Works</span>
          <div className="text-gray-400">Book your movie tickets in just a few simple steps</div>
      </div>

      <div>
            
      </div>
    </div>
  )
}