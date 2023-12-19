import styled from "@emotion/styled";

type ContactProps = {
  onClick?: () => void;
  contactName: string;
  selectedContact: boolean;
};

export const Contact = ({ contactName, selectedContact }: ContactProps) => (
  <ContactWrapper selectedContact={selectedContact}>
    {contactName}
  </ContactWrapper>
);

type ContactWrapperProps = {
  selectedContact: boolean;
};

const ContactWrapper = styled("div")(
  ({ selectedContact }: ContactWrapperProps) => ({
    display: "flex",
    margin: "10px",
    border: "1px solid #fff",
    padding: "10px",
    backgroundColor: selectedContact ? "#9b6464" : "#2b2a53",
  })
);
