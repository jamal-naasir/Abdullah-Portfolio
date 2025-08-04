const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Abdullah500dev" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/abdullah-javaid-a822b425a/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin-svgrepo-com.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/__abd_ullah__0?igsh=ZGw3eHBhbmt6eGt6" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Abdullah Javaid. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
