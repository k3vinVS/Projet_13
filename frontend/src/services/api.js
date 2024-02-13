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
    const user = data.body;
    console.log("informations utilisateur", user);
    localStorage.setItem("userData", JSON.stringify(user));
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserToken = async (formData) => {
  const res = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();

  return data;
};
