import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const PieChar = ({data}) => (
  <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
    <ResponsiveContainer width={730} height={300}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={100}
          dataKey="value"
          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default PieChar
