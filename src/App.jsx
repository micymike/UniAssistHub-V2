import React, { useState, useEffect, useRef, useMemo } from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OrderNow from './components/OrderNow'; // Or rename usage to OrderNow
import TrackOrder from './components/TrackOrder';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { MessageCircle, X} from 'lucide-react'; // Import icons from lucide-react
import './App.css';

const UniAssistHub = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [orderCode, setOrderCode] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [orders, setOrders] = useState([
    { id: 'UA001', status: 'In Progress', client: 'John Doe', service: 'Assignment' },
    { id: 'UA002', status: 'Completed', client: 'Jane Smith', service: 'CV Writing' },
    { id: 'UA003', status: 'Pending', client: 'Mike Johnson', service: 'SODEL' }
  ]);
  const [counters, setCounters] = useState({ students: 0, projects: 0, success: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hi! I'm here to help you with your academic needs. How can I assist you today?", isBot: true }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Refs for smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const orderRef = useRef(null);
  const trackRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const allRefs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    order: orderRef,
    track: trackRef,
    testimonials: testimonialsRef,
    contact: contactRef,
  };

  const servicesData = [
    {
      icon: 'FileText', // Use string names, pass actual icon component in component
      title: "Assignment Writing",
      description: "Professional academic writing services for all subjects and levels",
      price: "From KSh 50",
      features: ["Original Content", "Plagiarism Free", "24/7 Support", "Unlimited Revisions"]
      },   // <--- add this comma
    {
      icon: 'Award',
      title: "CV Writing",
      description: "Stand out with professionally crafted CVs and cover letters",
      price: "From KSh 1,000",
      features: ["ATS Optimized", "Industry Specific", "Modern Templates", "LinkedIn Profile"]
      },   // <--- add this comma
    {
      icon: 'BookOpen',
      title: "SODEL Support",
      description: "Comprehensive support for School of Distance Education and eLearning",
      price: "From KSh 50",
      features: ["All Units", "CATs & Exams", "Discussion Posts", "Quick Turnaround"]
      },   // <--- add this comma
    {
      icon: 'TrendingUp',
      title: "Research Reports",
      description: "Detailed research reports and thesis writing assistance",
      price: "From KSh 500",
      features: ["Data Analysis", "SPSS/R Support", "Proper Citations", "Chapter by Chapter"]
      },   // <--- add this comma
    {
      icon: 'LaptopCode',
      title: "Website Development",
      description: "Professional website design and development for students and businesses",
      price: "From KSh 800",
      features: ["Responsive Design", "Domain & Hosting Setup", "Portfolio & Business Sites", "SEO Optimized"]
      },   // <--- add this comma
    {
      icon: 'BookOpen',
      title: "Past Papers Access",
      description: "Access a wide range of updated past papers for KCSE, university, and college exams",
      price: "From KSh 50 per paper",
      features: ["University", "Organized by Subject", "PDF Downloads", "Instant Access"]
      },   // <--- add this comma
    {
      icon: 'Library',
      title: "Novels & Literature",
      description: "Get popular school set books and literature novels in soft copy or print",
      price: "From KSh 100",
      features: ["African & World Literature", "PDF/Print Options", "Discounted Student Prices"]
      } 
    ];

  const testimonialsData = useMemo(() => [
    {
      name: "Sarah Wanjiku",
      university: "JKUAT",
      text: "UniAssist Hub saved my final year! Their assignment help was exceptional and delivered on time.",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "James Kiprotich",
      university: "Kenyatta University",
      text: "The CV writing service landed me my dream job. Highly professional and affordable!",
      rating: 4,
      image: "👨‍💼"
    },
    {
      name: "Grace Akinyi",
      university: "JKUAT",
      text: "SODEL support was amazing. They helped me understand complex concepts and improve my grades.",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Michael Otieno",
      university: "Strathmore University",
      text: "The portfolio website created was sleek and professional. It perfectly showcases my skills and helped me stand out to potential employers.",
      rating: 3,
      image: "👨‍🎓"
    },
    {
      name: "Amina Mwikali",
      university: "University of Nairobi",
      text: "With expert assistance on my lab reports, I was able to submit high-quality work that impressed my professors.",
      rating: 5,
      image: "👩‍🔬"
    },
    {
      name: "Daniel Kamau",
      university: "Maseno University",
      text: "The collection of past papers was a lifesaver! Practicing with them sharpened my skills and boosted my exam performance.",
      rating: 4,
      image: "👨‍💻"
    }
  ], []);

  // Splash screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!showSplash) {
      const animateCounters = () => {
        const targets = { students: 3000, projects: 5000, success: 98 };
        const duration = 2000;
        const steps = 60;
        const increment = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setCounters({
            students: Math.floor(targets.students * progress),
            projects: Math.floor(targets.projects * progress),
            success: Math.floor(targets.success * progress)
          });

          if (step >= steps) {
            clearInterval(timer);
            setCounters(targets);
          }
        }, increment);
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      });

      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }
    }
  }, [showSplash]);

  // Testimonial carousel
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  }, 5000);
  return () => clearInterval(interval);
}, [testimonialsData]);

  const scrollToSection = (sectionRef, sectionName) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(sectionName);
    setIsMenuOpen(false);
  };

  const handleOrderTrack = () => {
    const order = orders.find(o => o.id === orderCode.toUpperCase());
    if (order) {
      alert(`Order ${order.id}: ${order.status}\nService: ${order.service}\nClient: ${order.client}`);
    } else {
      alert('Order not found. Please check your order code.');
    }
    setOrderCode('');
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') { // Simple client-side check for demonstration
      setShowAdmin(true);
      setAdminPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    // Simulate WhatsApp notification
    alert(`Notification sent to client via WhatsApp: Order ${orderId} status updated to ${newStatus}`);
  };

  const handleWhatsAppOrder = () => {
    const message = "Hi! I would like to place an order for academic assistance. Please provide me with more details about your services.";
    window.open(`https://wa.me/254789296373?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setChatMessages([...chatMessages, { text: newMessage, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I can help you with assignments, CV writing, SODEL support,Personal Websites Portfolio,Past Papers and research reports. What service are you interested in?",
        "Our prices start from KSh 50 for assignments. Would you like to know more about our services?",
        "You can place an order by clicking the 'Order Now' button or contacting us via WhatsApp. How can I assist you further?",
        "We offer 24/7 support and guarantee original, plagiarism-free work. What academic help do you need?",
        "Hi there! 👋 I’d be happy to help you create a stunning personal portfolio. Are you looking for a design from scratch or a revamp of an existing one?",
        "Yes, I do! Please tell me your education level (e.g., KCSE, university), and the specific topics or years you’d like. I’ll get them ready for you.",
        "You’re welcome! 😊 If you need anything else, I’m just a message away.",
        "Hello! Need help with a report, past paper, or study resource? I’m here for all that and more. 😊",
        "UniAssist Hub believes in you —keep pushing, keep growing.",
        "At UniAssist Hub, we believe: With education, you can shape not just your future, but the world."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);

    setNewMessage('');
  };

  if (showSplash) {
    return <Splash isDarkMode={isDarkMode} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        currentSection={currentSection}
        allRefs={allRefs}
      />

      <Hero
        homeRef={homeRef}
        isDarkMode={isDarkMode}
        services={servicesData}
        handleWhatsAppOrder={handleWhatsAppOrder}
        scrollToServices={() => scrollToSection(servicesRef, 'services')}
      />

      <About
        aboutRef={aboutRef}
        isDarkMode={isDarkMode}
        counters={counters}
      />

      <Services
        servicesRef={servicesRef}
        isDarkMode={isDarkMode}
        services={servicesData}
        handleWhatsAppOrder={handleWhatsAppOrder}
      />

      <OrderNow
        orderRef={orderRef}
        isDarkMode={isDarkMode}
        handleWhatsAppOrder={handleWhatsAppOrder}
      />

      <TrackOrder
        trackRef={trackRef}
        isDarkMode={isDarkMode}
        orderCode={orderCode}
        setOrderCode={setOrderCode}
        handleOrderTrack={handleOrderTrack}
        adminPassword={adminPassword}
        setAdminPassword={setAdminPassword}
        handleAdminLogin={handleAdminLogin}
        showAdmin={showAdmin}
        setShowAdmin={setShowAdmin}
        orders={orders}
        updateOrderStatus={updateOrderStatus}
      />

      <Testimonials
        testimonialsRef={testimonialsRef}
        isDarkMode={isDarkMode}
        testimonials={testimonialsData}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />

      <Contact
        contactRef={contactRef}
        isDarkMode={isDarkMode}
      />

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 transform hover:scale-110"
        aria-label="Open Chatbot"
      >
        {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {chatOpen && (
        <Chatbot
          chatMessages={chatMessages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleChatSubmit={handleChatSubmit}
          isDarkMode={isDarkMode}
          onClose={() => setChatOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className={`py-8 text-center ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} UniAssist Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UniAssistHub;
