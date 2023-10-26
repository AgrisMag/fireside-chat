type LandingPageProps = {
  children: React.ReactNode;
};

// TODO: First half with some text and background. Add styling, add background image or animation
// TODO: Second half where children component is displayed. Should be sign in or register with switching option on top right corner. Add links to register and sign in pages

export const LandingPage = ({ children }: LandingPageProps) => {
  return (
    <div className="">
      <div>Introduction to chat app with picture</div>
      <div>{children}</div>
    </div>
  );
};
