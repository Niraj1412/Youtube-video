
import React from "react";

function Page() {
  return (
    <div>
    <div className="overflow-hidden">
            <marquee behavior="scroll" direction="left" scrollamount="8" >
                <h1 className="text-[19px]">
                    🎉 <span className="text-[#9A391D] text-[20px] font-bold"> Admission Open </span> for the coming <span className="text-[#9A391D] text-[20px] font-bold">2024-25</span> session 🎉
                </h1>
            </marquee>
        </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/J---aiyznGQ?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Page;
