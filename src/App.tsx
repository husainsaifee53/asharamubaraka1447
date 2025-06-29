import React, { useState , useEffect} from 'react';
import { Calendar, MapPin, Clock, Phone, Mail, Users, Star, ChevronDown, Menu, X } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2025-06-26') - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Format numbers to always show 2 digits
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="countdown">
      <p className="count-label flex items-center gap-2 text-amber-200 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-timer"
        >
          <line x1="10" x2="14" y1="2" y2="2" />
          <line x1="12" x2="15" y1="14" y2="11" />
          <circle cx="12" cy="14" r="8" />
        </svg>
        Countdown to Ashara Mubaraka
      </p>
      <div className="count-boxes flex gap-2 md:gap-4">
        <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-3 text-center min-w-[70px]">
          <span className="font-bold text-2xl block">{formatNumber(timeLeft.days)}</span>
          <small className="text-amber-200 text-xs">Days</small>
        </div>
        <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-3 text-center min-w-[70px]">
          <span className="font-bold text-2xl block">{formatNumber(timeLeft.hours)}</span>
          <small className="text-amber-200 text-xs">Hours</small>
        </div>
        <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-3 text-center min-w-[70px]">
          <span className="font-bold text-2xl block">{formatNumber(timeLeft.minutes)}</span>
          <small className="text-amber-200 text-xs">Minutes</small>
        </div>
        <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-3 text-center min-w-[70px]">
          <span className="font-bold text-2xl block">{formatNumber(timeLeft.seconds)}</span>
          <small className="text-amber-200 text-xs">Seconds</small>
        </div>
      </div>
    </div>
  );
};


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
  
    <div
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/bg.afif')" }}>
  {/* All your site content */}
  <header className="bg-white py-4 flex justify-center shadow-md">
  <img
    src="/headerborder.svg" 
    alt="Ashara Header Logo"
    className="h-16 w-auto"
  />
</header>


      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-2xl font-bold text-emerald-800">Ashara Mubaraka</h2>
                <p className="text-sm text-amber-600">1447H - Calicut Relay Center</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-emerald-800 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#location" className="text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Location</a>
                <a href="#contact" className="text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-emerald-800 hover:text-amber-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-emerald-800 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#location" className="text-gray-600 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Location</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
    <section
  id="home"
  className="relative w-full h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4noysGVQ8_A8siLyVJNmVR7IlcalHeF4fgSKMks8d0rAvNAGbbGgHRiuudNv4riYyxeXzeMO42oXF61o_E-pMa-CtiEy1FM2-ccDGasrfd96ORHrDMoBqogBRq1wfYnwTbFhbNaX=s1360-w1360-h1020-rw')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* SVG image on top */}
  <img
  src="/calicut-relay-logo-v2.svg"
  alt="Decoration"
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 md:w-[30rem] lg:w-[40rem] z-20"
/>


  {/* Hero Content */}
  
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">About Ashara Mubaraka</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aaqa Moula Syedna Aali Qadr Mufaddal Saifuddin T.U.S ye karam ane ehsan farmawi ne Calicut ne Relay Center nu Sharaf Inayat Kidu che.
            </p>
          </div>
          </div>
        </section>



{/* 
<a
  href="https://miqaat.its52.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="block max-w-xs mx-auto bg-amber border border-amber-400 rounded-xl p-5 shadow-lg hover:shadow-2xl transition"
>
  <h3 className="text-lg font-bold text-amber-600 mb-2">ITS Miqaat Portal</h3>
  <p className="text-gray-700 text-sm">Login to access Miqaat registration and details.</p>
</a> */}

<div className="max-w-xs mx-auto space-y-4">
  <a
    href="https://miqaat.its52.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-amber-500 text-white text-center font-bold py-3 px-4 rounded-lg shadow-md hover:bg-amber-600 transition"
  >
    View Your Pass (ITS Website)
  </a>
  {/* WhatsApp RSVP Group Button */}
  <a
    href="https://chat.whatsapp.com/BJDjbsZHlvUDuBZuJ1Zgcr"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-green-600 text-white text-center font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-700 transition"
  >
    📲 Join Calicut Ashara 1447 RSVP
  </a>

  
</div>

      {/* FAQ Section */}
