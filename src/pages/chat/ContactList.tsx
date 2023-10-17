import styled from "@emotion/styled";
import { useState } from "react";

const contactList: string[] = ["John", "Jane", "Joe"];

export const ContactList = () => {
  const [selectedContact, setSelectedContact] = useState<number>(0);
  const handleContactSelect = (id: number) => {
    setSelectedContact(id);
  };

  return (
    <ContactListWrapper>
      <h1>Contact List</h1>
      {contactList.map((contact, id: number) => (
        <Contact
          key={id}
          onClick={() => handleContactSelect(id)}
          selectedContact={selectedContact === id}
        >
          {contact}
        </Contact>
      ))}
    </ContactListWrapper>
  );
};

type ContactProps = {
  selectedContact: boolean;
};

const ContactListWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2b2a53",
  width: "30%",
});

const Contact = styled("div")(({ selectedContact }: ContactProps) => ({
  display: "flex",
  margin: "10px",
  border: "1px solid #fff",
  padding: "10px",
  backgroundColor: selectedContact ? "#9b6464" : "#2b2a53",
}));
