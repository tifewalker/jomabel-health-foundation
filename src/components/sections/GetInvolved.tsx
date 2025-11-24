import React from "react";
import { HeartPulse, Stethoscope, HandHeart, Users, Activity, Syringe } from "lucide-react"; 

const GetInvolved = () => {
  return (
    <section className="py-20 px-4 bg-[#F5F7FF]">
      <div className="max-w-6xl mx-auto">

        {/* TOP HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm text-blue-600 font-semibold">
            Trusted Source for Community Impact
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get Involved & Support the Mission
          </h2>
          <p className="text-gray-600 mt-3 text-sm max-w-2xl mx-auto">
            Every contribution helps build a healthier future for underserved families. 
            Your generosity fuels hope, care, and transformation.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* LEFT FEATURES */}
          <div className="space-y-10">
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <HandHeart className="w-5 h-5 text-teal-600" />
                <h3 className="font-semibold text-gray-900">Make a Donation</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Support free and subsidized healthcare, supplies, and community outreach.
              </p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <Syringe className="w-5 h-5 text-blue-700" />
                <h3 className="font-semibold text-gray-900">Sponsor Equipment</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Provide hospital beds, diagnostic tools, lab equipment, and more.
              </p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <Users className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Volunteer Services</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Join medical missions or serve in U.S.-based support efforts.
              </p>
            </div>
          </div>

          {/* CENTER ANIMATED CIRCLE */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 flex items-center justify-center">

              {/* Outer rotating glow */}
              <div className="absolute inset-0 rounded-full border-4 border-teal-400 opacity-40 animate-spin-slow" />

              {/* Middle glow ring */}
              <div className="absolute w-60 h-60 rounded-full border-4 border-blue-400 opacity-50 animate-pulse" />

              {/* Inner solid circle */}
              <div className="w-40 h-40 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full shadow-lg animate-pulse-slow" />
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <HeartPulse className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-gray-900">Become a Monthly Partner</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Sustain medical staff, patient care, and youth training programs.
              </p>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-gray-900">Pharmacy & Supplies Support</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Help provide medications, emergency kits, and maternal care items.
              </p>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Stethoscope className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Community Health Outreach</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Fund awareness campaigns, free screenings, and preventive programs.
              </p>
            </div>
          </div>
        </div>

      {/* BUTTONS + TEXT INLINE BOX — STYLED LIKE IMAGE */}
<div className="mt-20 bg-[#0E1A68] text-white rounded-2xl p-12 relative overflow-hidden">

  {/* Decorative dotted pattern on the right */}
  <div
    className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "12px 12px",
    }}
  />

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

    {/* LEFT SIDE — YOUR ORIGINAL TEXT */}
    <div className="md:w-1/2">
      <h3 className="text-3xl font-bold mb-4">
        Every Gift Creates Real Impact
      </h3>

      <p className="text-gray-200 leading-relaxed">
        Your support helps build medical facilities, supply essential healthcare,
        and deliver hope to underserved communities in Nigeria.
      </p>

      <div className="mt-8 text-gray-200">
        <p className="font-semibold mb-1">Mail a Check:</p>
        <p>
          JoMabel Healthcare Foundation USA <br />
          725 Pinnacle View Drive <br />
          Georgetown, TX 78628
        </p>
      </div>
    </div>

    {/* RIGHT SIDE — YOUR BUTTONS */}
    <div className="flex flex-col gap-4 w-full md:w-1/3">

      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow">
        Donate Online
      </button>

      <button className="w-full bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow">
        Become a Monthly Partner
      </button>

    </div>
  </div>
</div>


      </div>

      {/* Animations */}
      <style>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(0.95); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default GetInvolved;
