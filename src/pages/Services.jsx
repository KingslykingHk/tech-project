import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  CubeIcon,
  BeakerIcon,
  TruckIcon,
  LightBulbIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';


const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Steel Supply & Fabrication",
      description: "Comprehensive steel solutions including structural beams, rods, sheets, and custom fabricated components for industrial and commercial applications.",
      icon: <WrenchScrewdriverIcon className="h-10 w-10 text-primary" />,
      features: [
        "ASTM/IS certified materials",
        "Precision cutting & shaping",
        "Custom fabrication services",
        "Quality assurance testing"
      ]
    },
    {
      title: "Premium Wood Supply",
      description: "High-quality woods including plywood, hardwood, treated timber, and specialty woods for all construction and interior needs.",
      icon: <CubeIcon className="h-10 w-10 text-primary" />,
      features: [
        "Marine-grade plywood",
        "Kiln-dried hardwoods",
        "Termite-resistant treatments",
        "Custom sizing available"
      ]
    },
    {
      title: "Material Testing & Certification",
      description: "Comprehensive material testing services to ensure quality and compliance with international industry standards.",
      icon: <BeakerIcon className="h-10 w-10 text-primary" />,
      features: [
        "Tensile strength testing",
        "Durability assessments",
        "Quality certification",
        "Compliance verification"
      ]
    },
    {
      title: "Custom Fabrication Services",
      description: "Bespoke steel fabrication tailored to your exact project specifications and architectural requirements.",
      icon: <BuildingLibraryIcon className="h-10 w-10 text-primary" />,
      features: [
        "CAD design support",
        "Precision engineering",
        "On-site measurement",
        "Project-specific solutions"
      ]
    },
    {
      title: "Logistics & Supply Chain",
      description: "Reliable transportation and inventory management solutions for just-in-time material delivery.",
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      features: [
        "Fleet of specialized vehicles",
        "Nationwide distribution",
        "Inventory management",
        "Timely delivery guarantee"
      ]
    },
    {
      title: "Technical Consultation",
      description: "Expert advice on material selection, structural design, and optimal usage for project success.",
      icon: <LightBulbIcon className="h-10 w-10 text-primary" />,
      features: [
        "Material selection guidance",
        "Structural recommendations",
        "Cost optimization",
        "Project planning support"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Fixed Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="logo.png" 
              alt="Hosur Infratech Logo" 
              className="h-12 w-12 object-contain border-2 border-primary rounded-full p-1"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">Hosur Infratech</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Services</a>
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Products</a>
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Projects</a>
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">About</a>
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Contact</a>
          </nav>
          <button className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-medium transition duration-300">
            Get Quote
          </button>
        </div>
      </header>

      <div className="pt-24 pb-16 container mx-auto px-6">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            OUR OFFERINGS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-primary">Construction Solutions</span>
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From material supply to technical consultation, we provide end-to-end services for your steel and wood construction needs
          </p>
        </motion.section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
           
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary-dark text-white p-12 rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Solutions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our experts can develop tailored material solutions for your unique project requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button  onClick={() => navigate('/Contact')}className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
                Request Consultation
              </button>
              <button  onClick={() => navigate('/Contact')} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 border border-white/30">
                Call Our Experts
              </button>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <section className="mt-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver Excellence
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure quality, reliability, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                description: "We thoroughly understand your project needs and specifications"
              },
              {
                step: "02",
                title: "Material Selection",
                description: "Our experts recommend optimal materials for your requirements"
              },
              {
                step: "03",
                title: "Quality Assurance",
                description: "Rigorous testing and inspection of all materials"
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "Timely delivery with ongoing technical support"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

     
    </div>
  );
};

export default Services;