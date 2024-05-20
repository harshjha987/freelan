function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
        <footer className=" text-white text-center p-4">
        <div className="mb-2">
          <a href="#" className="text-white hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:underline mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:underline mx-2">Contact Us</a>
        </div>
        <div className="mb-2">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" className="inline-block h-6 w-6 mx-1" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" className="inline-block h-6 w-6 mx-1" /></a>
          <a href="#"><img src="linkedinicon.png" alt="LinkedIn" className="inline-block h-6 w-6 mx-1" /></a>
        </div>
        <p>&copy; 2024 Career Craft. All rights reserved.</p>
      </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
