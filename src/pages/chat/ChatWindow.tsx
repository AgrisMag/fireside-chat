import styled from "@emotion/styled";

type ChatMessageProps = {
  message: string[];
};

export const ChatWindow = ({ message }: ChatMessageProps) => {
  return (
    <ChatPageWrapper>
      <MessageWrapper>
        {message.reverse().map((message) => (
          <li>{message}</li>
        ))}
      </MessageWrapper>
    </ChatPageWrapper>
  );
};

const ChatPageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#395721",
  width: "100%",
  height: "100%",
});

const MessageWrapper = styled("ul")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: "100%",
  height: "100%",
  padding: "10px",
  listStyle: "none",
});
