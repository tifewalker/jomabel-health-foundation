import React from "react";
import doctorImg from "../../assests/images/cheerful-ethnic-doctor-with-arms-crossed.jpg";
import secondImg from "../../assests/images/african-social-worker-taking-care-senior-woman.jpg";


const About = () => {
  return (
    <section className="py-20 px-4 bg-[#F4F6FC]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">

        {/* LEFT CONTENT TEXT */}
        <div className="lg:col-span-1">
          <p className="text-sm text-teal-700 font-semibold mb-3">
            Caring for You Starts with Who We Are
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            Investing In Your Health, <br /> Investing In Your Future
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            JoMabel Healthcare Foundation USA Inc. (JHF) is a Texas-based 
            nonprofit dedicated to expanding access to compassionate, 
            high-quality healthcare and vocational training in underserved 
            communities. Through our flagship projects in Ufuma, Anambra 
            State, Nigeria — the JoMabel Medical Center and the JoMabel Nursing 
            & Skill Acquisition Training Center — we are building a 
            16,000-square-meter campus that will transform healthcare delivery, 
            empower local families, and equip the next generation of medical 
            and technical professionals.
          </p>

          {/* CHECKLIST */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-teal-600 text-xl">✔</span>
              Emergency Medical Treatment
            </li>

            <li className="flex items-center gap-2">
              <span className="text-teal-600 text-xl">✔</span>
              Qualified Healthcare Professionals
            </li>

            <li className="flex items-center gap-2">
              <span className="text-teal-600 text-xl">✔</span>
              Community Health Outreach
            </li>
          </ul>
        </div>

        {/* MIDDLE LARGE IMAGE */}
        <div className="lg:col-span-1">
       <img
  src={doctorImg}
  className="rounded-xl shadow-lg w-full object-cover h-[400px]"
/>
        </div>

        {/* RIGHT SMALL IMAGE + TEXT */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <img
  src={secondImg}
  className="rounded-xl shadow-lg w-full h-[250px] object-cover"
/>

          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Our experienced professionals are here to provide care that’s not
            only expert but also truly personalized and empathetic.
          </p>

          <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
            Read more
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
