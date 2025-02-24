import React from "react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Services
import FormatChartData from "../services/formatChartData";

/**
 * Composant pour afficher un graphique en ligne représentant les sessions moyennes.
 * @param {Object} props
 * @param {Array} props.data - Données des sessions moyennes.
 * @returns {JSX.Element}
 */
export default function LineChart({ data }) {
  const chartDataFormatter = new FormatChartData();
  const formattedData = chartDataFormatter.setLineFormattedData(data);

  return (
    <div className="line-chart">
      <ResponsiveContainer>
        <AreaChart data={formattedData} margin={{ top: 60, right: 20, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--bg-color-tertiary)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--bg-color-tertiary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="var(--text-color-quaternary)" />
          <YAxis dataKey="min" hide />
          <Area
            type="monotone"
            dataKey="min"
            stroke="var(--text-color-quaternary)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorMin)"
          />
          <Tooltip content={<LineCustomTooltip />} wrapperStyle={{ outline: "none" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * Tooltip personnalisé pour le graphique en ligne.
 * @param {Object} props
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Données du tooltip.
 * @returns {JSX.Element | null}
 */
function LineCustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const activityData = payload[0].payload.min;

  return (
    <div className="tool-tip__line-chart">
      <p className="tool-tip__line-chart-text">{`${activityData} min`}</p>
    </div>
  );
}
