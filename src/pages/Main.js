import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry leaders and experienced professionals."
  },
  {
    title: "Flexible Learning",
    description: "Access our courses anytime, anywhere, and learn at your own pace."
  },
  {
    title: "Comprehensive Curriculum",
    description: "Our courses cover everything from the basics to advanced topics."
  },
  {
    title: "Career Support",
    description: "Get personalized career advice and job placement assistance."
  }
];

const Main = () => {
  return (
    <div>
      {/* Navbar */}
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

      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-5xl font-bold font-roboto mb-4">Welcome to Career Craft</h1>
            <p className="text-2xl mb-6 font-roboto font-semibold">We're revolutionizing education through skill development to lead the New India.</p>
            <Link to= "/login">
            <button className='bg-blue-700 text-white px-6 py-3 rounded-lg'>Get Started</button>

            </Link>
           
          </div>
          <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 px-10'>
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/21/22/10/white-male-1847742_640.jpg" 
              alt="Career" 
              className="lg:w-96 w-full lg:h-96 object-cover rounded border-none" 
              style={{ border: 'none' }} 
            />
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="text-center p-10 bg-white py-20">
        <h2 className="text-5xl font-bold mb-6 font-roboto">Why Choose Career Craft?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-stone-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 font-sans">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Login Section */}
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
};

export default Main;
