// GET THE TOKEN OF THE USER -----
export const getUserToken = async (formData) => {
  const res = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  localStorage.setItem("userToken", data.body.token);

  return data.body.token;
};

// GET THE DATA OF THE USER -----
export const getUserProfile = async (formData) => {
  try {
    // getUserToken(formData);
    const res = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formData}`,
      },
    });

    const data = await res.json();
    const user = data.body;
    // console.log("informations utilisateur", user);
    localStorage.setItem("userData", JSON.stringify(user));
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// DELETE THE LOCALSTORAGE OF USER -----
export const deleteUserStorage = () => {
  const deleteUserData = localStorage.clear();
  console.log("test");
  return deleteUserData;
};
