// src/components/Nav.tsx
export default function Nav() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div className="flex flex-col items-start">
        <img
          src="/SuperAccountant.png"
          alt="Super Accountant Logo"
          className="h-20 w-auto"
        />
      </div>

      <nav className="flex space-x-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Courses</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Contact</a>
      </nav>
    </header>
  );
}
