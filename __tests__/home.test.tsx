import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Home from '@/screens/home';
import { useGetWeather } from '@/services';
import { useFilterStore } from '@/store/filter.store';

jest.mock('@/services');
jest.mock('@/store/filter.store');

const mockWeatherData = {
  location: { name: 'Nairobi' },
  current: {
    temp_c: 25,
    condition: { text: 'Sunny' },
    feelslike_c: 27,
    humidity: 60,
    wind_kph: 10,
    vis_km: 12,
    uv: 5,
  },
  forecast: {
    forecastday: [
      {
        date: '2025-11-21',
        day: {
          maxtemp_c: 30,
          mintemp_c: 20,
          avgtemp_c: 25,
          daily_chance_of_rain: 10,
          condition: { text: 'Sunny' },
        },
        astro: { sunrise: '06:00 AM', sunset: '06:30 PM' },
      },
    ],
  },
};

describe('Home', () => {
  beforeEach(() => {
    (useGetWeather as jest.Mock).mockReturnValue({
      data: mockWeatherData,
      isLoading: false,
      error: null,
      isFetching: false,
      refetch: jest.fn(),
    });
    (useFilterStore as unknown as jest.Mock).mockReturnValue({
      city: 'Nairobi',
      setCity: jest.fn(),
    });
  });

  it('renders correctly', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<Home />);
    });
  });

  it('renders loading state', async () => {
    (useGetWeather as jest.Mock).mockReturnValue({ data: null, isLoading: true, error: null, isFetching: false, refetch: jest.fn() });

    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<Home />);
    });
  });

  it('renders error state', async () => {
    (useGetWeather as jest.Mock).mockReturnValue({ data: null, isLoading: false, error: true, isFetching: false, refetch: jest.fn() });

    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<Home />);
    });
  });
});
