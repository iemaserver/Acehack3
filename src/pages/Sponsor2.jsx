import React from "react";
import FancyButton from "../components/FancyButton";
import Icon from "../components/Icon";

import uem from "/assets/images/uem.png";
// import acm from "/assets/images/acm.jpeg";
// import acm from "/assets/images/acmlogo.png";
import acm from "/assets/images/acm-blu.png";
import iic from "/assets/images/iic.jfif";
import eduhub from "/assets/images/eduhub.png";
// /workspaces/Acehack3/public/assets/images/eduhub.png

import sponsorCollage from "/assets/images/newSponsors/Acehack_3_Sponsorship_Deck-trans.png";
import iba from "/assets/images/newSponsors/iba.png";
import rj from "/assets/images/newSponsors/rj.png";


const Sponsor = () => {
  return (
    <div
      id="sponsor"
      className="py-16 text-white z-20 relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 w-full scroll-smooth"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10">
          <span className="grad-text">Organized </span>By
        </h1>
        {/* <h1 className="text-5xl font-bold pb-10">
          Our <span className="grad-text">Associate </span>Partners
        </h1> */}
        <div className="flex flex-row flex-wrap justify-center w-4/5">
          {/* <Icon icon={rpLogo} height="h-28" /> */}
          {/* <Icon icon={uem} height="h-28" /> */}

          <a href="https://uem.edu.in/uem-jaipur/" target={"_blank"}>
            <Icon icon={uem} height="h-28 bg-white px-3 py-1" />
          </a>
          <a href="https://acm-jaipur.uem.edu.in/" target={"_blank"}>
            <Icon icon={acm} height="h-28 bg-white px-2" />
          </a>
          {/* <Icon icon={acm} height="h-28" /> */}
          <Icon icon={iic} height="h-28 p-2 bg-white" />
          {/* <Icon icon={eduhub} height="h-28" /> */}
          <a href="https://indiablockchainalliance.org/" target={"_blank"}>
            <Icon icon={rj} height="h-28 p-2 bg-white" />
          </a>
        </div>

        {/*Sponsors Collage */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Past Hackathon</span> Sponsors
        </h1>
        <div className="w-4/5 justify-center items-center">
          <img src={sponsorCollage}></img>
        </div>

        <p className="text-4xl font-extrabold pt-10">
          Become a{" "}
          <span className="underline-offset-8 underline decoration-violet-400">
            sponsor
          </span>{" "}
          of <b className="grad-text"> AceHack 4.0</b>{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/1zVtDsVrGbpHjZi5UXx9TMRDuGnDGHFw3/view?usp=sharing"
          target={"_blank"}
          className="mt-10 text-black"
        >
          <FancyButton data="Sponsor Us" />
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
