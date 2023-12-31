import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { ContactsWindow } from "../components/ContactsWindow";
import { ChatWindow } from "../components/ChatWindow";

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
        <ChatWindow
          messages={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
          onEnter={handleSendMessage}
          value={inputValue}
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
