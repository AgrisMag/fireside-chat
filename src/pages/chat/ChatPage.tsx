import styled from "@emotion/styled";
import { ContactList } from "./ContactList";
import { ChatWindow } from "./ChatWindow";
import { TextInput } from "../../components/Input";
import { useState } from "react";
import { Button } from "../../components/Button";

export const ChatPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string[]>([]);

  const handleInputChange = (value: string) => {
    console.log(value);
    setInputValue(value);
  };

  const handleInputSubmit = () => {
    if (inputValue) {
      setMessage((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleInputSubmit();
    }
  };

  return (
    <ChatPageWrapper>
      <ContactList />
      <ChatAndInputWrapper>
        <ChatWindow message={message} />
        <TextInput
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          onKeyPress={handleKeyPress}
        />
        <InputButton onClick={handleInputSubmit}>Send</InputButton>
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

const InputButton = styled(Button)(() => ({
  position: "absolute",
  bottom: "10px",
  right: "10px",
}));
