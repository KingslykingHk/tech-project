import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Header */}
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
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Home</a>
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

      {/* Hero Section */}
      <section className="relative h-screen pt-16 flex items-center justify-center bg-[url('/hardwoods.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Precision Crafted <span className="text-accent">Steel & Wood</span> Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Delivering innovation and quality in wood-based HVAC, interior, and infrastructure projects across India
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
           <button
  onClick={() => navigate('/Projects')}
  className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md font-medium text-lg transition duration-300 flex items-center justify-center"
>
  Explore Projects <ArrowRightIcon className="ml-2 h-5 w-5" />
</button>
            <button
      onClick={() => navigate('/contact')}
      className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-md font-medium text-lg transition duration-300"
    >
      Contact Us
    </button>
          </motion.div>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Building Trust Through Excellence</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver superior construction materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircleIcon className="h-10 w-10 text-primary" />,
                title: "Premium Materials",
                description: "We source only the highest quality steels and woods from certified suppliers with full traceability.",
                stats: "100% Quality Tested"
              },
              {
                icon: <TruckIcon className="h-10 w-10 text-primary" />,
                title: "Timely Delivery",
                description: "Our optimized logistics network ensures your materials arrive exactly when you need them.",
                stats: "98% On-Time Delivery"
              },
              {
                icon: <ShieldCheckIcon className="h-10 w-10 text-primary" />,
                title: "Quality Assurance",
                description: "Every product undergoes rigorous testing and inspection before leaving our facilities.",
                stats: "ISO 9001 Certified"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center mb-4">{feature.description}</p>
                <p className="text-sm font-semibold text-primary text-center">{feature.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Construction Materials</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully selected materials that meet the highest industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/steel.jpg",
                title: "Structural Steel Beams",
                description: "High-quality beams for all your structural needs",
                specs: ["ASTM A36 Standard", "Various Sizes Available", "Hot-Rolled"]
              },
              {
                image: "/plywood.jpg",
                title: "Premium Plywood",
                description: "Durable plywood for interior and exterior applications",
                specs: ["Marine Grade", "BWR Grade", "MR Grade"]
              },
              {
                image: "/steels rods.jpg",
                title: "Reinforcement Steel",
                description: "High-tensile strength rods for concrete reinforcement",
                specs: ["Fe 500 Grade", "IS 1786 Certified", "Corrosion Resistant"]
              },
              {
                image: "/hardwoods.jpg",
                title: "Hardwood Timber",
                description: "Beautiful and durable hardwood for all applications",
                specs: ["Teak & Sal Wood", "Kiln Dried", "Custom Sizing"]
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                 
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button  onClick={() => navigate('/Projects')}className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-flex items-center">
              View All Projects <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our valued clients say about our products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                quote: "Hosur Infratech provided the highest quality steel beams for our commercial project. Their materials were superior and delivery was on time.",
                name: "Thangavel",
                position: "Project Manager",
                image: "/client1.jpg"
              },
              {
                rating: 5,
                quote: "The plywood we ordered exceeded our expectations. Perfect for our high-end interior work. Will definitely order again!",
                name: "Sharma",
                position: "Interior Designer",
                image: "/client2.jpg"
              },
              {
                rating: 4,
                quote: "Great service and quality materials. The hardwood timber was exactly as described and perfect for our project.",
                name: "Vicky",
                position: "Architect",
                image: "/client3.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                 
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for premium steel and wood materials tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('/Contact')}className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md font-medium text-lg transition duration-300">
              Request Quote
            </button>
            <button onClick={() => navigate('/Contact')}className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium text-lg transition duration-300">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     
      
    </div>
  );
};


export default Home;