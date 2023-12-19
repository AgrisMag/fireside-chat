import styled from "@emotion/styled";
import { ContactList } from "./ContactList";

type ContactsWindowProps = {
  contacts: string[];
  selectedContact: string;
  onContactSelect: (contact: string) => void;
};

export const ContactsWindow = ({
  contacts,
  selectedContact,
  onContactSelect,
}: ContactsWindowProps) => {
  return (
    <ContactsWindowWrapper>
      <ContactList
        contacts={contacts}
        selectedContact={selectedContact}
        setSelectedContact={onContactSelect}
      />
    </ContactsWindowWrapper>
  );
};

const ContactsWindowWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2b2a53",
  width: "30%",
});
