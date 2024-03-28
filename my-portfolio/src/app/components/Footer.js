const Footer = () => {
    return (
      <footer className="text-center bg-gray-900 text-white py-8">
        <div className="footer-content">
          <h3 className="text-2xl font-bold text-white">Farah Alsoqi</h3>
          <p className="max-w-md mx-auto mt-4 text-sm text-white">
            Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.
          </p>
          <ul className="socials flex justify-center mt-6">
            <li className="mx-2">
              <a href="https://www.linkedin.com/in/farah-alsoqi0/" className="text-gray-900 rounded-full p-2 flex items-center">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" className="w-6 h-6 mr-2" alt="Linkedin Logo" />
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://github.com/FarahAlsoqi" className="text-gray-900 rounded-full p-2 flex items-center">
                <img src="https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png" className="w-6 h-6 mr-2" alt="GitHub Logo" />
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom mt-6">
          <div className="footer-menu font-semibold">
            <ul className="f-menu inline-block flex justify-center space-x-16">
              <li><a href="#" className="text-sm text-gray-300">Home</a></li>
              <li><a href="#" className="text-sm text-gray-300">About</a></li>
              <li><a href="#" className="text-sm text-gray-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  