import styled from "@emotion/styled";
import { useState } from "react";

type ContactList = {
  name: string;
  id: number;
};

const contactList = [
  { name: "John", id: 0 },
  { name: "Jane", id: 1 },
  { name: "Joe", id: 2 },
  { name: "Jill", id: 3 },
  { name: "Jack", id: 4 },
];

export const ContactList = () => {
  const [selectedContact, setSelectedContact] = useState<number>(0);
  const handleContactSelect = (id: number) => {
    setSelectedContact(id);
  };

  return (
    <ContactListWrapper>
      <h1>Contact List</h1>
      {contactList.map((contact: ContactList) => (
        <Contact
          key={contact.id}
          onClick={() => handleContactSelect(contact.id)}
          selectedContact={selectedContact === contact.id}
        >
          {contact.name}
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
