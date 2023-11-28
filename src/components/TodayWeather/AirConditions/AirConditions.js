import React from 'react';
import ErrorBox from '../../Reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../Reusable/Layout';

const TodayWeatherAirConditions = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <>
        <AirConditionsItem
          title="অনুভৃত হচ্ছে"
          value={`${getBengaliNumber(Math.round(data.main.feels_like))} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title="বায়ুর গতি "
          value={`${getBengaliNumber(data.wind.speed)} মি./সে.`}
          type="wind"
        />
        <AirConditionsItem
          title="মেঘাচ্ছনতা"
          value={`${getBengaliNumber(Math.round(data.clouds.all))} %`}
          type="clouds"
        />
        <AirConditionsItem
          title="আর্দ্রতা"
          value={`${getBengaliNumber(Math.round(data.main.humidity))} %`}
          type="humidity"
        />
      </>
    );

  return (
    <Layout
      title="বিস্তারিত"
      content={content}
      mb="1rem"
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

const getBengaliNumber = (number) => {
  switch (number) {
    case 0:
      return '০';
    case 1:
      return '১';
    case 2:
      return '২';
    case 3:
      return '৩';
    case 4:
      return '৪';
    case 5:
      return '৫';
    case 6:
      return '৬';
    case 7:
      return '৭';
    case 8:
      return '৮';
    case 9:
      return '৯';
    default:
      return number.toString();
  }
};


export default TodayWeatherAirConditions;

