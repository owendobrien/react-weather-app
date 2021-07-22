import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');

  return (
    <>
      <div className="search-box">
        <Col className=" text-center">
          <FormControl
            placeholder="Enter City"
            className="search-bar"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </div>
      <Row>
        <Col>
          <h1 className="title">Search your city</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="button" onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  )
}
export default CitySelector;