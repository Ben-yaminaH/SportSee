import React from "react";
import PropTypes from "prop-types";
import {
  RadarChart as RadarChartJS,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Services
import FormatChartData from "../services/formatChartData";

const COLORS = {
  grid: "var(--body-bg-color)",
  radarFill: "var(--bg-color-primary)",
};

/**
 * Composant pour afficher un graphique radar des performances.
 * @param {Object} props
 * @param {Array} props.data - Données des performances.
 * @returns {JSX.Element}
 */
export default function RadarChart({ data = [] }) {
  const chartDataFormatter = new FormatChartData();
  const formattedData = chartDataFormatter.setRadarFormattedData(data);

  return (
    <div className="radar-chart">
      <ResponsiveContainer>
        <RadarChartJS outerRadius={90} data={formattedData}>
          <PolarGrid stroke={COLORS.grid} />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 250]} stroke={COLORS.grid} />
          <Radar dataKey="grade" fill={COLORS.radarFill} fillOpacity={0.7} />
          <Tooltip content={<RadarCustomTooltip />} wrapperStyle={{ outline: "none" }} />
        </RadarChartJS>
      </ResponsiveContainer>
    </div>
  );
}

RadarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

/**
 * Tooltip personnalisé pour le graphique radar.
 * @param {Object} props
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Données du tooltip.
 * @returns {JSX.Element | null}
 */
function RadarCustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const { subject, grade } = payload[0].payload;

  return (
    <div className="tool-tip__radar-chart">
      <p className="tool-tip__radar-chart-text">{`Type de performance: ${subject}`}</p>
      <p className="tool-tip__radar-chart-text">{`Degré de performance: ${grade}/250`}</p>
    </div>
  );
}
