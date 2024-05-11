
import React from "react";

function Page() {
  return (
    <div>
    <div className="overflow-hidden">
            <marquee behavior="scroll" direction="left" scrollamount="8" >
                <h1 className="text-[19px]">
                    🎉 <span className="text-[#9A391D] text-[20px] font-bold"> das Open </span> for the coming <span className="text-[#9A391D] text-[20px] font-bold">2024-25</span> session 🎉
                </h1>
            </marquee>
        </div>
     <div style={{ width: '560px', height: '315px', float: 'none', clear: 'both', margin: '2px auto' }}>
        <embed
          src="https://www.youtube.com/embed/J---aiyznGQ?autohide=1&autoplay=1"
          wmode="transparent"
          type="video/mp4"
          width="100%" height="100%"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Keyboard Cat"
        />
      </div>

      
    </div>
  );
}

export default Page;
