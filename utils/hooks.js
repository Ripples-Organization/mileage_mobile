import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback, useMemo } from "react";
import apiService from "./apiService";

export const useReduxApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();


  const handleAction = async (action, payload) => {
    setLoading(true);
    try {
      const response = await dispatch(action(payload));
      if (response.error) {
        throw response;
      }
      setData(response.payload);
      return response.payload;
    } catch (err) {
      setError(JSON.parse(err.error.message));
      return JSON.parse(err.error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleAction,
    loading,
    data,
    error,
  };
};

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleAction = async (actionType, payload) => {
    setLoading(true);
    try {
      const res = await actionType(payload || null);
      setData(res.data);
      return Promise.resolve(res.data);
    } catch (err) {
      setError(JSON.parse(err));
      return Promise.resolve(JSON.parse(err));
    } finally {
      setLoading(false);
    }
  };
  return {
    handleAction,
    loading,
    data,
    error,
  };
};

export const usePageImpression = ({ productId, type }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setData] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const { handleAction, data } = useApi();
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await handleAction(apiService.sendPageImpression, {
          user: user ? user?._id : "visitor",
          productId,
          type,
        });
        setData(res);
      } catch (err) {
        setError(JSON.parse(err));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    loading,
    error,
    data: datas,
  };
};

export const useLocalStorage = (key) => {
  const [value, setValue] = useState("");

  const getItemFromStorage = useCallback(async () => {
    const item = await localStorage.getItem(key);
    if (item) setValue(item);
  }, [key]);

  useEffect(() => {
    getItemFromStorage();
  }, [getItemFromStorage]);

  return {
    value,
  };
};

