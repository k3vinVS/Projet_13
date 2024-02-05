export const getUserProfile = async (token) => {
  try {
    const res = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log("informations utilisateur", data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
