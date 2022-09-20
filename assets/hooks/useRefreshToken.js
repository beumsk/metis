import axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/api/getUser", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));

      console.log(response.data);
      return {
        ...prev,
        roles: response.data.roleNames,
        accessToken: response.data.credentials,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
