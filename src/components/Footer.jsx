const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hosur Infratech</h3>
            <p className="text-gray-400">Quality steels and woods for your construction needs.</p>
          </div>
       <div>
  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-2">
    {[
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ].map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          className="group relative inline-block text-gray-400 hover:text-white transition"
        >
          <span className="pb-1">{link.label}</span>
          {/* Underline animation */}
          <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </a>
      </li>
    ))}
  </ul>
</div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Steel Supply</li>
              <li className="text-gray-400">Wood Supply</li>
              <li className="text-gray-400">Construction Materials</li>
              <li className="text-gray-400">Custom Fabrication</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>#500/24,ESI Ring Road,Motham Agraharam,Hosur-635 126</p>
              <p>Hosur, Tamil Nadu</p>
              <p>Phone: +91 9945600097</p>
              <p>Email: hosurinfratech24@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hosur Infratech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;