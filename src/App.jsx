
import './App.css'
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';


const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState('');

  // Logic to calculate BMI and determine the status
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      // Determine BMI status
      let bmiStatus = '';
      if (bmiValue < 18.5) bmiStatus = 'Underweight';
      else if (bmiValue < 24.9) bmiStatus = 'Normal weight';
      else if (bmiValue < 29.9) bmiStatus = 'Overweight';
      else bmiStatus = 'Obesity';

      setStatus(bmiStatus);
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setStatus('');
  };

  return (
    <Container className="bmi-container">
      <Card className="bmi-card shadow-lg">
        {/* Heading */}
        <h2 className="text-center text-primary mb-4">BMI Calculator</h2>

        {/* Form for Weight and Height Input */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={calculateBMI}
              className="custom-button calculate-button"
            >
              Calculate
            </Button>
            <Button
              variant="danger"
              onClick={resetFields}
              className="custom-button reset-button"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Display Results */}
        {bmi && (
          <div className="mt-4 text-center">
            <h4>Your BMI: <span className="bmi-result">{bmi}</span></h4>
            <p>Status: <strong className={`bmi-status ${status.toLowerCase()}`}>{status}</strong></p>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default BMICalculator;
