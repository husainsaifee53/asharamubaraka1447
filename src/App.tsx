import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Phone, Mail, Users, Star, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [selectedDay, setSelectedDay] = useState(1);

  // const scheduleData = [
  //   {
  //     day: 1,
  //     date: "26th June 2024",
  //     theme: "Commencement - Ya Hussain",
  //     events: [
  //       { time: "6:00 AM", event: "Fajr Prayer & Recitation" },
  //       { time: "10:00 AM", event: "Majlis - The Journey Begins" },
  //       { time: "1:00 PM", event: "Zuhr Prayer & Community Lunch" },
  //       { time: "4:00 PM", event: "Quranic Recitation" },
  //       { time: "7:00 PM", event: "Evening Majlis & Prayers" }
  //     ]
  //   },
  //   {
  //     day: 2,
  //     date: "27th June 2024",
  //     theme: "Remembrance & Reflection",
  //     events: [
  //       { time: "6:00 AM", event: "Morning Prayers & Dhikr" },
  //       { time: "10:00 AM", event: "Majlis - Lessons from Karbala" },
  //       { time: "1:00 PM", event: "Zuhr Prayer & Community Gathering" },
  //       { time: "4:00 PM", event: "Youth Programs" },
  //       { time: "7:00 PM", event: "Evening Majlis - Stories of Sacrifice" }
  //     ]
  //   },
  //   {
  //     day: 10,
  //     date: "6th July 2024",
  //     theme: "Ashura - The Day of Remembrance",
  //     events: [
  //       { time: "5:00 AM", event: "Special Fajr Prayer" },
  //       { time: "9:00 AM", event: "Grand Majlis - Day of Ashura" },
  //       { time: "12:00 PM", event: "Community Prayer & Reflection" },
  //       { time: "2:00 PM", event: "Community Feast (Langar)" },
  //       { time: "6:00 PM", event: "Concluding Ceremony" }
  //     ]
  //   }
  // ];

  return (
    <div className="min-h-screen bg-white">
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
{/*                 <a href="#schedule" className="text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Schedule</a> */}
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
{/*               <a href="#schedule" className="text-gray-600 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Schedule</a> */}
              <a href="#location" className="text-gray-600 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Location</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m30 54c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm0-6c10.17 0 18-7.83 18-18s-7.83-18-18-18-18 7.83-18 18 7.83 18 18 18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Star className="mx-auto h-16 w-16 text-amber-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ashara Mubaraka
              <span className="block text-2xl md:text-3xl text-amber-300 mt-2">1447H</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-emerald-100">
              AHLAN WASAHLAN TO CALICUT .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-amber-400" />
                26th June - 6th July 2025
              </div>
              <div className="flex items-center text-lg">
                <MapPin className="h-5 w-5 mr-2 text-amber-400" />
                Calicut, Kerala
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
                JOIN WhatsApp Group
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-3 rounded-lg font-semibold transition-all">
                View Location
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">About Ashara Mubaraka</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aaqa Moula Sydena Aali Qadr Mufaddal Saifuddin T.U.S ye karam ane ehsan farmawi ne Calicut ne Relay Center nu Sharaf Inayat Kidu che.
            </p>
          </div>
          </div>
        </section>

{/*           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">The Sacred Ten Days</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ashara Mubaraka represents the first ten days of Muharram, the sacred month in the Islamic calendar. 
                These days hold profound significance as we remember the events of Karbala and reflect upon the 
                principles of justice, sacrifice, and devotion to truth.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In Calicut, this observance brings together our community in a spirit of unity, prayer, and 
                remembrance. We gather to honor the legacy of Imam Hussain (AS) and draw inspiration from 
                his unwavering commitment to righteousness.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-emerald-800">10</div>
                  <div className="text-sm text-gray-600">Sacred Days</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-emerald-800">1447</div>
                  <div className="text-sm text-gray-600">Hijri Year</div>
                </div>
              </div>
            </div> */}
{/*             
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-emerald-800 mb-6">Key Observances</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Daily Majlis</h5>
                    <p className="text-gray-600 text-sm">Spiritual gatherings with recitation and reflection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Community Prayers</h5>
                    <p className="text-gray-600 text-sm">Congregational prayers throughout the ten days</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Day of Ashura</h5>
                    <p className="text-gray-600 text-sm">The culminating day of remembrance and reflection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Community Service</h5>
                    <p className="text-gray-600 text-sm">Charitable activities and community support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 */}
      {/* Schedule Section */}
{/*       <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Program Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Daily programs designed to foster spiritual growth and community connection
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {scheduleData.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedDay === day.day
                      ? 'bg-emerald-800 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-emerald-100'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>
          </div>

          {scheduleData.map((day) => (
            selectedDay === day.day && (
              <div key={day.day} className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">Day {day.day} - {day.date}</h3>
                  <p className="text-xl text-amber-700 font-semibold">{day.theme}</p>
                </div>
                
                <div className="grid gap-4">
                  {day.events.map((event, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-emerald-600 mr-3" />
                          <span className="font-semibold text-emerald-800">{event.time}</span>
                        </div>
                        <div className="text-gray-700 font-medium">{event.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section> */}

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
                    <p className="font-semibold text-gray-800">Dawoodi Bohra Complex</p>
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
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Daily: 6:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Special timings on Day of Ashura</p>
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
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Interactive Map</p>
                  <p className="text-emerald-100">Click to view detailed directions</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-emerald-800 mb-4">How to Reach</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>By Flight:</strong> 26km from Airport. Taxi , Uber available</p>
                  <p><strong>By Train:</strong> Less than 2km . Taxi , Auto available in station premises</p>
                  <p><strong>By Bus:</strong> Multiple city buses stop at nearby junction</p>
                  <p><strong>By Auto:</strong> Available throughout the city to the venue</p>
                  <p><strong>By Car:</strong> Parking available on  nearby areas</p>
                  <p><strong>Landmarks:</strong> Near major landmarks in Calicut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <p className="text-gray-600">+91 9567965253</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">info@asharamubaraka-calicut.org</p>
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

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your last name"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ashara Mubaraka 1447H</h3>
              </div>
{/*               <p className="text-emerald-200 mb-4">
                Commemorating the sacred ten days with devotion, remembrance, and community unity in Calicut.
              </p> */}
{/*               <div className="flex items-center text-emerald-200">
                <Star className="h-5 w-5 mr-2" />
                May peace and blessings be upon all
              </div> */}
{/*             </div> */}
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-emerald-200">
                <li><a href="#about" className="hover:text-white">About the Event</a></li>
{/*                 <li><a href="#schedule" className="hover:text-white">Daily Schedule</a></li> */}
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
                <p>✉️ info@asharamubaraka-calicut.org</p>
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
