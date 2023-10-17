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
      <ChatWindow />
      <TextInput type="text" onChange={handleInputChange} value={inputValue} />
    </ChatPageWrapper>
  );
};

const ChatPageWrapper = styled("div")({
  display: "block",
});
