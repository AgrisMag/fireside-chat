type LandingPageProps = {
  children: React.ReactNode;
};

export const LandingPage = ({ children }: LandingPageProps) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-[#f0f0f0] p-6">
        {/* First half content */}
        <div>Introduction to chat app with picture</div>
        {/* Add styling, background image, or animation here */}
      </div>
      <div className="p-6 flex align-middle justify-center">
        {/* Second half content */}
        {children}
        {/* Add links to register and sign-in pages here */}
      </div>
    </div>
  );
};
