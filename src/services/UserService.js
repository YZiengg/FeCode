import axios from 'axios';

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
   try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
    return res.data;
   } catch (error) {
    return error.response.data
   }
}

export const signupUser = async (data) => {
    try {
     const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
     return res.data;
    } catch (error) {
     return error.response.data
    }
 }


 export const getDetailsUser = async (id, access_token) => {
   try {
     const res = await axiosJWT.get(
       `${process.env.REACT_APP_API_URL}/user/get-details/${id}`, 
       {
         headers: { token: `Bearer ${access_token}` },
       }
     );
     return res.data;
   } catch (error) {
     return error.response.data;
   }
 };
 
 export const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/refresh-token`, {
        withCredentials: true
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/log-out`
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUser = async (id, data, access_token) => {
  try {
    const res = await axiosJWT.put(
      `${process.env.REACT_APP_API_URL}/user/update-user/${id}`,data,
      {
        headers: { token: `Bearer ${access_token}` },
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}; 
  