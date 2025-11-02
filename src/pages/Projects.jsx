import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  GlobeAltIcon,
  Cog6ToothIcon // ✅ Optional: Replacing FactoryIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "Commercial Complex, Bangalore",
      description: "Supplied structural steel and reinforcement materials for this 20-story commercial complex in the heart of Bangalore's business district.",
      image: "/buildings.jpg",
      tags: ["Steel", "Commercial"],
    },
    {
      title: "Luxury Villa Project, Chennai",
      description: "Provided premium hardwood and plywood for interior work in this high-end residential project featuring custom woodwork throughout.",
      image: "/luxury villa.jpg",
      tags: ["Wood", "Residential"],
     
    },
    {
      title: "Industrial Warehouse, Hosur",
      description: "Complete steel structure supply and fabrication for this large-scale industrial facility with specialized loading requirements.",
      image: "/warehouse.jpg",
      tags: ["Steel", "Industrial"],
     
    },
    {
      title: "Resort Development, Ooty",
      description: "Supplied treated timber and specialty woods for this eco-friendly resort construction blending modern design with natural elements.",
      image: "/resort.jpg",
      tags: ["Wood", "Resort"],
      
    },
    {
      title: "Bridge Construction, Coimbatore",
      description: "Provided high-tensile steel components for this major infrastructure project connecting key transportation routes.",
      image: "/bridge.jpg",
      tags: ["Steel", "Infrastructure"],
      
    },
    {
      title: "Corporate Office Interior, Hyderabad",
      description: "Premium plywood and veneers for this modern office interior project featuring innovative workspace designs.",
      image: "/office.jpg",
      tags: ["Wood", "Interior"],
      stats: [
        { label: "Materials", value: "Marine Grade Ply" },
        { label: "Area", value: "85,000 sq.ft" },
        { label: "Scope", value: "Complete Interior" }
      ]
    }
  ];

 const projectTypes = [
  {
    name: "Commercial",
    icon: <BuildingOfficeIcon className="h-8 w-8" />,
    
  },
  {
    name: "Residential",
    icon: <HomeIcon className="h-8 w-8" />,
  
  },
  {
    name: "Industrial",
    icon: <Cog6ToothIcon className="h-8 w-8" />,
  
  },
  {
    name: "Hospitality",
    icon: <GlobeAltIcon className="h-8 w-8" />,
   
  },
  {
    name: "Infrastructure",
    icon: <BuildingOfficeIcon className="h-8 w-8" />, // reused valid icon
   
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
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Projects</a>
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Services</a>
            <a href="#" className="text-gray-800 hover:text-primary font-medium transition duration-300">Products</a>
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
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building <span className="text-primary">Success Stories</span>
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects showcasing quality materials in diverse construction applications
          </p>
        </motion.section>

        {/* Project Types */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {projectTypes.map((type, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md border border-gray-100 text-center transition duration-300"
              >
                <div className="text-primary mb-2 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                <p className="text-sm text-gray-500">{type.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                 
                  
                
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
       
          
      </div>

     
    </div>
  );
};

export default Projects;