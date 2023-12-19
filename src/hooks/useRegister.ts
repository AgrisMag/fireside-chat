import { useState } from "react";
import { LOCALHOST } from "../utils/helpers";

type RegistrationData = {
  username: string;
  email: string;
  password: string;
};

type RegistrationResponse = {
  success: boolean;
  message: string;
};

function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (
    data: RegistrationData
  ): Promise<RegistrationResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${LOCALHOST}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: RegistrationResponse = await response.json();

      // Handle response here
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
}

export default useRegister;
