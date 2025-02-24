// Fichier : dataTypes.js

// Données générales de l'utilisateur
export const userData = {
  data: {
    id: 1,
    userInfos: {
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
    },
    todayScore: 85,
    keyData: {
      calorieCount: 2000,
      proteinCount: 150,
      carbohydrateCount: 250,
      lipidCount: 80,
    },
  },
};

// Données d'activité de l'utilisateur
export const activityData = {
  data: {
    userId: 1,
    sessions: [
      { day: "2025-02-01", kilogram: 70, calories: 300 },
      { day: "2025-02-02", kilogram: 72, calories: 320 },
      // Ajoute d'autres sessions selon tes besoins
    ],
  },
};

// Données des sessions de l'utilisateur
export const sessionsData = {
  data: {
    userId: 1,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 45 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 60 },
      { day: 6, sessionLength: 55 },
      { day: 7, sessionLength: 30 },
    ],
  },
};

// Données de performance de l'utilisateur
export const performanceData = {
  data: {
    userId: 1,
    kind: {
      "1": "cardio",
      "2": "energy",
      "3": "endurance",
      "4": "strength",
      "5": "speed",
      "6": "intensity",
    },
    data: [
      { value: 80, kind: 1 },
      { value: 90, kind: 2 },
      { value: 75, kind: 3 },
      { value: 85, kind: 4 },
      { value: 95, kind: 5 },
      { value: 60, kind: 6 },
    ],
  },
};

// Données générales (Chargement, Erreurs, etc.)
export const dataState = {
  data: [],
  isLoading: true,
  hasError: false,
  errorMessage: "",
};
