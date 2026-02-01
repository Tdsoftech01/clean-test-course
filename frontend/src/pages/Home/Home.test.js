import { render, screen } from '@testing-library/react';
import Home from './index';
import axios from 'axios';

jest.mock('axios');

describe('Test Home', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Test Render', async () => {
    // Arrange: Setup the mock API
    axios.get.mockImplementation((url) => {
      console.log('Mocked axios.get called with:', url); // Debug: log the URL
      if (url.includes('/api/category')) {
        return Promise.resolve({
          data: {
            status: 'success',
            data: [
              {
                id: 1,
                name: 'Handhelds',
                description: "So big, you don't need thumbs.",
              },
              {
                id: 2,
                name: 'Appeteasers',
                description: 'Tease the hangry hippo, he get hangrier',
              },
            ],
          },
        });
      }
      return Promise.resolve({
        data: {
          status: 'fail',
        },
      });
    });

    // Act: Render the Home page
    render(<Home />);
    // screen.debug(); // Optional: print the DOM after render

    // Assert: Check the values in the rendered Home page.
    expect(await screen.findByText(/appeteasers/i)).toBeInTheDocument();
  });
});