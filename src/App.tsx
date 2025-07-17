import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Users, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Clock, 
  MapPin, 
  DollarSign, 
  GraduationCap,
  Phone,
  Mail,
  Download,
  Check,
  Star,
  Target,
  BarChart3,
  Calculator,
  FileText,
  Briefcase,
  MessageCircle,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';
import Nav from "./Nav.tsx"


function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', query: '' });
  };

  const faqData = [
    {
      question: "Who is this course for?",
      answer: "This course is designed for B.Com/M.Com/MBA students and recent graduates who want to gain practical finance and accounting skills for immediate employment."
    },
    {
      question: "Do I need prior finance experience?",
      answer: "No prior experience is required. We start with the basics and build your skills progressively to industry-ready level."
    },
    {
      question: "Can I pay in instalments?",
      answer: "Yes, we offer flexible payment options including EMI plans. Contact our counsellors for more details."
    },
    {
      question: "What kind of jobs can I expect?",
      answer: "You can expect roles like Accounts Executive, Financial Analyst, Tax Consultant, Audit Assistant, and Bookkeeper with starting salaries around ₹4 LPA."
    }
  ];

  const curriculumData = [
    {
      title: "Basics of Computers",
      description: "Foundation computer skills essential for modern accounting work",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "MS Excel",
      description: "Advanced Excel functions, pivot tables, and financial modeling",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "GST",
      description: "Complete GST compliance, returns filing, and calculations",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Income Tax",
      description: "Tax planning, return preparation, and compliance management",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Accounting & Bookkeeping",
      description: "Double-entry bookkeeping, journal entries, and financial statements",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Financial Planning",
      description: "Budgeting, forecasting, and financial analysis techniques",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Audit & Compliance",
      description: "Internal audit procedures and regulatory compliance",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Soft Skills & Interview Prep",
      description: "Communication skills, resume building, and interview techniques",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const journeySteps = [
    { title: "Enroll & Take Entrance Test", description: "Quick assessment to understand your current level" },
    { title: "Skill Mapping", description: "Personalized learning path based on your goals" },
    { title: "Tool-Based Training", description: "Hands-on practice with Excel, Tally, PowerBI" },
    { title: "Case Studies", description: "Real-world projects and practical applications" },
    { title: "Soft Skills + Mock Interviews", description: "Professional development and interview preparation" },
    { title: "Placement Support", description: "7 guaranteed interviews and career guidance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Apply Now Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
          Apply Now
        </button>
      </div>
      <Nav />

      {/* Hero Section */}
      <section className="relative bg-gray-50 text-gray-800 py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
                Let's Supercharge<br />
                Your Career
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Empowering a new generation of finance professionals.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">500+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Placements</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">1000+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Career Transitions</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-3xl font-bold text-gray-800">10+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Courses and Programs</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div>
                <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>
            
            {/* Right Content - Hero Image with Geometric Shapes */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Geometric Background Shapes */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 rounded-lg transform rotate-12 opacity-80"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-200 rounded-lg transform -rotate-12 opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-200 rounded-lg transform rotate-45 opacity-80"></div>
                <div className="absolute top-1/2 -right-8 w-20 h-20 bg-green-200 rounded-lg transform -rotate-45 opacity-80"></div>
                
                {/* Main Hero Image Container */}
                <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-red-500 rounded-2xl p-8 shadow-2xl">
                  <div className="w-80 h-96 bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Professional Person Illustration */}
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <GraduationCap className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Finance Professional</h3>
                      <p className="text-gray-600">Ready for Success</p>
                      
                      {/* Phone/Device Mockup */}
                      <div className="mt-6 bg-gray-800 rounded-lg p-3 inline-block">
                        <div className="w-16 h-24 bg-green-500 rounded flex items-center justify-center">
                          <Calculator className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Section */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8">
            We've Partnered With Leading Institutions And Corporations
          </h2>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-400 font-semibold">PARTNER LOGOS</div>
          </div>
        </div>
      </section>

      {/* Why SuperAccountant */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why SuperAccountant?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">100% Job Assurance</h3>
              <p className="text-gray-600">7 Guaranteed Interviews</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">100% Hands-on Learning</h3>
              <p className="text-gray-600">Practical, Real-world Skills</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Avg Salary: ₹4 LPA</h3>
              <p className="text-gray-600">Industry-Standard Packages</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Tool-Based Learning</h3>
              <p className="text-gray-600">Excel, Tally, PowerBI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Program Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              SuperAccountant is a 3-month program designed to make you industry-ready in finance and accounting. 
              You'll gain real-world skills, industry-recognized tools, and personal mentorship to land a job fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-sm text-gray-600">3 Months (Weekdays)</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Fees</h3>
              <p className="text-sm text-gray-600">₹24,999/- (Incl. GST)</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Location</h3>
              <p className="text-sm text-gray-600">Downtown Mall, Hyderabad</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Avg Salary</h3>
              <p className="text-sm text-gray-600">₹4 LPA</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <GraduationCap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Eligibility</h3>
              <p className="text-sm text-gray-600">B.Com/M.Com/MBA students & grads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Program Curriculum</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {curriculumData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenCurriculum(openCurriculum === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openCurriculum === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  {openCurriculum === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 ml-14">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto">
                <Download className="w-5 h-5" />
                Download Full Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Learning Journey</h2>
          <div className="text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold">
              Be Industry-Ready in Just 90 Days!
            </span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-6 italic">
                "Thanks to SuperAccountant, I landed my first accounting job in just 2 months after graduation! 
                The hands-on training and interview preparation were exceptional."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800">Happy Student</p>
                  <p className="text-sm text-gray-600">Accounts Executive at XYZ Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 bg-gray-50 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enquiry Form */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Ready to Transform Your Career?</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6" />
                    <span>+91 96529 74428</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6" />
                    <span>info@superaccountant.in</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6" />
                    <span>Unit 422, Downtown Mall, Hyderabad</span>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="What do you want to ask?"
                      value={formData.query}
                      onChange={(e) => setFormData({...formData, query: e.target.value})}
                      rows={4}
                      className="w-full p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-900 p-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Apply for Counselling
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SuperAccountant.in</h3>
              <p className="text-gray-400">Transforming careers through practical finance and accounting education.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enquiry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 96529 74428</p>
                <p>info@superaccountant.in</p>
                <p>Unit 422, Downtown Mall, Hyderabad</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SuperAccountant.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;