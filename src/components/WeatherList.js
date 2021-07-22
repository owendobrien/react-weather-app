import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
  return (
    <Row sm={4}>
      {weathers.map(({dt, main, weather}) => (
        <Col className="cards" key={dt}>
          <WeatherCard
            temp={main.temp}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          />
        </Col>
      ))}
    </Row>
  );
}

export default WeatherList;