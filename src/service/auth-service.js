import baseUrl from "./base-url";

//function to login
const login = async (credentials) => {
  try {
    const apiUrl = `${baseUrl()}/auth/login`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    localStorage.setItem("jwtToken", data.token);

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const authService = {
  login,
};
