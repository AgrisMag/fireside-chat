import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

type LoginInfo = {
  email: string;
  password: string;
};

export const SignInPage = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  const handleLoginInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLoginInfo({ ...loginInfo, [event.target.name]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted");
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
      <Button onClick={handleSubmit}>Submit</Button>
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
