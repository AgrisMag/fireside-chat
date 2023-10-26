type LandingPageProps = {
  children: React.ReactNode;
};

// TODO: First half with some text and background. Add styling, add background image or animation
// TODO: Second half where children component is displayed. Should be sign in or register with switching option on top right corner. Add links to register and sign in pages

export const LandingPage = ({ children }: LandingPageProps) => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#f0f0f0] p-6">
        {/* First half content */}
        <div>Introduction to chat app with picture</div>
        {/* Add styling, background image, or animation here */}
      </div>
      <div className="p-6">
        {/* Second half content */}
        {children}
        {/* Add links to register and sign-in pages here */}
      </div>
    </div>
  );
};
