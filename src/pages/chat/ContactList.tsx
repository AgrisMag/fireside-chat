import styled from "@emotion/styled";

export const ContactList = () => {
  return (
    <ContactListWrapper>
      <h1>Contact List</h1>
    </ContactListWrapper>
  );
};

const ContactListWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2b2a53",
});
