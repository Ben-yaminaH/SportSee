// Fichier : useApiData.js

import { useFetch } from "../react-utils/hooks/useFetch";

/**
 * Hook pour récupérer les informations de l'utilisateur
 * @param {number} id - L'ID de l'utilisateur
 * @returns {Object} - Les données de l'utilisateur
 */
export const useUserInfo = (id) => {
  const urlAPI = `http://localhost:3000/user/${id}`;
  console.log(urlAPI);
  return useFetch(`${urlAPI}`);
};


/**
 * Hook pour récupérer les données d'activité de l'utilisateur
 * @param {number} id - L'ID de l'utilisateur
 * @returns {Object} - Les données d'activité
 */
export const useActivityInfo = (id) => {
  const urlAPI = `http://localhost:3000/user/${id}`;
  return useFetch(`${urlAPI}/activity`);
};

/**
 * Hook pour récupérer les données des sessions de l'utilisateur
 * @param {number} id - L'ID de l'utilisateur
 * @returns {Object} - Les données des sessions
 */
export const useSessionsInfo = (id) => {
  const urlAPI = `http://localhost:3000/user/${id}`;
  return useFetch(`${urlAPI}/average-sessions`);
};

/**
 * Hook pour récupérer les données de performance de l'utilisateur
 * @param {number} id - L'ID de l'utilisateur
 * @returns {Object} - Les données de performance
 */
export const usePerformanceInfo = (id) => {
  const urlAPI = `http://localhost:3000/user/${id}`;
  return useFetch(`${urlAPI}/performance`);
};
