import React, { useState, useEffect } from "react";
import Chart from "./components/Chart";
import KeyDataCard from "./components/KeyDataCard";

import {useUserInfo, useActivityInfo,useSessionsInfo,usePerformanceInfo} from "./services/_app.service";
import SpinLoader from "./components/SpinLoader";
import ApiError from "./components/ApiError";
import "./styles/Profile.scss"

export default function Home() {
  let userId = 12;

  

  // Données pour le prénom, le graphique en jauge et les cartes de données clés
  const generalInfoData = useUserInfo(userId);

  // Données pour les graphiques
  const activityInfoData = useActivityInfo(userId);
  const sessionsInfoData = useSessionsInfo(userId);
  const performanceInfoData = usePerformanceInfo(userId);

  // États locaux pour les données
  const [firstName, setFirstName] = useState("");
  const [keyCardData, setKeyCardData] = useState("");
  const [barsChartData, setBarsChartData] = useState("");
  const [lineChartData, setLineChartData] = useState("");
  const [radarChartData, setRadarChartData] = useState("");
  const [gaugeChartData, setGaugeChartData] = useState("");

  useEffect(() => {
    const userInfos = generalInfoData.data?.data?.userInfos;
    const keyData = generalInfoData.data?.data?.keyData;
    const gaugeData = generalInfoData.data?.data?.todayScore
      ? generalInfoData.data?.data?.todayScore
      : generalInfoData.data?.data?.score;
    const barsData = activityInfoData.data?.data;
    const lineData = sessionsInfoData.data?.data;
    const radarData = performanceInfoData.data?.data;

    setFirstName(userInfos?.firstName);
    setKeyCardData(keyData);
    setBarsChartData(barsData);
    setLineChartData(lineData);
    setRadarChartData(radarData);
    setGaugeChartData(gaugeData);
  }, [generalInfoData, activityInfoData, sessionsInfoData, performanceInfoData]);

  const fetchedDataArray = [
    generalInfoData,
    activityInfoData,
    sessionsInfoData,
    performanceInfoData,
  ];

  const dataHasError = fetchedDataArray.some((fetchedData) => fetchedData.hasError);

  if (dataHasError) {
    const dataErrorMessage = fetchedDataArray[0]?.errorMessage || fetchedDataArray[0]?.errorMessage.message;
    return <ApiError apiErrorMessage={dataErrorMessage} />;
  }

  const dataIsLoading = fetchedDataArray.some((fetchedData) => fetchedData.isLoading);

  if (dataIsLoading) {
    return <SpinLoader />;
  }

  return (
    <>
      {/* Head : Métadonnées pour SEO et titre */}
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Bienvenue dans la page de profil de SportSee!" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Accueil" />
      <meta property="og:description" content="Bienvenue dans la page de profil de SportSee!" />
      <meta property="og:image" content="/images/icons/sport-see-icon.png" />
      <meta property="og:url" content="www.sport-see.com" />
      <title>Accueil</title>
      <link rel="icon" type="image/png" href="/images/icons/sport-see-icon.png" />

      {/* Corps de la page */}
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__greeting-sentence">
            Bonjour <span className="profile__name">{firstName}</span>
          </h1>
          <p className="profile__recap-sentence">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>

          <div className="profile__data-container">
            <section className="profile__charts-data">
              <Chart chartType="bar" chartData={barsChartData} />
              <div className="profile_blocks">
              <Chart chartType="line" chartData={lineChartData} />
              <Chart chartType="radar" chartData={radarChartData} />
              <Chart chartType="gauge" chartData={gaugeChartData} />
              </div>
            </section>

            <section className="profile__key-data">
              <KeyDataCard dataType="calorieCount" keyCardData={keyCardData} />
              <KeyDataCard dataType="proteinCount" keyCardData={keyCardData} />
              <KeyDataCard dataType="carbohydrateCount" keyCardData={keyCardData} />
              <KeyDataCard dataType="lipidCount" keyCardData={keyCardData} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