<section id="faq" className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
        FAQ – Calicut Relay Center
      </h2>
      <p className="text-xl text-gray-600">
        Ashara Mubaraka – Chennai Madras 1447H
      </p>
    </div>

    <div className="space-y-8">
      {[
        {
          q: "Is Calicut and Kozhikode the same?",
          a: "Yes. Calicut City is in Kozhikode District of Kerala State, India."
        },
        {
          q: "How to get there?",
          a: `You can reach Calicut by Air (IATA code: CCJ - Karipur International Airport, 26Kms from city).
          \n\n✈️ Daily direct flights from Abu Dhabi, Dubai, Doha, Mumbai, Delhi, Chennai, Bangalore.
          \n🚆 Rail: CLT - Kozhikode Station. Direct trains from Surat, Ahmedabad, Mumbai, Chennai, Bangalore.
          \n🚌 Road: Direct bus services from Chennai, Bangalore, Coimbatore.`
        },
        {
          q: "What language is spoken in Calicut?",
          a: "Preferred primary language is Malayalam. English and Hindi are also manageable."
        },
        {
          q: "What kind of accommodation options are available in Kozhikode?",
          a: "Calicut has a range of accommodation options, from luxury hotels to budget lodges. Options suit all preferences and budgets."
        },
        {
          q: "Essential things to carry and keep handy?",
          a: "Due to monsoon season, carry umbrellas, face masks, and weatherproof gear."
        },
        {
          q: "What is Calicut famous for?",
          a: "Calicut is known as the food capital of Kerala and is a UNESCO-recognized City of Literature."
        },
        {
          q: "Any not-to-miss delicacies in Calicut?",
          a: "Yes, tender coconut juice and banana chips are must-try local specialties."
        },
        {
          q: "Are malls and shopping centers available in Calicut?",
          a: "Yes, several large and popular malls are available. It's best to plan shopping after Ashura."
        },
        {
          q: "Any nearby tourist attractions?",
          a: "Yes. Wayanad Hill Station (80 km) and Kappad Beach (10 km). Both are currently closed during the monsoon season."
        }
      ].map(({ q, a }, index) => (
        <div key={index} className="bg-emerald-50 p-6 rounded-lg shadow-md">
          <h4 className="font-semibold text-emerald-800 mb-2">{`Q${index + 1}. ${q}`}</h4>
          <p className="text-gray-700 whitespace-pre-line">{a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Location & Venue</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mohammedi Masjid , Calicut
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Venue Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Mohammedi Masjid | Zainee Complex</p>
                    <p className="text-gray-600">Calicut, Kerala</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Capacity: 600 people</p>
                    <p className="text-gray-600">Air-conditioned with modern facilities</p>
                  </div>
                </div>

              </div>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                <h4 className="font-bold text-emerald-800 mb-3">Facilities Available</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ample parking space</li>
                  <li>• Rahat Block</li>
                  <li>• Sabeel - E - Hussain</li>
                  <li>• Mawaid</li>
                  <li>• Buzurgo Assistance</li>
                  <li>• Technical Assistance</li>
                </ul>
              </div>
              <br></br>
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9 w-rounded">
        <iframe
          src="https://www.youtube.com/embed/m7GMPkEsePs?si=Ydpzpo9QUAslNpNB&amp;start=8"
          title="Mohammedi Masjid Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
        ></iframe>
      </div>
    </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Interactive Map</p>
                  <p className="text-emerald-100">Click to view detailed directions</p>
                </div>
              </div>
              <br></br>
              <div className="w-rounded h-96">
                <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1966710287957!2d75.77434559999999!3d11.2469381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593d62c6c7e9%3A0xe06557ab3fe51cc6!2sMohammedi%20Masjid%2C%20Calicut%20(Dawoodi%20Bohra)!5e0!3m2!1sen!2sin!4v1750349406270!5m2!1sen!2sin"
      className="w-full h-full border-15 rounded-lg"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
{/*    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1966710287957!2d75.77434559999999!3d11.2469381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593d62c6c7e9%3A0xe06557ab3fe51cc6!2sMohammedi%20Masjid%2C%20Calicut%20(Dawoodi%20Bohra)!5e0!3m2!1sen!2sin!4v1750349406270!5m2!1sen!2sin" 
     width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>
  <br></br>
              <div className="p-6">
                <h4 className="font-bold text-emerald-800 mb-4">How to Reach</h4>
                <br></br>
                <div className="space-y-3 text-gray-700">
                  <p><strong>By Flight:</strong> 26km from Airport. Taxi , Uber available</p>
                  <p><strong>By Train:</strong> Less than 2km . Taxi , Auto available in station premises</p>
                  <p><strong>By Auto:</strong> Available throughout the city to the venue</p>
                  <p><strong>Landmarks:</strong>Between 
PalmBeach Apartments and
Thakkaram Restaurant 
South Beach Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section> */}
        {/* YouTube Video Embed - Added this new div */}
    
      {/* </section> */}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For any questions or assistance, feel free to reach out to our organizing committee
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 9249527888</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">calicutashara1447@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Office Address</p>
                      <p className="text-gray-600">Calicut, Kerala</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            <div className="bg-amber-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-amber-800 mb-4">Committee Members</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Aamil Saheb</p>
                    <p className="text-gray-600 text-sm">Shk Abbas bhai Maimoon</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Secretary</p>
                    <p className="text-gray-600 text-sm">Shk Siraj bhai Kapasi</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Jamaat Coordinator</p>
                    <p className="text-gray-600 text-sm">Jabir bhai Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            {/* <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name as on ITS</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Name as on ITS"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ITS No</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="ITS Number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="+91 your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Query</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Aapnu suwaal "
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
              <div>
              <h3 className="text-2xl font-bold mb-4">Ashara Mubaraka 1447H</h3>
              <CountdownTimer />
              </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-emerald-200">
                <li><a href="https://www.its52.com/" className="hover:text-white">ITS</a></li>
                <li><a href="#about" className="hover:text-white">About the Event</a></li>
                <li><a href="#location" className="hover:text-white">Venue Information</a></li>
                <li><a href="#contact" className="hover:text-white">Contact Committee</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Event Details</h4>
              <div className="space-y-2 text-emerald-200">
                <p>📅 26th June - 5th July 2025</p>
                <p>📍 Mohammedi Masjid, Calicut</p>
                <p>👥 Capacity: 600 people</p>
                <p>✉️ calicutashara1447@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
            <p>&copy; 2025 Ashara Mubaraka Committee 1447, Calicut. All rights reserved.</p>
            <p className="mt-2">Developed by Hussain Saifee</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
