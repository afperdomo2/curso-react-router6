/* eslint-disable react/prop-types */
import { useContext } from "react";

import { AuthContext } from "./AuthProvider";

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };
