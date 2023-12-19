import styled from "@emotion/styled";
import { Contact } from "./Contact";

type ContactListProps = {
  contacts: string[];
  selectedContact: string;
  setSelectedContact: (name: string) => void;
};

export const ContactList = ({
  contacts,
  selectedContact,
  setSelectedContact,
}: ContactListProps) => {
  return (
    <ContactListWrapper>
      <h1>Contact List</h1>
      {contacts.map((contact: string) => (
        <Contact
          key={contact}
          contactName={contact}
          onClick={() => setSelectedContact(contact)}
          selectedContact={selectedContact === contact}
        />
      ))}
    </ContactListWrapper>
  );
};

const ContactListWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2b2a53",
  width: "30%",
});
