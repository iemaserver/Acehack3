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
import jaskaran from "/public/assets/images/mentors3/jaskaran.jpeg";
import manav from "/public/assets/images/mentors3/manav.jpeg";
import himani from "/public/assets/images/mentors3/himani.jpeg";
import pankaj from "/public/assets/images/mentors3/pankaj.jpeg";
import pranav from "/public/assets/images/mentors3/pranav.jpeg";
import maninder from "/public/assets/images/mentors3/Maninder.jpeg";
import raajessh from "/public/assets/images/mentors3/raajessh.jpg";
import rishabh from "/public/assets/images/mentors3/rishabh.jpeg";
import rishika from "/public/assets/images/mentors3/Rishika.jpeg";
import rohan from "/public/assets/images/mentors3/rohan.jpeg";
import shambhavi from "/public/assets/images/mentors3/shambhavi.jpeg";
import shivam from "/public/assets/images/mentors3/shivam.jpeg";
import srishti from "/public/assets/images/mentors3/srishti.jpeg";
import aryan from "/public/assets/images/mentors3/aryan.jpeg";
import shyamal from "/public/assets/images/mentors3/shyamal.jpeg";
import sounak from "/public/assets/images/mentors3/sounak.jpeg";
import sunchit from "/public/assets/images/mentors3/sunchit.jpeg";
import abhimanyu from "/public/assets/images/mentors3/abhimanyu.jpeg";


import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Speakers = () => {
  return (
    <div className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="grad-text font-bold text-5xl mb-10">Mentors & Judges</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member
            image={sunchit}
            name="Sunchit Dudeja"
            social={
              <a
                href="https://www.linkedin.com/in/sunchitdudeja/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={aryan}
            name="Aryan Singh"
            social={
              <a
                href="https://www.linkedin.com/in/singh1aryan/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor & Judge"
          />
          <Member
            image={abdallalit}
            name="Abdal Lalit"
            social={
              <a
                href="https://www.linkedin.com/in/abdal-lalit/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={abhinavrai}
            name="Abhinav Rai"
            social={
              <a
                href="https://www.linkedin.com/in/abhinav-rai-6a7119154/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={abhinav}
            name="Abhinav S."
            social={
              <a
                href="https://www.linkedin.com/in/abhinavsharma0/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={ayonroy}
            name="Ayon Roy"
            social={
              <a
                href="https://www.linkedin.com/in/ayon-roy/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={chhavi}
            name="Chhavi Garg"
            social={
              <a
                href="https://www.linkedin.com/in/chhaviGG/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={chinmay}
            name="Chinmay Pant"
            social={
              <a
                href="https://www.linkedin.com/in/chinmaypant/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={gurkirat}
            name="Gurkirat Singh"
            social={
              <a
                href="https://www.linkedin.com/in/gurkirat-singh-87901a169/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={jaskaran}
            name="Jaskaran Singh"
            social={
              <a
                href="https://www.linkedin.com/in/jaskaran-singh-9b3937169/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={manav}
            name="Manav Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/--manav-gupta--/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={himani}
            name="Himani Popli"
            social={
              <a
                href="https://www.linkedin.com/in/himani-popli-2391b4146/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={pankaj}
            name="Pankaj Prajapati"
            social={
              <a
                href="https://www.linkedin.com/in/pankaj-prajapati-668982163/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={pranav}
            name="Pranav Malik"
            social={
              <a
                href="https://www.linkedin.com/in/candidatepstx-95adfsdk23/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={rishabh}
            name="Rishabh Sharma"
            social={
              <a
                href="https://www.linkedin.com/in/therishabhsh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={rishika}
            name="Rishika Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/rishikagupta-rg/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={rohan}
            name="Rohan Kumar"
            social={
              <a
                href="https://www.linkedin.com/in/rohan-kumar-a65a87175/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={shivam}
            name="Shivam Goyal"
            social={
              <a
                href="https://www.linkedin.com/in/shivamgoyall/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={srishti}
            name="Srishti Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/srishti23/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          
          
          <Member
            image={shambhavi}
            name="Shambhavi Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/shambhavigupta03/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={shyamal}
            name="Shyamal Tripathi"
            // social={
            //   <a
            //     href="#"
            //     className="text-2xl text-gray-400 pb-1"
            //     target={"_blank"}
            //   >
            //     <FaLinkedin />
            //   </a>
            // }
            role="Hackquest"
          />
          <Member
            image={raajessh}
            name="Rajeesh Kaashyap"
            // social={
            //   <a
            //     href="#"
            //     className="text-2xl text-gray-400 pb-1"
            //     target={"_blank"}
            //   >
            //     <FaLinkedin />
            //   </a>
            // }
            role="Nordek"
          />
          <Member
            image={maninder}
            name="Maninder Singh"
            social={
              <a
                href="https://www.linkedin.com/in/manindersinghh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={abhimanyu}
            name="Abhimanyu Shekhawat"
            social={
              <a
                href="https://www.linkedin.com/in/abhimanyu-shekhawat-886896168/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={devendra}
            name="Devendra P."
            social={
              <a
                href="https://www.linkedin.com/in/devendra-parihar/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={sounak}
            name="Sounak Ghosh"
            social={
              <a
                href="https://www.linkedin.com/in/sounak-ghosh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          {/* <Member
            image={sounak}
            name="Saksham"
            social={
              <a
                href="https://www.linkedin.com/in/sounak-ghosh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Speakers;
