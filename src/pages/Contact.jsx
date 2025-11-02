import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <header className="bg-white/90 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 hover:shadow-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-start">
          <Link
            to="/"
            className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/logo.png"
              alt="Hosur Infratech Logo"
              className="h-12 w-12 object-contain border-2 border-primary rounded-full p-1 shadow-md"
            />
            <span className="text-xl font-bold text-primary">
              Hosur Infratech
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6">
        {/* Header Section with Animation */}
        <div
          className={`text-center mb-16 pt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full transform hover:scale-x-150 transition-transform duration-500"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our expert team for
            quality construction materials and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold text-primary mb-8 pb-4 border-b-2 border-accent/50 inline-block">
                📍 Our Office
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: '📍',
                    title: 'Address',
                    content:
                      '#500/24, ESI Ring Road, Motham Agraharam, Hosur-635 126',
                    bg: 'from-purple-500/10 to-pink-500/10',
                    border: 'border-purple-200',
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    content: ['zoro: +91 9025076680', 'luffy: +91 9037839939'],
                    bg: 'from-green-500/10 to-blue-500/10',
                    border: 'border-green-200',
                  },
                  {
                    icon: '⏰',
                    title: 'Business Hours',
                    content: 'Monday - Sunday: 9:00 AM - 6:00 PM',
                    bg: 'from-orange-500/10 to-red-500/10',
                    border: 'border-orange-200',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start p-6 rounded-xl border ${item.border} bg-gradient-to-r ${item.bg} transform hover:scale-105 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-2">
                          {item.content.map((line, i) => (
                            <p
                              key={i}
                              className="text-gray-700 font-medium text-lg leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700 font-medium text-lg leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+91 9025076680"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📞
                </div>
                <p className="font-semibold">Call Now</p>
              </a>
              <a
                href="https://wa.me/919025076680"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <p className="font-semibold">WhatsApp</p>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Cards */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {[
              {
                title: '🚀 Quick Response',
                description:
                  'We guarantee quick responses to all your inquiries. Call us directly for immediate assistance.',
                features: [
                  'Instant callback',
                  '24/7 support',
                  'Expert guidance',
                ],
                gradient: 'from-blue-500 to-cyan-500',
                bg: 'from-blue-50 to-cyan-50',
                border: 'border-blue-200',
              },
              {
                title: '🛠️ Expert Consultation',
                description:
                  'Get free consultation for your construction projects from our experienced team.',
                features: [
                  'Free estimates',
                  'Material guidance',
                  'Project planning',
                ],
                gradient: 'from-orange-500 to-red-500',
                bg: 'from-orange-50 to-red-50',
                border: 'border-orange-200',
              },
              {
                title: '📦 Fast Delivery',
                description:
                  'Timely delivery of quality construction materials right to your site.',
                features: [
                  'On-time delivery',
                  'Quality assurance',
                  'Site delivery',
                ],
                gradient: 'from-green-500 to-emerald-500',
                bg: 'from-green-50 to-emerald-50',
                border: 'border-green-200',
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${card.bg} border ${card.border} p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
              >
                <div className="flex items-start mb-6">
                  <div
                    className={`text-3xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.title.split(' ')[0]}
                  </div>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                  >
                    {card.title.split(' ').slice(1).join(' ')}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {card.description}
                </p>
                <ul className="space-y-3">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-current rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl border border-primary/20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today and let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919025076680"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              📞 Call Now - +91 9025725618
            </a>
            <a
              href="tel:+919025076680"
              className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              📞 Alternate - +91 9025076680
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
