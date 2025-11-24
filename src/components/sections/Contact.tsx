import React from "react";
import { Mail, Phone, MapPin, Building, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#f6f6ff] py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.458825900137!2d-0.1195436!3d51.5032979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce5f3c7f6f%3A0xfee0b2e6900b8f58!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            className="w-full h-64 rounded-lg border"
            loading="lazy"
          ></iframe>

          {/* INFO CARD */}
          <div className="bg-blue-900 text-white rounded-xl p-8 space-y-6 shadow-lg">

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-teal-300 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">Contact Us</h3>
                <p className="text-gray-300">info@jomabelhealth.org</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="text-teal-300 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">U.S. Headquarters</h3>
                <p className="text-gray-300">Georgetown, Texas</p>
              </div>
            </div>

            {/* Project Location */}
            <div className="flex items-start gap-4">
              <Building className="text-teal-300 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">Project Location</h3>
                <p className="text-gray-300">Ufuma, Anambra State, Nigeria</p>
              </div>
            </div>

            {/* Work Hours */}
            <div className="flex items-start gap-4">
              <Clock className="text-teal-300 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">Work Time Information</h3>
                <p className="text-gray-300">Mon – Sat: 7:00am – 10:00pm</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-sm text-teal-600 font-semibold mb-1">
            We’d love to hear from you
          </p>
          <h2 className="text-3xl font-bold mb-6">Let’s Talk With Us!</h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full p-3 rounded-lg border"
              />
              <input
                type="email"
                placeholder="Email address*"
                className="w-full p-3 rounded-lg border"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number*"
                className="w-full p-3 rounded-lg border"
              />
              <select className="w-full p-3 rounded-lg border">
                <option>Type of Appointment*</option>
                <option>General Inquiry</option>
                <option>Partnership</option>
                <option>Donation Request</option>
                <option>Volunteer Program</option>
              </select>
            </div>

            <textarea
  placeholder="Message..."
  rows={5}
  className="w-full p-3 rounded-lg border"
></textarea>


            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm">Agree to our terms and conditions</p>
            </div>

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer text like your old design */}
      <div className="mt-12 text-center">
        <p className="text-2xl font-semibold text-teal-500 mb-2">
          Join us. Stand with us.
        </p>
        <p className="text-xl text-gray-600">Together, we can save lives.</p>
      </div>
    </section>
  );
};

export default Contact;
