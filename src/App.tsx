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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyS5Eo98uMDk1CwAYmRE7cOkcZ-O7W6jt676WMqD-M/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const result = await response.json();
      console.log('Google Sheets response:', result);
  
      if (result.result === 'success') {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', query: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    }

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
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
          Apply Now
        </button>
      </div> */}
      <Nav />

      {/* Hero Section */}
     {/* Hero Section */}
<section
  className="relative min-h-screen flex items-center bg-[#0E1423] overflow-hidden"
  style={{
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
  }}
>
  <div className="container mx-auto px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div className="space-y-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
          Master the Skills <br />
          <span className="text-[#E31E24]">Top Employers</span> Demand.
        </h1>

        <p className="text-xl leading-relaxed text-white/70 max-w-xl">
          Unlock your future in finance with elite mentorship, practical skills, and career-defining opportunities.
        </p>

        <div className="flex flex-wrap gap-6 pt-4">
          <a href="#apply-form">
          <button className="bg-[#E31E24] text-white px-10 py-4 font-semibold text-lg tracking-wide rounded-full shadow-[0_0_20px_rgba(227,30,36,0.6)] hover:shadow-[0_0_30px_rgba(227,30,36,0.8)] transition duration-300">
  Apply Now
</button>


          </a>
          <a href="#brochure">

          <button  className="border border-white/20 text-white/80 hover:bg-white/10 px-10 py-4 rounded-full transition duration-300 tracking-wide">
            Download Brochure
          </button>
          </a>
        </div>
      </div>

      {/* Right Content: Hero Image */}
      <div className="flex justify-center lg:justify-end relative">
        <div className="relative">
          <img
            src="/herosection.png"
            alt="Super Accountant Hero"
            className="h-[500px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0E1423] via-transparent to-transparent opacity-20 blur-2xl"></div>
        </div>
      </div>

    </div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
</section>


