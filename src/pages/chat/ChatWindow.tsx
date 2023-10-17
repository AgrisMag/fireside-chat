import styled from "@emotion/styled";

export const ChatWindow = () => {
  return (
    <ChatPageWrapper>
      <h1>Chat Window</h1>
    </ChatPageWrapper>
  );
};

const ChatPageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#395721",
  width: "100%",
  height: "100vh",
});
