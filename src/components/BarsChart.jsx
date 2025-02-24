import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


import FormatChartData from "../services/formatChartData";

/**
 * Composant pour afficher un graphique en barres représentant l'activité quotidienne.
 * @param {Object} props
 * @param {Array} props.data - Données d'activité.
 * @returns {JSX.Element}
 */
export default function BarsChart({ data }) {
  const chartDataFormatter = new FormatChartData();
  const formattedData = chartDataFormatter.setBarsFormattedData(data);

  const chartsMargins =
    window.innerWidth > 768
      ? { top: 15, right: 15, left: 65, bottom: 85 }
      : { top: 10, right: -5, left: 25, bottom: 85 };

  return (
    <div className="bars-chart">
      <div className="bars-chart__container">
        <p className="bars-chart__paragraph">Activité quotidienne</p>
        <ul className="bars-chart__legend-list">
          <li className="bars-chart__legend-item bars-chart__legend-item--dark-grey-dot">
            Poids (kg)
          </li>
          <li className="bars-chart__legend-item bars-chart__legend-item--red-dot">
            Calories (Kcal)
          </li>
        </ul>
      </div>
      <ResponsiveContainer>
        <BarChart data={formattedData} margin={chartsMargins}>
          <CartesianGrid strokeDasharray="2 2" horizontal vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip content={<BarsCustomTooltip />} offset={40} wrapperStyle={{ outline: "none" }} />
          <Bar dataKey="kg" fill="var(--bg-color-secondary)" radius={[10, 10, 0, 0]} barSize={10} />
          <Bar dataKey="Kcal" fill="var(--bg-color-primary)" radius={[10, 10, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * Composant personnalisé pour l'affichage du tooltip du graphique en barres.
 * @param {Object} props
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Données du tooltip.
 * @returns {JSX.Element | null}
 */
function BarsCustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const { kg, Kcal } = payload[0].payload;

  return (
    <div className="tool-tip__bar-chart">
      <p className="tool-tip__bar-chart-text">{`${kg}kg`}</p>
      <p className="tool-tip__bar-chart-text">{`${Kcal}Kcal`}</p>
    </div>
  );
}
