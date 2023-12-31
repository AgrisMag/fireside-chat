import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/shared/Button";
import { Input } from "../components/shared/Input";
import { useNavigate } from "react-router-dom";

type LoginInfo = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLoginInfo({ ...loginInfo, [event.target.name]: value });
  };

  const handleSignIn = () => {
    navigate("/chat");
  };

  return (
    <LandingPageWrapper>
      <InputWrapper>
        <Input
          label="Email"
          type="email"
          onChange={handleLoginInfoChange}
          value={loginInfo.email}
          name={"email"}
          placeholder="Email"
          id="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Password"
          type="password"
          onChange={handleLoginInfoChange}
          value={loginInfo.password}
          name="password"
          placeholder="Password"
          id="password"
        />
      </InputWrapper>
      <Button onClick={handleSignIn}>Submit</Button>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "15px",
  "& > *": {
    margin: "10px",
  },
});

const InputWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
