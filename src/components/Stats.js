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
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { getStats, getTestStats } from "../api/api";
import test_data from "../data/test_bar_data";

console.log(test_data);
const { Title } = Typography;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Stats = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    getStats().then((data) => {
      setStatsData(data);
    });
  }, []);

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  return (
    <div className="content">
    <div className="stats_page">
      <Title>Stats page</Title>
      <Divider />
      {statsData ? (
        <>
          {/* <Row className="row" gutter={[24, 24]}>
            <Col style={{ width: "100%" }}>
              <div className="chart-container">
                <Title level={4}>My super line chart</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <LineChart
                      data={statsData.lineChart}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{ width: "100%" }}>
              <div className="chart-container">
                <Title level={4}>My super area chart</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <AreaChart
                      data={statsData.areaChart}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row> */}
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
                      <YAxis />
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
                <Title level={4}>My super pie chart</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
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
                <Title level={4}>Mean/Max price per room type</Title>
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
                  To fill 
            <Col sm={{ span: 24 }} lg={{ span: 12 }}></Col>
          </Row>
          {/* <PieChart>
                      <Pie
                        data={statsData.pieChart}
                        dataKey="value"
                        outerRadius={100}
                        label
                      >
                        {statsData.pieChart.map((entry, index) => (
                          <Cell
                            key={`cell-${entry.name}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart> 
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            */}

          {/* <Col sm={{ span: 24 }} lg={{ span: 12 }}>
              <div className="chart-container">
                <Title level={4}>My super pie chart</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={statsData.pieChart}
                        dataKey="value"
                        outerRadius={100}
                        label
                      >
                        {statsData.pieChart.map((entry, index) => (
                          <Cell
                            key={`cell-${entry.name}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col> 
          </Row>
          */}
          {/* <Row className="row" gutter={[24, 24]}>
            <Col style={{ width: "100%" }}>
              <div className="chart-container">
                <Title level={4}>My test bar chart</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={test_data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row> */}
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
