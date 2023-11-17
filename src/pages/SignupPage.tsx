import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

type RegistrationInfo = { username: string; email: string; password: string };

export const SignUpPage = () => {
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo>({
    username: "",
    email: "",
    password: "",
  });

  const handleRegistration = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRegistrationInfo({ ...registrationInfo, [event.target.name]: value });
  };

  const handleSubmitRegistration = async () => {
    console.log("registrationInfo", registrationInfo);
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationInfo),
      });

      console.log("response", response);

      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        console.log("Registration successful:", data.message);
        // Optionally, you can redirect the user or perform other actions upon successful registration.
      } else {
        console.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <RegisterPageWrapper>
      <InputWrapper>
        <Input
          label="Username"
          type="text"
          value={registrationInfo.username}
          name={"username"}
          onChange={handleRegistration}
          id="username"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Email"
          type="email"
          value={registrationInfo.email}
          name={"email"}
          onChange={handleRegistration}
          id="registration-email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Password"
          type="password"
          value={registrationInfo.password}
          name={"password"}
          onChange={handleRegistration}
          id="registration-password"
        />
      </InputWrapper>
      <Button onClick={handleSubmitRegistration}>Register</Button>
    </RegisterPageWrapper>
  );
};

const RegisterPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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
