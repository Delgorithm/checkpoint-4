import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CC33FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function RechartsPieChart({ allExpenses }) {
  const data = allExpenses.reduce((acc, expense) => {
    const existingCategory = acc.find((item) => item.name === expense.category);
    if (existingCategory) {
      existingCategory.value += parseFloat(expense.amount);
    } else {
      acc.push({ name: expense.category, value: parseFloat(expense.amount) });
    }
    return acc;
  }, []);

  if (data.length === 0) {
    return <p>Aucune donnée disponible pour le graphique.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width="100%" height={900}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell
              key={entry.name}
              fill={COLORS[data.indexOf(entry) % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

RechartsPieChart.propTypes = {
  allExpenses: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default RechartsPieChart;
