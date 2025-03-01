
const Footer = () => {
  return (
    <footer 
      
      className="bg-black text-white py-8"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <p>Innovative solutions for modern challenges.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p>Email: info@mybrand.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {["Twitter", "LinkedIn", "GitHub"].map(platform => (
              <a 
                key={platform} 
                href="#" 
                className="hover:text-blue-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        © 2025 MyBrand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;