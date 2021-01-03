import React, { useState, useEffect, useContext, createContext } from "react";
const authContext = createContext();

const fakeAuth = {
  isAuthenticated: false,
  signin(userName, cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

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

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (userName, cb) => {
    return fakeAuth.signin(userName, () => {
      setUser(userName);
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb()
    });
  };

  useEffect(() => {
    const unsubscribe = (user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
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