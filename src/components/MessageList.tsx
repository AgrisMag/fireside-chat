import styled from "@emotion/styled";
import { Message } from "./Message";

type MessageListProps = {
  messageList: string[];
};

export const MessageList = ({ messageList }: MessageListProps) => {
  return (
    <MessageListWrapper>
      {messageList.map((message, index) => (
        <Message key={index}>{message}</Message>
      ))}
    </MessageListWrapper>
  );
};

const MessageListWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "1rem",
  width: "100%",
  height: "100%",
  backgroundColor: "#F9FAFB",
});
