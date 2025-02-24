import React, { useEffect, useState } from "react";

// Components
import BarsChart from "./BarsChart";
import GaugeChart from "./GaugeChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";

/**
 * Composant permettant d'afficher le graphique correspondant au type donné.
 * @param {Object} props
 * @param {string} props.chartType - Le type de graphique à afficher.
 * @param {any} props.chartData - Les données du graphique.
 * @returns {JSX.Element | null}
 */
export default function Chart({ chartType, chartData }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  // Définition du graphique à afficher selon le type
  const chartComponents = {
    bar: <BarsChart data={chartData} />,
    line: <LineChart data={chartData} />,
    radar: <RadarChart data={chartData} />,
    gauge: <GaugeChart data={chartData} />,
  };

  // useEffect exécuté une seule fois 
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  return (
    <section className={`chart chart__${chartType}`} id={chartType}>
      {chartComponents[chartType] || null}
    </section>
  );
}
