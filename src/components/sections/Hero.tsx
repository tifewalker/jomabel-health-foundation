import React from "react";
import {
  Heart,
  Stethoscope,
  Award,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";

import droneVideo from "../../assests/images/drone.mp4";
import floatingDoctor from "../../assests/images/young-african-american-male-doctor-white-coat-with-stethoscope-posed-outdoor.jpg";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN */}
            <div className="z-10 space-y-6">
              <p className="text-blue-900 font-semibold tracking-wide text-sm uppercase">
                JoMabel Healthcare Foundation USA Inc.
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Advanced Medicine.
                <br />
                <span className="text-blue-900">Compassionate Care.</span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Healing Lives. Empowering Communities. Transforming Futures.
                Our mission is to provide compassionate medical care and empower
                underserved communities with life-changing opportunities.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                  <Phone className="w-5 h-5" />
                  Call Us Today: 888-123-4097
                </button>

                <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                  Appointment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN – VIDEO WITH OVERLAY */}
            <div className="relative flex justify-center items-center">
              {/* Main video container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src={droneVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                
                {/* Optional: Subtle gradient overlay for better text readability if you add text on video */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating doctor image overlay */}
              <div className="absolute -bottom-10 -left-10 hidden lg:block">
                <img
                  src={floatingDoctor}
                  alt="Doctor"
                  className="w-48 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-72 h-72 bg-teal-100 rounded-full opacity-40 blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Curved transition to stats section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-900" 
             style={{clipPath: "ellipse(100% 100% at 50% 100%)"}}></div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Only Priority Is To Keep
              <br />
              You Healthy
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed flex items-center">
              Stay updated with the latest news from JoMabel, along with impactful
              medical developments and global healthcare trends. Designed to deliver
              premier and compassionate care.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-5xl font-bold text-teal-400 mb-2">16K+</div>
              <p className="text-gray-200 font-medium">Square Meters</p>
              <p className="text-gray-300 text-sm">Medical Campus</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-5xl font-bold text-teal-400 mb-2">100+</div>
              <p className="text-gray-200 font-medium">Healthcare</p>
              <p className="text-gray-300 text-sm">Professionals Trained</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-5xl font-bold text-teal-400 mb-2">5K+</div>
              <p className="text-gray-200 font-medium">Community Members</p>
              <p className="text-gray-300 text-sm">Served Annually</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
              <p className="text-gray-200 font-medium">Youth Empowered</p>
              <p className="text-gray-300 text-sm">Through Skills Training</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;