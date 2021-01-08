import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const authContext = createContext();

const fakeAuth = {
  isAuthenticated: false,
  accessToken: null,
  async signin( user, cb) {
    const res = await axios.post('http://localhost:5000/api/auth/signin', {
      username: user.username,
      password: user.password
    });
    fakeAuth.isAuthenticated = res.auth;
    fakeAuth.accessToken = res.accessToken;
    setTimeout(cb, 100); // fake async
  },
  async signout(cb) {
    const res = await axios.get('http://localhost:5000/api/auth/signout');
    fakeAuth.isAuthenticated = res.auth;
    fakeAuth.accessToken = res.accessToken;
    setTimeout(cb, 100);
  }
};

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signin = (user, cb) => {
    return fakeAuth.signin(user, () => {
      setUser(user.username);
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  useEffect(() => {
    const unsubscribe = (user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signout
  };
}

//Not used
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

