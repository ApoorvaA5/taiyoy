import { FC } from "react";
import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";
import millify from "millify";

type LineGraphProps = {
  data: Array<{
    cases: number;
    date: number;
  }>;
};

const LineGraph: FC<LineGraphProps> = ({ data }) => {
  const graphData = Object.entries(data).map(([key, value]) => {
    return {
      name: key,
      cases: value,
    };
  });

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={200}
          height={200}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickMargin={10} minTickGap={2} stroke="#fff" />
          <YAxis
            tickFormatter={(value) => millify(value)}
            tickMargin={15}
            stroke="#fff"
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", color: "#fff" }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend
            wrapperStyle={{ background: "#333", color: "#25D366" }}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="dates"
            stroke="#25D366"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;
