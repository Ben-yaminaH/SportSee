import React from "react";
import { RadialBar, RadialBarChart, Tooltip } from "recharts";

// Utils
import { toPercent } from "../react-utils/functions/helperFunctions";
import FormatChartData from "../services/formatChartData";

/**
 * Composant pour afficher un graphique en jauge représentant la progression d'un objectif.
 * @param {Object} props
 * @param {number} props.data - Donnée représentant le score de l'objectif.
 * @returns {JSX.Element}
 */
export default function GaugeChart({ data }) {
  const percentageValue = data * 100;
  const stringPercentage = toPercent(data);

  const chartFormatter = new FormatChartData();
  const formattedData = chartFormatter.setGaugeFormattedData(data);

  const startAngleDegrees = 90;

  return (
    <div className="gauge-chart">
      <h2 className="gauge-chart__percentage">{stringPercentage}</h2>
      <p className="gauge-chart__subtitle">de votre objectif</p>

      <RadialBarChart
        width={330}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        data={formattedData}
        startAngle={startAngleDegrees}
        endAngle={startAngleDegrees + (percentageValue * 360) / 100}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        className="gauge-chart__svg-chart"
      >
        <RadialBar
          name="score"
          dataKey="value"
          strokeLinejoin="round"
          fill="var(--bg-color-primary)"
          cornerRadius={100}
        />
        <Tooltip content={<GaugeCustomTooltip />} offset={20} wrapperStyle={{ outline: "none" }} />
      </RadialBarChart>
    </div>
  );
}

/**
 * Composant personnalisé pour l'affichage du tooltip du graphique en jauge.
 * @param {Object} props
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Données du tooltip.
 * @returns {JSX.Element | null}
 */
function GaugeCustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const scoreData = payload[0].payload.value;

  return (
    <div className="tool-tip__gauge-chart">
      <p className="tool-tip__gauge-chart-text">{`Score actuel de votre objectif: ${scoreData}/100`}</p>
    </div>
  );
}
