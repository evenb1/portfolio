const Footer = () => {
    return (
      <footer className="bg-black py-6 text-white">
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-20">
          {/* Social Links */}
          
          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Russom. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  