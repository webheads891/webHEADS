src/App.jsx
This is the main component containing all the application's pages.

import { useState, useEffect } from 'react';
import {
  MessageSquareCode,
  Globe,
  Menu,
  X,
  Send,
  Mail,
  Phone,
  Check,
  ShoppingCart,
  FileText,
  Presentation,
  CalendarDays,
  LineChart,
  Zap,
  CreditCard,
  Building,
  Rocket,
  Code,
  Users,
} from 'lucide-react';

// --- Global Constants for Contact Information ---
const CONTACT_INFO = {
  email: 'webheads891@gmail.com',
  phone: '7309082302',
  discord: 'https://discord.gg/kf73phDQ'
};

// Main App component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true); // New state to track logo loading

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage />;
      case 'inquire':
        return <InquirePage />;
      case 'store':
        return <StorePage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans relative overflow-hidden text-gray-100">
      {/* Custom CSS for the animated background */}
      <style>
        {`
          @keyframes pulseGradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-bg {
            background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.3) 0%, rgba(55, 65, 81, 0) 40%),
                        radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.3) 0%, rgba(55, 65, 81, 0) 40%),
                        radial-gradient(circle at 50% 50%, rgba(30, 200, 250, 0.2) 0%, rgba(55, 65, 81, 0) 50%);
            background-size: 200% 200%;
            animation: pulseGradient 30s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="fixed inset-0 bg-gray-950 animated-bg"></div>

      <nav className="relative z-50 top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Conditional rendering for the logo or a fallback icon, with rounded-full class added */}
            {logoLoaded ? (
              <img
                src="https://cdn.discordapp.com/attachments/1280157299322785925/1404869750533652611/IMG_8919.png?ex=689d6b29&is=689c19a9&hm=24c76c1c761f7425a8bf1687e055bdfe6269a38857b58d16becaca32f1e90163&"
                alt="Webheads Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
                onError={() => {
                  console.error("Failed to load the logo image. Please check the image URL.");
                  setLogoLoaded(false);
                }}
                onLoad={() => setLogoLoaded(true)}
              />
            ) : (
              <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-gray-800 rounded-full">
                <Globe
                  size={24}
                  className="text-purple-400"
                  aria-label="Webheads Logo Placeholder"
                />
              </div>
            )}
            <span
              className="text-2xl font-bold text-gray-50 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              webHEADS
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <button
              onClick={() => setCurrentPage('home')}
              className={`hover:text-purple-400 transition-colors duration-300 ${
                currentPage === 'home' ? 'text-purple-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className={`hover:text-purple-400 transition-colors duration-300 ${
                currentPage === 'services' ? 'text-purple-400' : ''
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setCurrentPage('inquire')}
              className={`hover:text-purple-400 transition-colors duration-300 ${
                currentPage === 'inquire' ? 'text-purple-400' : ''
              }`}
            >
              Inquire
            </button>
            <button
              onClick={() => setCurrentPage('store')}
              className={`hover:text-purple-400 transition-colors duration-300 ${
                currentPage === 'store' ? 'text-purple-400' : ''
              }`}
            >
              Store
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-purple-400 transition-colors duration-300 ${
                currentPage === 'contact' ? 'text-purple-400' : ''
              }`}
            >
              Contact
            </button>
          </div>
          <button
            className="md:hidden text-gray-100"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isNavOpen && (
        <div className="relative z-40 bg-gray-900 bg-opacity-95 backdrop-blur-lg md:hidden shadow-xl p-6 transition-all duration-300 ease-in-out transform">
          <ul className="flex flex-col space-y-4 text-center text-xl">
            <li>
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setIsNavOpen(false);
                }}
                className="block w-full py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage('services');
                  setIsNavOpen(false);
                }}
                className="block w-full py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage('inquire');
                  setIsNavOpen(false);
                }}
                className="block w-full py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Inquire
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage('store');
                  setIsNavOpen(false);
                }}
                className="block w-full py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Store
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsNavOpen(false);
                }}
                className="block w-full py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}

      <main className="relative z-10 pt-24 pb-12 bg-gray-950 bg-opacity-70 backdrop-blur-sm min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

// HomePage component
const HomePage = ({ setCurrentPage }) => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] text-center animate-fadeIn">
    {/* Hero Section */}
    <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Welcome to <span className="text-purple-400">webHEADS</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 mx-auto">
          Your one-stop shop for custom code, professional websites, and unique
          Discord bots. We bring your digital ideas to life.
        </p>
        <button
          onClick={() => setCurrentPage('services')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          Explore Our Services
        </button>
    </div>

    {/* Why Choose Us? Section - a card-based section */}
    <div className="w-full mt-12 pt-12 border-t border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Why Choose <span className="text-purple-400">Us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-500">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
                    <Rocket size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Innovative Solutions
                </h3>
                <p className="text-gray-300">
                    We deliver modern, high-performance solutions tailored to your unique goals.
                </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-500">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
                    <Code size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Quality Code
                </h3>
                <p className="text-gray-300">
                    Our code is clean, efficient, and well-documented, ensuring long-term reliability.
                </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-500">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
                    <Users size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Collaborative Approach
                </h3>
                <p className="text-gray-300">
                    We work closely with you every step of the way to ensure your vision is realized.
                </p>
            </div>
        </div>
    </div>
    
    {/* Featured Services Section - a new section to highlight key offerings */}
    <div className="w-full mt-12 pt-12 border-t border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Our <span className="text-purple-400">Featured Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Service Card 1: Custom Websites & Code */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-500">
                <div className="flex items-center justify-center w-16 h-16 bg-sky-600 rounded-full mb-6 mx-auto">
                    <Globe size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Custom Websites
                </h3>
                <p className="text-gray-300 mb-4">
                    Professional, responsive websites built from the ground up to fit your brand.
                </p>
                <button
                    onClick={() => setCurrentPage('services')}
                    className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                    Learn More
                </button>
            </div>
            
            {/* Featured Service Card 2: Discord Bots */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-500">
                <div className="flex items-center justify-center w-16 h-16 bg-sky-600 rounded-full mb-6 mx-auto">
                    <svg className="h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.996 0.052C20.846 0.052 19.674 0.692 18.524 1.332C17.374 1.972 16.202 2.612 15.03 3.252C14.15 2.532 13.064 2.172 11.956 2.172C10.848 2.172 9.762 2.532 8.882 3.252C7.71 2.612 6.538 1.972 5.388 1.332C4.238 0.692 3.066 0.052 1.916 0.052C0.822 0.052 0.003 0.829 0.003 1.83C0.003 2.052 0.051 2.274 0.125 2.476C2.261 5.372 4.412 8.272 6.561 11.168C6.985 11.75 7.424 12.33 7.842 12.912C8.324 13.568 8.784 14.236 9.244 14.904C9.406 15.112 9.566 15.316 9.728 15.524C9.728 15.652 9.728 15.772 9.728 15.9C9.728 17.518 9.544 19.122 9.406 20.73C9.336 21.364 9.324 22.008 9.404 22.646C9.554 23.642 10.372 23.956 11.238 23.474C11.59 23.272 11.942 23.07 12.294 22.868C12.986 22.502 13.684 22.138 14.376 21.774C15.068 21.41 15.766 21.046 16.458 20.682C17.15 20.318 17.848 19.954 18.54 19.59C19.232 19.226 19.93 18.862 20.622 18.498C21.314 18.134 22.012 17.77 22.704 17.406C23.064 17.214 23.24 16.992 23.364 16.714C23.514 16.216 23.55 15.688 23.448 15.158C23.374 14.75 23.264 14.35 23.144 13.948C22.616 12.35 21.848 10.828 20.898 9.38C20.51 8.796 20.104 8.22 19.716 7.644C19.328 7.068 18.922 6.492 18.534 5.916C18.146 5.34 17.758 4.764 17.37 4.188C17.068 3.738 16.766 3.288 16.464 2.838C15.82 1.834 15.052 0.89 14.152 0.052C13.252 -0.786 12.186 -0.198 11.24 -0.056C10.294 0.086 9.348 0.228 8.402 0.37C7.456 0.512 6.51 0.654 5.564 0.796C4.852 0.89 4.14 0.984 3.428 1.078C2.928 1.144 2.428 1.208 1.928 1.272C1.528 1.326 1.128 1.38 0.728 1.434C0.45 1.472 0.174 1.51 0.003 1.55C-0.125 1.63 -0.183 1.76 -0.147 1.91C-0.111 2.06 0.003 2.19 0.125 2.27Z"/>
          </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Discord Bots & Servers
                </h3>
                <p className="text-gray-300 mb-4">
                    Level up your community with custom bots and professionally configured servers.
                </p>
                <button
                    onClick={() => setCurrentPage('services')}
                    className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                    Learn More
                </button>
            </div>
        </div>
    </div>
    
    {/* Call to Action Section - A new section to drive inquiries */}
    <div className="w-full mt-12 pt-12 pb-12 border-t border-gray-700">
        <div className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-2xl border border-gray-700 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Bring Your Idea to Life?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you need a custom website, a powerful Discord bot, or a unique code solution, we're here to help you get started.
            </p>
            <button
                onClick={() => setCurrentPage('inquire')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center mx-auto transition-transform duration-300 transform hover:scale-105"
            >
                <Zap size={20} className="mr-2" />
                Start Your Project Today
            </button>
        </div>
    </div>
  </div>
);

// ServicesPage component
const ServicesPage = () => (
  <div id="services" className="min-h-[calc(100vh-140px)] animate-fadeIn">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
      Our <span className="text-purple-400">Services</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service Card 1: Custom Websites & Code */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-purple-500">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
          <Globe size={36} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Custom Websites & Code
        </h3>
        <p className="text-gray-300 text-center">
          From simple landing pages to complex e-commerce platforms, we build
          tailor-made websites and code to meet your exact specifications.
        </p>
      </div>

      {/* Service Card 2: Discord Bots & Servers */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-purple-500">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
          <svg className="h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.996 0.052C20.846 0.052 19.674 0.692 18.524 1.332C17.374 1.972 16.202 2.612 15.03 3.252C14.15 2.532 13.064 2.172 11.956 2.172C10.848 2.172 9.762 2.532 8.882 3.252C7.71 2.612 6.538 1.972 5.388 1.332C4.238 0.692 3.066 0.052 1.916 0.052C0.822 0.052 0.003 0.829 0.003 1.83C0.003 2.052 0.051 2.274 0.125 2.476C2.261 5.372 4.412 8.272 6.561 11.168C6.985 11.75 7.424 12.33 7.842 12.912C8.324 13.568 8.784 14.236 9.244 14.904C9.406 15.112 9.566 15.316 9.728 15.524C9.728 15.652 9.728 15.772 9.728 15.9C9.728 17.518 9.544 19.122 9.406 20.73C9.336 21.364 9.324 22.008 9.404 22.646C9.554 23.642 10.372 23.956 11.238 23.474C11.59 23.272 11.942 23.07 12.294 22.868C12.986 22.502 13.684 22.138 14.376 21.774C15.068 21.41 15.766 21.046 16.458 20.682C17.15 20.318 17.848 19.954 18.54 19.59C19.232 19.226 19.93 18.862 20.622 18.498C21.314 18.134 22.012 17.77 22.704 17.406C23.064 17.214 23.24 16.992 23.364 16.714C23.514 16.216 23.55 15.688 23.448 15.158C23.374 14.75 23.264 14.35 23.144 13.948C22.616 12.35 21.848 10.828 20.898 9.38C20.51 8.796 20.104 8.22 19.716 7.644C19.328 7.068 18.922 6.492 18.534 5.916C18.146 5.34 17.758 4.764 17.37 4.188C17.068 3.738 16.766 3.288 16.464 2.838C15.82 1.834 15.052 0.89 14.152 0.052C13.252 -0.786 12.186 -0.198 11.24 -0.056C10.294 0.086 9.348 0.228 8.402 0.37C7.456 0.512 6.51 0.654 5.564 0.796C4.852 0.89 4.14 0.984 3.428 1.078C2.928 1.144 2.428 1.208 1.928 1.272C1.528 1.326 1.128 1.38 0.728 1.434C0.45 1.472 0.174 1.51 0.003 1.55C-0.125 1.63 -0.183 1.76 -0.147 1.91C-0.111 2.06 0.003 2.19 0.125 2.27Z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Discord Bots & Servers
        </h3>
        <p className="text-gray-300 text-center">
          Boost your community with custom Discord bots for moderation, games,
          or utility, and get expertly configured servers.
        </p>
      </div>

      {/* Service Card 3: Custom Integrations & APIs */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-purple-500">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
          <MessageSquareCode size={36} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Custom Integrations & APIs
        </h3>
        <p className="text-gray-300 text-center">
          Connect your favorite apps and services with custom APIs and integrations,
          streamlining your workflow and unlocking new functionality.
        </p>
      </div>

      {/* Service Card 4: Search Engine Optimization */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-purple-500">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
          <LineChart size={36} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Search Engine Optimization
        </h3>
        <p className="text-gray-300 text-center">
          Increase your website's visibility and drive organic traffic with
          our expert SEO strategies and optimizations.
        </p>
      </div>
    </div>
  </div>
);

// StorePage component
const StorePage = ({ setCurrentPage }) => {
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Products available in the store
  const products = [
    {
      id: 1,
      name: 'Professional Resume Template',
      description: 'A modern, professional resume template designed to help you stand out to employers.',
      icon: <FileText size={36} className="text-white" />,
    },
    {
      id: 2,
      name: 'Business Presentation Deck',
      description: 'A pre-designed, engaging presentation deck suitable for business pitches and meetings.',
      icon: <Presentation size={36} className="text-white" />,
    },
    {
      id: 3,
      name: 'Moderation Discord Bot',
      description: 'A pre-made Discord bot with essential moderation features like kicking, banning, and logging.',
      icon: (
        <svg className="h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.996 0.052C20.846 0.052 19.674 0.692 18.524 1.332C17.374 1.972 16.202 2.612 15.03 3.252C14.15 2.532 13.064 2.172 11.956 2.172C10.848 2.172 9.762 2.532 8.882 3.252C7.71 2.612 6.538 1.972 5.388 1.332C4.238 0.692 3.066 0.052 1.916 0.052C0.822 0.052 0.003 0.829 0.003 1.83C0.003 2.052 0.051 2.274 0.125 2.476C2.261 5.372 4.412 8.272 6.561 11.168C6.985 11.75 7.424 12.33 7.842 12.912C8.324 13.568 8.784 14.236 9.244 14.904C9.406 15.112 9.566 15.316 9.728 15.524C9.728 15.652 9.728 15.772 9.728 15.9C9.728 17.518 9.544 19.122 9.406 20.73C9.336 21.364 9.324 22.008 9.404 22.646C9.554 23.642 10.372 23.956 11.238 23.474C11.59 23.272 11.942 23.07 12.294 22.868C12.986 22.502 13.684 22.138 14.376 21.774C15.068 21.41 15.766 21.046 16.458 20.682C17.15 20.318 17.848 19.954 18.54 19.59C19.232 19.226 19.93 18.862 20.622 18.498C21.314 18.134 22.012 17.77 22.704 17.406C23.064 17.214 23.24 16.992 23.364 16.714C23.514 16.216 23.55 15.688 23.448 15.158C23.374 14.75 23.264 14.35 23.144 13.948C22.616 12.35 21.848 10.828 20.898 9.38C20.51 8.796 20.104 8.22 19.716 7.644C19.328 7.068 18.922 6.492 18.534 5.916C18.146 5.34 17.758 4.764 17.37 4.188C17.068 3.738 16.766 3.288 16.464 2.838C15.82 1.834 15.052 0.89 14.152 0.052C13.252 -0.786 12.186 -0.198 11.24 -0.056C10.294 0.086 9.348 0.228 8.402 0.37C7.456 0.512 6.51 0.654 5.564 0.796C4.852 0.89 4.14 0.984 3.428 1.078C2.928 1.144 2.428 1.208 1.928 1.272C1.528 1.326 1.128 1.38 0.728 1.434C0.45 1.472 0.174 1.51 0.003 1.55C-0.125 1.63 -0.183 1.76 -0.147 1.91C-0.111 2.06 0.003 2.19 0.125 2.27Z"/>
          </svg>
      ),
    },
    {
      id: 4,
      name: 'Landing Page Template',
      description: 'A responsive, professional landing page template to quickly launch your project or business.',
      icon: <Building size={36} className="text-white" />,
    },
    {
      id: 5,
      name: 'Startup Pitch Deck Template',
      description: 'A visually stunning and strategic presentation deck designed to help you secure funding and impress investors.',
      icon: <Presentation size={36} className="text-white" />,
    },
    {
      id: 6,
      name: 'Data Visualization Presentation',
      description: 'A dynamic presentation template focused on clear, compelling data visualization to tell your story effectively.',
      icon: <LineChart size={36} className="text-white" />,
    },
  ];

  // Top Selling products for the new section
  const topSellingProducts = [
    {
      id: 7,
      name: 'Custom Website Creation',
      description: 'Get a professional, responsive website built from the ground up to fit your unique brand and needs.',
      icon: <Globe size={36} className="text-white" />,
    },
    {
      id: 8,
      name: 'Custom Discord Bots',
      description: 'A Discord bot tailored to your community, with custom commands for moderation, games, or utility.',
      icon: (
        <svg className="h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.996 0.052C20.846 0.052 19.674 0.692 18.524 1.332C17.374 1.972 16.202 2.612 15.03 3.252C14.15 2.532 13.064 2.172 11.956 2.172C10.848 2.172 9.762 2.532 8.882 3.252C7.71 2.612 6.538 1.972 5.388 1.332C4.238 0.692 3.066 0.052 1.916 0.052C0.822 0.052 0.003 0.829 0.003 1.83C0.003 2.052 0.051 2.274 0.125 2.476C2.261 5.372 4.412 8.272 6.561 11.168C6.985 11.75 7.424 12.33 7.842 12.912C8.324 13.568 8.784 14.236 9.244 14.904C9.406 15.112 9.566 15.316 9.728 15.524C9.728 15.652 9.728 15.772 9.728 15.9C9.728 17.518 9.544 19.122 9.406 20.73C9.336 21.364 9.324 22.008 9.404 22.646C9.554 23.642 10.372 23.956 11.238 23.474C11.59 23.272 11.942 23.07 12.294 22.868C12.986 22.502 13.684 22.138 14.376 21.774C15.068 21.41 15.766 21.046 16.458 20.682C17.15 20.318 17.848 19.954 18.54 19.59C19.232 19.226 19.93 18.862 20.622 18.498C21.314 18.134 22.012 17.77 22.704 17.406C23.064 17.214 23.24 16.992 23.364 16.714C23.514 16.216 23.55 15.688 23.448 15.158C23.374 14.75 23.264 14.35 23.144 13.948C22.616 12.35 21.848 10.828 20.898 9.38C20.51 8.796 20.104 8.22 19.716 7.644C19.328 7.068 18.922 6.492 18.534 5.916C18.146 5.34 17.758 4.764 17.37 4.188C17.068 3.738 16.766 3.288 16.464 2.838C15.82 1.834 15.052 0.89 14.152 0.052C13.252 -0.786 12.186 -0.198 11.24 -0.056C10.294 0.086 9.348 0.228 8.402 0.37C7.456 0.512 6.51 0.654 5.564 0.796C4.852 0.89 4.14 0.984 3.428 1.078C2.928 1.144 2.428 1.208 1.928 1.272C1.528 1.326 1.128 1.38 0.728 1.434C0.45 1.472 0.174 1.51 0.003 1.55C-0.125 1.63 -0.183 1.76 -0.147 1.91C-0.111 2.06 0.003 2.19 0.125 2.27Z"/>
          </svg>
      ),
    },
  ];

  const handleInquireClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleEmailSubmit = (customerEmail, productName) => {
    if (!customerEmail) {
      alert('Please provide your email address.');
      return;
    }
    const subject = encodeURIComponent(`Inquiry about ${productName}`);
    const body = encodeURIComponent(`Hello webHEADS team,\n\nI am interested in the "${productName}" product. Please provide me with more details.\n\nMy email is ${customerEmail}.\n\nThank you.`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    handleModalClose();
    setMessage(`Thank you for your interest in "${productName}"! We will be in touch shortly.`);
    setTimeout(() => setMessage(''), 7000);
  };
  
  const handleRedirectToInquire = () => {
    handleModalClose();
    setCurrentPage('inquire');
  };

  return (
    <div className="min-h-[calc(100vh-140px)] animate-fadeIn">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        Our <span className="text-purple-400">Store</span>
      </h2>
      
      {/* Top Selling Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          <span className="text-yellow-400">🔥</span> Top Selling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topSellingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-yellow-500"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-6 mx-auto">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
              
              <button
                onClick={() => handleInquireClick(product)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
              >
                <ShoppingCart size={20} className="mr-2" />
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-500"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
              {product.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
            
            <button
              onClick={() => handleInquireClick(product)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
            >
              <ShoppingCart size={20} className="mr-2" />
              Inquire Now
            </button>
          </div>
        ))}
      </div>
      {message && (
        <div className="mt-8 p-4 rounded-lg bg-green-600 text-white text-center font-medium animate-fadeInUp">
          {message}
        </div>
      )}

      {isModalOpen && selectedProduct && (
        <InquireModal
          productName={selectedProduct.name}
          onClose={handleModalClose}
          onEmailSubmit={handleEmailSubmit}
          onRedirectToInquire={handleRedirectToInquire}
        />
      )}
    </div>
  );
};

// Inquire Modal Component for Store
const InquireModal = ({ productName, onClose, onEmailSubmit, onRedirectToInquire }) => {
  const [customerEmail, setCustomerEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setCustomerEmail(e.target.value);
    setEmailError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailSend = () => {
    if (!validateEmail(customerEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    onEmailSubmit(customerEmail, productName);
  };
  
  const handleBookMeeting = () => {
    onRedirectToInquire();
    window.location.hash = 'calendly-widget';
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] animate-fadeIn">
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl w-full max-w-md mx-4 relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Inquire about <span className="text-purple-400">{productName}</span>
        </h3>
        {!showEmailInput ? (
          <div className="space-y-4">
            <button
              onClick={() => setShowEmailInput(true)}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Contact via Email
            </button>
            <button
              onClick={handleBookMeeting}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Book a Meeting
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="customerEmail" className="block text-gray-300 font-medium mb-2">
                Your Email Address:
              </label>
              <input
                type="email"
                id="customerEmail"
                value={customerEmail}
                onChange={handleEmailChange}
                className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 border border-gray-600"
                placeholder="you@example.com"
              />
              {emailError && <p className="text-red-400 text-sm mt-2">{emailError}</p>}
            </div>
            <button
              onClick={handleEmailSend}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
            >
              Send Inquiry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


// ContactPage component
const ContactPage = () => (
  <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center animate-fadeIn">
    <div className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-2xl w-full max-w-xl text-center border border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Get in <span className="text-purple-400">Touch</span>
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        We're ready to help you with your next project. Feel free to reach out to us with any questions!
      </p>
      <div className="flex flex-col space-y-6">
        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-center space-x-3 text-lg text-gray-200 hover:text-purple-400 transition-colors duration-300">
          <Mail size={24} className="text-purple-400" />
          <span>{CONTACT_INFO.email}</span>
        </a>
        <a href={`tel:+91${CONTACT_INFO.phone}`} className="flex items-center justify-center space-x-3 text-lg text-gray-200 hover:text-purple-400 transition-colors duration-300">
          <Phone size={24} className="text-purple-400" />
          <span>+91 {CONTACT_INFO.phone}</span>
        </a>
        {/* New Discord invite link */}
        <a href={CONTACT_INFO.discord} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 text-lg text-gray-200 hover:text-purple-400 transition-colors duration-300">
          <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.996 0.052C20.846 0.052 19.674 0.692 18.524 1.332C17.374 1.972 16.202 2.612 15.03 3.252C14.15 2.532 13.064 2.172 11.956 2.172C10.848 2.172 9.762 2.532 8.882 3.252C7.71 2.612 6.538 1.972 5.388 1.332C4.238 0.692 3.066 0.052 1.916 0.052C0.822 0.052 0.003 0.829 0.003 1.83C0.003 2.052 0.051 2.274 0.125 2.476C2.261 5.372 4.412 8.272 6.561 11.168C6.985 11.75 7.424 12.33 7.842 12.912C8.324 13.568 8.784 14.236 9.244 14.904C9.406 15.112 9.566 15.316 9.728 15.524C9.728 15.652 9.728 15.772 9.728 15.9C9.728 17.518 9.544 19.122 9.406 20.73C9.336 21.364 9.324 22.008 9.404 22.646C9.554 23.642 10.372 23.956 11.238 23.474C11.59 23.272 11.942 23.07 12.294 22.868C12.986 22.502 13.684 22.138 14.376 21.774C15.068 21.41 15.766 21.046 16.458 20.682C17.15 20.318 17.848 19.954 18.54 19.59C19.232 19.226 19.93 18.862 20.622 18.498C21.314 18.134 22.012 17.77 22.704 17.406C23.064 17.214 23.24 16.992 23.364 16.714C23.514 16.216 23.55 15.688 23.448 15.158C23.374 14.75 23.264 14.35 23.144 13.948C22.616 12.35 21.848 10.828 20.898 9.38C20.51 8.796 20.104 8.22 19.716 7.644C19.328 7.068 18.922 6.492 18.534 5.916C18.146 5.34 17.758 4.764 17.37 4.188C17.068 3.738 16.766 3.288 16.464 2.838C15.82 1.834 15.052 0.89 14.152 0.052C13.252 -0.786 12.186 -0.198 11.24 -0.056C10.294 0.086 9.348 0.228 8.402 0.37C7.456 0.512 6.51 0.654 5.564 0.796C4.852 0.89 4.14 0.984 3.428 1.078C2.928 1.144 2.428 1.208 1.928 1.272C1.528 1.326 1.128 1.38 0.728 1.434C0.45 1.472 0.174 1.51 0.003 1.55C-0.125 1.63 -0.183 1.76 -0.147 1.91C-0.111 2.06 0.003 2.19 0.125 2.27Z"/>
          </svg>
          <span>Join our Discord</span>
        </a>
      </div>
      </div>
    </div>
  );
  
// InquirePage component
const InquirePage = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    details: '',
    email: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendlyUrl = 'https://calendly.com/valorantgamersammy';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.serviceType || !formData.details || !formData.email) {
      alert('Please fill in all fields.'); // Changed this to a simple alert for brevity, but a modal would be better in a production app.
      return;
    }
    setIsModalOpen(true);
  };
  
  const handleEmailClick = () => {
    const subject = encodeURIComponent(`New Inquiry: ${formData.serviceType}`);
    const body = encodeURIComponent(`Hello webHEADS team,\n\nI am inquiring about the following service:\n\nService: ${formData.serviceType}\nDetails: ${formData.details}\n\nMy email is ${formData.email}.\n\nThank you.`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
  };
  
  const handleBookMeetingClick = () => {
    setIsModalOpen(false);
    document.getElementById('calendly-widget-section').scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Add Calendly CSS to the document head
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add Calendly script to the document body
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the added elements when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once
  
  return (
    <div className="min-h-[calc(100vh-140px)] animate-fadeIn flex flex-col justify-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        Inquire <span className="text-purple-400">Now</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Quote Form Section */}
        <div className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Get a <span className="text-purple-400">Custom Quote</span>
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="serviceType"
                className="block text-gray-300 font-medium mb-2"
              >
                What service do you need?
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 border border-gray-600"
              >
                <option value="">Select a service...</option>
                <option value="Custom Website">Custom Website</option>
                <option value="Specific Code Snippet">Specific Code Snippet</option>
                <option value="Discord Bot">Discord Bot</option>
                <option value="Discord Server">Discord Server</option>
                <option value="Custom API Integration">Custom API Integration</option>
                <option value="SEO Optimization">SEO Optimization</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-gray-300 font-medium mb-2"
              >
                Describe your needs in detail:
              </label>
              <textarea
                id="details"
                name="details"
                rows="5"
                value={formData.details}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 border border-gray-600"
                placeholder="Tell us what you're looking for..."
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Your Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 border border-gray-600"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
            >
              <Send size={20} className="mr-2" />
              Submit Request
            </button>
          </form>
        </div>
        
        {/* Calendly Section */}
        <div id="calendly-widget-section" className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-2xl w-full h-[80vh] border border-gray-700 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Book a <span className="text-purple-400">Meeting</span>
            </h3>
            <div
                className="calendly-inline-widget w-full h-full"
                data-url={calendlyUrl}
            ></div>
            {/* Placeholder message for when the Calendly widget is not yet loaded */}
            <div className="text-center text-gray-400 mt-4 p-4">
                <CalendarDays size={48} className="mx-auto mb-4 text-purple-400" />
                <p className="text-lg">Loading the scheduling tool...</p>
                <p className="text-sm mt-2">
                If you don't see the scheduling tool, make sure your Calendly link is correct and publicly accessible.
                </p>
            </div>
        </div>
      </div>
      
      {isModalOpen && (
        <ActionModal
          title="Choose a Way to Connect"
          onClose={() => setIsModalOpen(false)}
          onEmailClick={handleEmailClick}
          onBookMeetingClick={handleBookMeetingClick}
        />
      )}
    </div>
  );
};


// Reusable Modal Component
const ActionModal = ({ title, onClose, onEmailClick, onBookMeetingClick }) => {
  const [customerEmail, setCustomerEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailError, setEmailError] = useState('');
  
  const handleEmailChange = (e) => {
    setCustomerEmail(e.target.value);
    setEmailError('');
  };
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailSend = () => {
    if (!validateEmail(customerEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    // Logic to handle email sending (e.g., mailto link)
    onEmailClick(customerEmail);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] animate-fadeIn">
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl w-full max-w-md mx-4 relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {title}
        </h3>
        {!showEmailInput ? (
          <div className="space-y-4">
            <button
              onClick={() => setShowEmailInput(true)}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Contact via Email
            </button>
            <button
              onClick={onBookMeetingClick}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Book a Meeting
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="customerEmail" className="block text-gray-300 font-medium mb-2">
                Your Email Address:
              </label>
              <input
                type="email"
                id="customerEmail"
                value={customerEmail}
                onChange={handleEmailChange}
                className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 border border-gray-600"
                placeholder="you@example.com"
              />
              {emailError && <p className="text-red-400 text-sm mt-2">{emailError}</p>}
            </div>
            <button
              onClick={handleEmailSend}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
            >
              Send Inquiry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
