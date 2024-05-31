import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white text-stone-700 p-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src='/icon.jpg' className='h-14 w-14' alt="Logo" />
        <Link to="/" className="text-3xl font-semibold font-roboto text-gray-900">Career Craft</Link>
      </div>
      <div className="flex space-x-4 text-[18px] font-semibold">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </div>
  </nav>
);

const About = () => (
  <div>
    <Navbar />
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center font-roboto mb-8">About Us</h1>
        <p className="text-lg text-gray-700 leading-8 mb-4">
          Welcome to <span className="font-bold">Career Craft</span>, where we're revolutionizing education through skill development to lead the New India.
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-4">
          Our team of passionate educators and innovators is committed to making learning accessible, personalized, and impactful for individuals worldwide. With a focus on empowerment and innovation, we're dedicated to bridging the gap between ambition and achievement.
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-4">
          Join us on this transformative journey as we unlock the potential of every learner, shaping a brighter future through education.
        </p>
        
      </div>
    </div>
    <section className="bg-gray-800 text-white text-center p-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
        <p className="text-xl mb-6">Join Career Craft today and take the first step towards your future.</p>
        <Link to="/login" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Sign Up Now</Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Career Craft. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
  </div>
);

export default About;
