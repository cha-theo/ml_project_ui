import { useState, useEffect } from "react";
import { Typography, Divider, Row, Col, Spin } from "antd";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  ZAxis,
  Scatter,
} from "recharts";
import { getStats } from "../api/api";
import test_data from "../data/test_bar_data";

console.log(test_data);
const { Title } = Typography;

const Stats = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    getStats().then((data) => {
      setStatsData(data);
    });
  }, []);

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  const toEuro = (decimal, fixed = 0) => `${decimal}€`;

  return (
    <div className="content">
      <div className="stats_page">
        <Title>Stats page</Title>
        <Divider />
        {statsData ? (
          <>
            <Row className="row" gutter={[24, 24]}>
              <Col style={{ width: "100%" }}>
                <div className="chart-container">
                  <Title level={4}>
                    Top3 most expensive neighborhood relative to Acropolis
                  </Title>
                  <div className="chart-inner">
                    <ResponsiveContainer>
                      <ScatterChart
                        width={400}
                        height={400}
                        margin={{
                          top: 20,
                          right: 20,
                          bottom: 20,
                          left: 20,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis
                          dataKey="x"
                          type="number"
                          name="Longitude"
                          domain={[23.7, 23.781]}
                        />
                        <YAxis
                          dataKey="y"
                          type="number"
                          name="Latitude "
                          domain={[37.95, 38.032]}
                        />
                        <ZAxis />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Legend />
                        <Scatter
                          name="Acropolis"
                          legendType="star"
                          data={statsData.acr}
                          shape="star"
                          fill="#FF0000"
                        />
                        <Scatter
                          name="Neighborhood 1"
                          data={statsData.neig1}
                          fill="#8884d8"
                        />
                        <Scatter
                          name="Neighborhood 2"
                          data={statsData.neig2}
                          fill="#ffba9a"
                        />
                        <Scatter
                          name="Neighborhood 3"
                          data={statsData.neig3}
                          fill="#f3ca4d"
                        />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="row" gutter={[24, 24]}>
              <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                <div className="chart-container">
                  <Title level={4}>Mean/Max price per room type</Title>
                  <div className="chart-inner">
                    <ResponsiveContainer>
                      <BarChart
                        data={statsData.barChart}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={toEuro} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="mean price" fill="#8884d8" />
                        <Bar dataKey="max price" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Col>

              <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                <div className="chart-container">
                  <Title level={4}>Top5 amenities</Title>
                  <div className="chart-inner">
                    <ResponsiveContainer width={600}>
                      <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={statsData.radarChart}
                      >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar
                          name="Mike"
                          dataKey="frequency"
                          stroke="#8884d8"
                          fill="#8884d8"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="row" gutter={[24, 24]}>
              <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                <div className="chart-container">
                  <Title level={4}>Room type percentage</Title>
                  <div className="chart-inner">
                    <ResponsiveContainer>
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="10%"
                        outerRadius="80%"
                        barSize={20}
                        data={statsData.radialBarChart}
                      >
                        <RadialBar
                          minAngle={15}
                          label={{ position: "insideStart", fill: "#000" }}
                          background
                          clockWise
                          dataKey="uv"
                        />
                        <Legend
                          iconSize={10}
                          layout="vertical"
                          verticalAlign="middle"
                          wrapperStyle={style}
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Col>

              <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                <div className="chart-container">
                  <Title level={4}>Registered hosts per year</Title>
                  <div className="chart-inner">
                    <ResponsiveContainer>
                      <LineChart
                        width={500}
                        height={300}
                        data={statsData.lineChart}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" name="Year" />
                        <YAxis dataKey="new_users" />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="new_users"
                          stroke="#8884d8"
                          name="New Hosts"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div className="stats-loader">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
