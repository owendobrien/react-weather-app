import React from 'react';
import CitySelector from './components/CitySelector';
import UseFetch from './hooks/UseFetch'
import {API_KEY, API_BASE_URL} from './apis/config';
import WeatherList from './components/WeatherList';

const WeekContainer = () => {
  const { data, error, isLoading, setUrl } = UseFetch();

  const getContent = () => {
    if(error) return <h2 className="error">Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2 className="loading">LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <div className="app">
      <main>
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}forecast?q=${city}&units=imperial&appid=${API_KEY}`)} />
        {getContent()}
      </main>
    </div>
  );
}

export default WeekContainer;