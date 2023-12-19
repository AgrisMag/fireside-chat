import styled from "@emotion/styled";

type MessageProps = {
  children: string;
};

export const Message = ({ children }: MessageProps) => {
  return (
    <MessageWrapper>
      <MessageText>{children}</MessageText>
    </MessageWrapper>
  );
};

const MessageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  marginBottom: "1rem",
});

const MessageText = styled("p")({
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
});
