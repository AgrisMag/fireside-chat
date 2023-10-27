import { useNavigate } from "react-router-dom";

type LandingPageProps = {
  children: React.ReactNode;
};

export const LandingPage = ({ children }: LandingPageProps) => {
  const navigate = useNavigate();

  const handleNavigate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.name);
    navigate(`/${event.currentTarget.name}`);
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-[#f0f0f0] p-6">
        {/* First half content */}
        <div>Introduction to chat app with picture</div>
        {/* Add styling, background image, or animation here */}
      </div>
      <div className="p-6 flex align-middle justify-center">
        <div>
          <button
            className="px-3 py-1 m-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={handleNavigate}
            name=""
          >
            Sign in
          </button>
          <button
            className="px-3 py-1 m-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={handleNavigate}
            name="signup"
          >
            Sign Up
          </button>
        </div>
        {/* Second half content */}
        {children}
        {/* Add links to register and sign-in pages here */}
      </div>
    </div>
  );
};
