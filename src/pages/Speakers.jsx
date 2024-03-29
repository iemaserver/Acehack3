import React from "react";
import Member from "../components/Member";

import abdallalit from "/public/assets/images/mentors3/abdal lalit.jpeg";
import abhinavrai from "/public/assets/images/mentors3/abhinav rai.jpeg";
import abhinav from "/public/assets/images/mentors3/abhinav.jpeg";
import ayonroy from "/public/assets/images/mentors3/ayon roy.jpeg";
import chhavi from "/public/assets/images/mentors3/chhavi.jpeg";
import chinmay from "/public/assets/images/mentors3/chinmay.jpeg";
import devendra from "/public/assets/images/mentors3/devendra.jpeg";
import gurkirat from "/public/assets/images/mentors3/gurkirat.jpeg";
import himani from "/public/assets/images/mentors3/himani.jpeg";
import jaskaran from "/public/assets/images/mentors3/jaskaran.jpeg";
import manav from "/public/assets/images/mentors3/manav.jpeg";
import maninder from "/public/assets/images/mentors3/Maninder.jpeg";
import pankaj from "/public/assets/images/mentors3/pankaj.jpeg";
import pranav from "/public/assets/images/mentors3/pranav.jpeg";
import raajessh from "/public/assets/images/mentors3/raajessh.jpeg";
import rishabh from "/public/assets/images/mentors3/rishabh.jpeg";
import rishika from "/public/assets/images/mentors3/Rishika.jpeg";
import rohan from "/public/assets/images/mentors3/rohan.jpeg";
import shambhavi from "/public/assets/images/mentors3/shambhavi.jpeg";
import shivam from "/public/assets/images/mentors3/shivam.jpeg";
import shyamal from "/public/assets/images/mentors3/shyamal.jpeg";
import sounak from "/public/assets/images/mentors3/sounak.jpeg";
import sunchit from "/public/assets/images/mentors3/sunchit.jpeg";


import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Speakers = () => {
  return (
    <div className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="grad-text font-bold text-5xl mb-10">Past Mentors</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member
            image={abdallalit}
            name="Aryan Kaushik"
            social={
              <a
                href="https://www.linkedin.com/in/aryank21/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            role="Mentor, Judge"
          />
        </div>
      </section>
    </div>
  );
};

export default Speakers;
