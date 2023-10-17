import styled from "@emotion/styled";
import { ContactList } from "./ContactList";
import { ChatWindow } from "./ChatWindow";
import { TextInput } from "../../components/Input";
import { useState } from "react";

export const ChatPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (value: string) => {
    console.log(value);
    setInputValue(value);
  };

  return (
    <ChatPageWrapper>
      <ContactList />
      <ChatAndInputWrapper>
        <ChatWindow />
        <TextInput
          type="text"
          onChange={handleInputChange}
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
  height: "100vh",
  width: "100%",
});
