import styled from "@emotion/styled";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { ChangeEvent } from "react";

type ChatWindowProps = {
  messages: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
  value: string;
};

export const ChatWindow = ({
  messages,
  onChange,
  onEnter,
  value,
}: ChatWindowProps) => {
  return (
    <ChatWindowWrapper>
      <MessageList messageList={messages} />
      <ChatInput
        type="text"
        value={value}
        name={"message"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
        onEnter={onEnter}
        id="message"
      />
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
