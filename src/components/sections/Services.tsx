import React from 'react';
import { Activity, Baby, Syringe, Award } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-blue-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-teal-400 font-semibold mb-2">Healthcare you can trust</div>
          <h2 className="text-4xl font-bold mb-4">We Cover A Big Variety Of Medical Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We provide world-class healthcare services across multiple specialties, ensuring comprehensive care for every member of your family in underserved communities.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-900 p-6 rounded-2xl hover:bg-blue-800 transition cursor-pointer">
            <Activity className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Primary Care</h3>
            <p className="text-gray-300 text-sm mb-4">Comprehensive general healthcare services for all ages including preventive care and chronic disease management.</p>
            <a href="#" className="text-teal-400 text-sm font-semibold hover:underline">Learn More →</a>
          </div>
          <div className="bg-blue-900 p-6 rounded-2xl hover:bg-blue-800 transition cursor-pointer">
            <Baby className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Maternal Health</h3>
            <p className="text-gray-300 text-sm mb-4">Prenatal care, safe delivery services, and postnatal support for mothers and newborns.</p>
            <a href="#" className="text-teal-400 text-sm font-semibold hover:underline">Learn More →</a>
          </div>
          <div className="bg-blue-900 p-6 rounded-2xl hover:bg-blue-800 transition cursor-pointer">
            <Syringe className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Immunization</h3>
            <p className="text-gray-300 text-sm mb-4">Essential vaccination programs to protect children and adults from preventable diseases.</p>
            <a href="#" className="text-teal-400 text-sm font-semibold hover:underline">Learn More →</a>
          </div>
          <div className="bg-blue-900 p-6 rounded-2xl hover:bg-blue-800 transition cursor-pointer">
            <Award className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Skills Training</h3>
            <p className="text-gray-300 text-sm mb-4">Nursing and healthcare professional training programs to empower local communities.</p>
            <a href="#" className="text-teal-400 text-sm font-semibold hover:underline">Learn More →</a>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;