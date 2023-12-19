import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { ContactsWindow } from "../components/ContactsWindow";
import { ChatWindow } from "../components/ChatWindow";
import { ChatInput } from "../components/ChatInput";

export const ChatPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string[]>([]);

  const handleSendMessage = () => {
    setMessage([...message, inputValue]);
    setInputValue("");
  };

  return (
    <ChatPageWrapper>
      <ContactsWindow
        contacts={["John", "Jane", "Joe"]}
        selectedContact={"John"}
        onContactSelect={(contact) => console.log(contact)}
      />
      <ChatAndInputWrapper>
        <ChatWindow messages={message} />
        <ChatInput
          type="text"
          value={inputValue}
          name={"message"}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
          onEnter={handleSendMessage}
          id="message"
        />
      </ChatAndInputWrapper>
    </ChatPageWrapper>
  );
};

const ChatPageWrapper = styled("div")({
  display: "flex",
});

const ChatAndInputWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100vh",
});
