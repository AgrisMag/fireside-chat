import styled from "@emotion/styled";
import { ContactList } from "./ContactList";
import { ChatWindow } from "./ChatWindow";
import { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const ChatPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
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
        <Input
          type="text"
          label="Message"
          onChange={handleInputChange}
          value={inputValue}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
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
