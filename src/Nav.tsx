export default function Nav() {
  return (
    <header className="flex items-center justify-between px-12 py-4 bg-gray-50 shadow-sm text-gray-800 sticky top-0 z-50">
      {/* Left: Logo and Tagline */}
      <div className="flex items-center space-x-4">
       <div className="relative w-[300px] h-[80px] border-2 border-[#264174]">
  <img
    src="/SuperAccountant.png"
    alt="Super Accountant Logo"
    className="h-[70px] w-auto object-contain"></img>
</div>


        {/* <img
          src="/SuperAccountant.png"
          alt="Super Accountant Logo"
 className="w-full h-full object-contain"        /> */}
      </div>

      {/* Right: Navigation Links */}
      <nav className="flex items-center gap-8 font-semibold uppercase tracking-wide text-lg">
        <a href="#" className="hover:text-[#264174]">Home</a>
        <a href="#curriculum" className="hover:text-[#264174]">Curriculum</a>
        <a href="#FAQ" className="hover:text-[#264174]">FAQ</a>
        
        <a
          href="#apply-form"
          className="bg-[#E31E24] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Apply Now
        </a>
      </nav>
    </header>
  );
}
