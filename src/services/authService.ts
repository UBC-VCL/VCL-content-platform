import React, { useEffect, useState } from 'react';
import { loginUser, checkAuth, logoutUser } from './adapters/authAdapter';
import { TEXT } from '@/statics';
import { useAuthStore } from 'stores/AuthStore';
import { useAppStore } from 'stores/AppStore';

export const useHandleCheckAuth = () => {

  const { refresh_token, isLoggingIn, setAccessToken, logout } = useAuthStore((state) => state)
  const setAlert = useAppStore((state) => state.setAlert)

  const handleCheckAuth = () => {
    if (refresh_token && !isLoggingIn) {
      checkAuth(refresh_token)
        .then((res) => {
          if (res.data) {
            setAccessToken(res.data.access_token);
            setAlert(TEXT.ALERTS.AUTH_SUCCESS);
          } else {
            logout()
            setAlert(TEXT.ALERTS.AUTH_FAILED)
          }
        })
        .catch(() => console.error('Error: authService.ts checkAuth call'));
    }
  };

  React.useEffect(() => {
    handleCheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useHandleLogin = () => {
  const { access_token, setIsLoggingIn, setAccessToken, setPermissions, setRefreshToken, setUsername } = useAuthStore((state) => state);
  const setAlert = useAppStore((state) => state.setAlert);

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Cleanup state for component unmounting
  useEffect(() => {
    return () => {
      setIsFetching(false);
      setError(null);
      setSuccess(null);
    };
  }, []);

  const handleLogin = async (username: string, password: string) => {
    setIsFetching(true);
    setIsLoggingIn(true);

    loginUser(username, password)
      .then((res) => {
        if (res.data) {
          console.log("login", res.data)
          setAccessToken(res.data.access_token);
          setRefreshToken(res.data.refresh_token);
          setUsername(res.data.username);
          setPermissions(res.data.permissions);

          setAlert(TEXT.ALERTS.LOGIN_SUCCESS);

          setSuccess(res.message);
          setError(null);
        } else {
          setSuccess(null);
          setError(res.message);
        }
      })
      .then(() => {
        setIsFetching(false);
        setIsLoggingIn(false);
      })
      .catch(() => console.error('Error: authService.ts loginUser call'));
  };
  console.log(access_token)

  return { handleLogin, isFetching, error, success };
};

export const useHandleLogout = () => {

  const { access_token, isLoggingIn, logout: logUserOut } = useAuthStore((state) => state);
  const setAlert = useAppStore((state) => state.setAlert);

  const logout = async () => {
    if (access_token && !isLoggingIn) {
      logoutUser(access_token)
        .then(() => {
          logUserOut()
          setAlert(TEXT.ALERTS.LOGOUT_SUCCESS);
        })
        .catch(() => console.error('Error: authService.ts logoutUser call'));
    }
  };

  return { logout };
};