{/* Why SuperAccountant */}
<section 
  className="relative py-24 bg-[#0E1423] text-white "
  style={{
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  }}
>
  {/* Softer, more natural top gradient */}
  <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/70 to-transparent z-0 pointer-events-none"></div>

  <div className="relative container mx-auto px-8 z-10">
    <h2 className="text-5xl font-extrabold text-center mb-18 leading-tight tracking-tight">
      Why <span className="text-[#E31E24]">SuperAccountant?</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
      <div className="text-center p-10 rounded-3xl bg-[#121A2C] hover:shadow-xl transition duration-300 group">
        <div className="w-20 h-20 bg-[#E31E24]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-[#E31E24]" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#E31E24] transition">
          100% Placement Assistance
        </h3>
        <p className="text-white/60 text-base">7 Guaranteed Interviews</p>
      </div>

      <div className="text-center p-10 rounded-3xl bg-[#121A2C] hover:shadow-xl transition duration-300 group">
        <div className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-10 h-10 text-[#3B82F6]" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#3B82F6] transition">
          100% Hands-on Learning
        </h3>
        <p className="text-white/60 text-base">Practical, Real-World Skills</p>
      </div>

      <div className="text-center p-10 rounded-3xl bg-[#121A2C] hover:shadow-xl transition duration-300 group">
        <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <TrendingUp className="w-10 h-10 text-[#10B981]" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#10B981] transition">
          Avg Salary: ₹3L-₹4L LPA
        </h3>
        <p className="text-white/60 text-base">Industry-Standard Packages</p>
      </div>

      <div className="text-center p-10 rounded-3xl bg-[#121A2C] hover:shadow-xl transition duration-300 group">
        <div className="w-20 h-20 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-10 h-10 text-[#8B5CF6]" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#8B5CF6] transition">
          Tool-Based Learning
        </h3>
        <p className="text-white/60 text-base">Excel, Tally, PowerBI</p>
      </div>
    </div>
  </div>
</section>


      {/* Program Overview */}
      <section
  className="relative py-24 text-white"
  style={{
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundColor: '#0E1423',
  }}
>
  <div className="container mx-auto px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
        Program <span className="text-[#E31E24]">Overview</span>
      </h2>
      <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
        SuperAccountant is a 45-day program designed to make you industry-ready in finance and accounting.
        You'll gain real-world skills, industry-recognized tools, and personal mentorship to land a job fast.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
      <div className="text-center p-10 rounded-3xl bg-[#264174]/90 backdrop-blur-md shadow-lg">
        <Clock className="w-10 h-10 text-[#BCE3F9] mx-auto mb-4" />
        <h3 className="font-semibold text-xl text-white mb-1">Duration</h3>
        <p className="text-white/70 text-base">45 Days</p>
      </div>
      <div className="text-center p-10 rounded-3xl bg-[#264174]/90 backdrop-blur-md shadow-lg">
        <DollarSign className="w-10 h-10 text-[#10B981] mx-auto mb-4" />
        <h3 className="font-semibold text-xl text-white mb-1">Fees</h3>
        <p className="text-white/70 text-base">₹24,999/- (Incl. GST)</p>
      </div>
      <div className="text-center p-10 rounded-3xl bg-[#264174]/90 backdrop-blur-md shadow-lg">
        <MapPin className="w-10 h-10 text-[#E31E24] mx-auto mb-4" />
        <h3 className="font-semibold text-xl text-white mb-1">Location</h3>
        <p className="text-white/70 text-base">Downtown Mall, Lakdikapul, Hyderabad</p>
      </div>
      <div className="text-center p-10 rounded-3xl bg-[#264174]/90 backdrop-blur-md shadow-lg">
        <GraduationCap className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
        <h3 className="font-semibold text-xl text-white mb-1">Eligibility</h3>
        <p className="text-white/70 text-base">B.Com/M.Com/MBA students & grads</p>
      </div>
    </div>
  </div>
</section>




      {/* Program Curriculum */}
     <section
  id="curriculum"
  className="relative pt-24 pb-24 text-white bg-[#0E1423]"
  style={{
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
  }}
>
  <div className="container mx-auto px-8 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-20 leading-tight tracking-tight">
      Program <span className="text-[#E31E24]">Curriculum</span>
    </h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
      {curriculumData.map((item, index) => (
        <div
          key={index}
          className="bg-[#121A2C]/90 rounded-3xl p-10 backdrop-blur-md hover:shadow-xl transition"
        >
          <button
            onClick={() => setOpenCurriculum(openCurriculum === index ? null : index)}
            className="w-full text-left"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#264174]/20 rounded-full flex items-center justify-center text-[#BCE3F9]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
                  openCurriculum === index ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {openCurriculum === index && (
            <div className="mt-6 ml-16 pr-4">
              <p className="text-white/70 leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>

    <div  className="text-center mt-20">
  <a href="/brochure.pdf" download >
    <button id="brochure" className="bg-[#E31E24] hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold tracking-wide transition-colors duration-300 flex items-center gap-2 mx-auto">
      <Download className="w-5 h-5" />
      Download Full Brochure
    </button>
  </a>
</div>
</div>
</section>


      {/* Learning Journey */}
   <section
className="relative text-white py-16 flex items-center min-h-[50vh]"  style={{
    backgroundColor: '#0E1423',
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
  }}>
 <div className="container mx-auto px-4 py-24">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-white">
    Learning Journey
  </h2>

  <div className="text-center mb-20">
    <span className="bg-[#BCE3F9] text-[#264174] px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-md">
      Be Industry-Ready in Just 45 Days!
    </span>
  </div>

  <div className="relative">
    <div className="absolute top-6 left-0 w-full h-px bg-[#BCE3F9]/40 z-0"></div>

    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
      {journeySteps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">
          {/* Red Dot with soft ring */}
          <div className="w-14 h-14 bg-[#E31E24] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-[#E31E24]/20">
            {index + 1}
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {step.title}
          </h3>
          <p className="text-[#BCE3F9] text-sm md:text-base max-w-[180px]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

</section>





      {/* Testimonials */}
     

      {/* FAQ Section */}
     {/* FAQ Section */}
<section
  id="FAQ"
  className="relative py-24 text-white"
  style={{
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundColor: '#0E1423',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1423]/90 to-transparent"></div>

  <div className="container mx-auto px-6 relative z-10 animate-fade-slide">
    <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight tracking-tight">
      Frequently <span className="text-[#E31E24]">Asked Questions</span>
    </h2>

    <div className="relative space-y-12 max-w-4xl mx-auto">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`relative max-w-lg rounded-2xl bg-[#121A2C]/80 backdrop-blur-md shadow-lg transition-all duration-300 ${
            index % 2 === 0 ? 'ml-auto' : 'mr-auto'
          }`}
        >
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full px-8 py-6 text-left hover:bg-white/5 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-lg">{faq.question}</h3>
              <ChevronDown
                className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                  openFaq === index ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {openFaq === index && (
            <div className="px-8 pb-6 text-white/80 text-base leading-relaxed animate-fade-slide">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


{/* Contact & Enquiry Form Section */}
<section
  className="relative py-24 text-white"
  style={{
    backgroundImage: "url('/blue.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundColor: '#0E1423',
  }}
>
  {/* Top fade into black for smooth transition */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/0 z-0"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto animate-fade-slide">
      <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight tracking-tight">
        Ready to <span className="text-[#E31E24]">Transform Your Career?</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#BCE3F9]" />
              <span>+91 96529 74428</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#BCE3F9]" />
              <span>info@superaccountant.in</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#BCE3F9]" />
              <span>Unit 422, Downtown Mall, Lakdikapul, Hyderabad</span>
            </div>
          </div>
        </div>

        <div id="apply-form">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 rounded-lg bg-white/5 border border-white/20 placeholder-white/60 text-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 rounded-lg bg-white/5 border border-white/20 placeholder-white/60 text-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-4 rounded-lg bg-white/5 border border-white/20 placeholder-white/60 text-white"
              required
            />
            <textarea
              placeholder="What do you want to ask?"
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              rows={4}
              className="w-full p-4 rounded-lg bg-white/5 border border-white/20 placeholder-white/60 text-white resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#E31E24] text-white p-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* form responses script*/}
    

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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 96529 74428</p>
                <p>info@superaccountant.in</p>
                <p>Unit 422, Downtown Mall,Lakdikapul, Hyderabad</p>
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