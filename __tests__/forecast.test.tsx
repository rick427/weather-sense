import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Forecast from '@/screens/forecast';
import { useGetWeather } from '@/services';

jest.mock('@/services');

const mockForecastData = {
  forecast: {
    forecastday: [
      {
        date: '2025-11-21',
        day: { avgtemp_c: 25, maxtemp_c: 30, mintemp_c: 20, condition: { text: 'Cloudy' } },
      },
    ],
  },
};

describe('Forecast', () => {
  beforeEach(() => {
    (useGetWeather as jest.Mock).mockReturnValue({ data: mockForecastData });
  });

  it('renders correctly', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<Forecast />);
    });
  });
});
