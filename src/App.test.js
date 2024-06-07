import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

describe('App Component Tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('Renders the Header heading', async () => {
    const headingElement = screen.getByText(/Reserve Table/i);
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    userEvent.click(reserveButton);

    const headingElementNew = await screen.findByText(/Choose Date/i);
    expect(headingElementNew).toBeInTheDocument();
  });

  test('Initialize/Update Times', async () => {
    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    userEvent.click(reserveButton);

    // Assuming the 'Choose Time' select element is present
    const timeSelect = await screen.findByLabelText(/Choose Time/i);
    const testTime = '12:00 PM';
    
    userEvent.selectOptions(timeSelect, testTime);
    expect(screen.getByRole('option', { name: testTime }).selected).toBe(true);
  });

  // Additional test cases
  test('Form submission with valid data', async () => {
    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    userEvent.click(reserveButton);

    const nameInput = await screen.findByLabelText(/Name/i);
    const dateInput = screen.getByLabelText(/Choose Date/i);
    const timeSelect = screen.getByLabelText(/Choose Time/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    userEvent.type(nameInput, 'John Doe');
    userEvent.type(dateInput, '2024-06-15');
    userEvent.selectOptions(timeSelect, '12:00 PM');
    
    userEvent.click(submitButton);

    // Check for successful form submission indication
    const successMessage = await screen.findByText(/Reservation Confirmed/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('Form validation for missing data', async () => {
    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    userEvent.click(reserveButton);

    const submitButton = await screen.findByRole('button', { name: /Submit/i });
    userEvent.click(submitButton);

    // Check for validation error messages
    const errorMessage = await screen.findByText(/Please fill out this field/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
