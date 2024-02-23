
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
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// UPDATE FIRSTNAME & LASTNAME OF USER -----
export const updateUserName = async (formData) => {
  const userToken = localStorage.getItem("userToken");
  const res = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  formData = data;
  // console.log(formData.body);
  return formData.body;
};

// DELETE THE LOCALSTORAGE OF USER -----
export const deleteUserStorage = () => {
  localStorage.clear();
};
