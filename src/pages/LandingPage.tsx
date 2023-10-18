import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Label } from "../components/Label";
import { Button } from "../components/Button";

type LoginInfo = {
  email: string;
  password: string;
};

export const LandingPage = () => {
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
        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          onChange={handleLoginInfoChange}
          value={loginInfo.email}
          name={"email"}
          placeholder="Email"
          id="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <input
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
