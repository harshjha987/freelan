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
      {/* Header */}
      <header className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Welcome to Career Craft</h1>
          <p className="text-lg">Your Pathway to a Successful Career in Tech</p>
        </div>
      </header>

      {/* Features */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Career Craft?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Log In to Explore More</h2>
          <p className="text-lg mb-6">Access exclusive courses and resources by logging in.</p>
          <Link to={"/login"} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
         
            Log In
         

          </Link>
         
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Career Craft. All rights reserved.</p>
          
         <p className="text-blue-400 hover:underline">Privacy Policy </p> 
          <p className="text-blue-400 hover:underline ml-2">Terms of Service</p>
          
        </div>
      </footer>
    </div>
  );
};

export default Main;
