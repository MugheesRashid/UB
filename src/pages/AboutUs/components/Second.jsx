import React from "react";

function Second() {
  return (
    <div className="w-screen h-[120vh] rounded-tl-4xl rounded-br-4xl bg-[#111] px-[4.5vw] py-[5vh] text-[#f2f2f2]">
      <div className="top h-1/2 w-full flex flex-col justify-center gap-[2vh]">
        <h2 className="montserrat text-[4.6vw] font-semibold">Our Mission</h2>
        <div className="w-full h-full flex flex-row justify-center items-center">
          <div className="w-1/2 h-full bg-[url('/mission2.png')] bg-center bg-no-repeat bg-cover" />
          <p className="w-1/2 text-[1.2vw] leading-tight poppins font-light px-[5vw]">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the
            provision of engineering services, and trading in the eastern
            province of Saudi Arabia and beyond through the diversity and
            excellence of our people, value provided to our customers and our
            commitment to continuous improvement and development. with the
            slogan of Strength Focus to Deliver
          </p>
        </div>
      </div>
      <div className="bottom h-1/2 w-full gap-[2vh] flex flex-col justify-center items-end">
        <h2 className="montserrat text-[4.6vw] font-semibold">Our Vision</h2>
        <div className="w-full h-full flex flex-row-reverse justify-center items-center">
          <div className="w-1/2 h-full bg-[url('/vision2.png')] bg-center bg-no-repeat bg-cover" />
          <p className="w-1/2 text-[1.2vw] leading-tight tracking-wide poppins font-light px-[5vw]">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the
            provision of engineering services, and trading in the eastern
            province of Saudi Arabia and beyond through the diversity and
            excellence of our people, value provided to our customers and our
            commitment to continuous improvement and development. with the
            slogan of Strength Focus to Deliver
          </p>
        </div>
      </div>
    </div>
  );
}

export default Second;
