const About = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      {/* Fixed Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-start">
          <div className="flex items-center space-x-3">
            <img 
              src="logo.png" 
              alt="Hosur Infratech Logo" 
              className="h-10 w-10 object-contain border-2 border-primary rounded-full p-1"
            />
            <span className="text-xl font-bold text-primary hidden sm:block">Hosur Infratech</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 pt-16">
        {/* Hero Section */}
        <section className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
                  About Our Company
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Building Excellence in <span className="text-primary">Steel & Wood</span> Solutions
                </h1>
                <div className="h-1 w-20 bg-accent mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  Established in 2023, Hosur Infratech has rapidly become a trusted name in the construction materials industry, providing premium quality steels and woods to builders, contractors, and DIY enthusiasts across the region.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is to deliver exceptional construction materials with uncompromising quality, reliable delivery, and customer service that sets the industry standard.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/wood.jpg" 
                alt="About Hosur Infratech" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every interaction we have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We source only the finest materials and conduct rigorous quality checks to ensure our customers receive the best.",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "Honesty and transparency guide every business decision we make and every interaction with our customers.",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously explore new materials and technologies to provide better solutions for our customers.",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionaries behind Hosur Infratech's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "luffy",
                position: "Founder & CEO",
                image: "/luffy.png",
                bio: "With over 5 years in the construction materials industry, luffy brings unparalleled expertise in quality assurance and supply chain management."
              },
              {
                name: "shanks",
                position: "Founder & CEO",
                image: "/shanks.png",
                bio: "shanks innovative approach to material sourcing and customer relations has been instrumental in building our reputation for excellence."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      className="h-48 w-full md:w-48 object-cover md:h-full" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">{member.position}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="mt-2 text-gray-600">{member.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      {/* <a href="#" className="text-gray-400 hover:text-primary">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a> */}
                      {/* <a href="#" className="text-gray-400 hover:text-primary">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;