import styled from "@emotion/styled";
import { MessageList } from "./MessageList";

type ChatWindowProps = {
  messages: string[];
};

export const ChatWindow = ({ messages }: ChatWindowProps) => {
  return (
    <ChatWindowWrapper>
      <MessageList messageList={messages} />
    </ChatWindowWrapper>
  );
};

const ChatWindowWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "1rem",
  width: "100%",
  height: "100%",
  backgroundColor: "#F9FAFB",
});
