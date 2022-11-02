import React from "react";
import { Typography, Col, Image, Row } from "antd";

const { Title, Paragraph } = Typography;

function Intro() {
  return (
    <>
      <Col>
        <Typography>
          <Title>Introduction</Title>
          <Col>
            <Paragraph>
              This group project aims at encouraging students to apply the
              knowledge and experience learned in the class towards a real-life
              business intelligence system.
            </Paragraph>
          </Col>
          <Col>
            <Paragraph>
              You are employed as a Data Scientist at Airbnb, a company that is
              involved in short-term rentals. Airbnb wants to create a service
              for hosts with top-rated undervalued listings that will suggest
              they increase their prices. Your team is tasked with building a
              POC for this service. You have to (a) create and train a model
              that will predict the price of a listing, given its attributes,
              (b) deploy the model as an API, and (c) implement a web-based
              user-interface (UI).
            </Paragraph>
          </Col>
          <Col>
            <Paragraph>
              In terms of data content, you are provided with Airbnb data for
              the region of Athens, where the POC will take place. The data
              includes information about the listings (neighborhood, amenities,
              bedrooms, and bathrooms, etc.) and ratings for those listings.
            </Paragraph>
          </Col>
          <Col>
            <Paragraph>
              Your project will focus on the above three tasks. The steps you
              should follow regarding the data flow, the modelling process and
              the resource management are up to you. Your code needs to be well
              documented and organized.
            </Paragraph>
          </Col>
        </Typography>
      </Col>
      <Col>
        <Typography>
          <Title>Methodology</Title>
          <Col>
            <Paragraph>
              Initially, we explored the nature of the datasets. More
              specifically, we examined the columns where missing values are
              present and replaced with meaningful ones.
            </Paragraph>
            <Paragraph>
              {" "}
              Additionally, we searched for duplicated rows so that we remove
              them. Luckily, there were none.{" "}
            </Paragraph>
            <Paragraph>
              Afterwards, we looked for statistical insights and correlations
              among the features. Regarding the data preparation for model
              training, we scaled and standardized our data so that none of them
              influences the prediction more than the rest. Then, we trained and
              tested 4 models, which then, were fine-tuned for error
              minimization.
            </Paragraph>
          </Col>
          <Row justify="center">
            <Col span={12}>
              <Image width={800} src="https://i.ibb.co/qCcmCmN/corr.png" />
            </Col>
            <Col span={12}>
              <Image
                width={800}
                src="https://i.ibb.co/rGS3Nj9/Microsoft-Teams-image.png"
              />
            </Col>
          </Row>
        </Typography>
      </Col>
    </>
  );
}

export default Intro;
