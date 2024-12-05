// Hook que irá buscar as lojas e retornar as informações das lojas, o estado de carregamento e qualquer erro que possa ocorrer durante a requisição

import { useState, useEffect } from "react";
import { api } from "../services/api";

export const useFetchInterests = () => {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const response = await api.get();
        setInterests(response.data); //
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchInterests();
  }, []);

  return { interests, loading, error };
};
