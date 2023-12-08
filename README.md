# Vizilu-Backend

## Description

The Vizilu-Backend is a Node.js server designed to handle payment processing for the Vizilu App. Utilizing Stripe's API, it allows for secure charge handling, providing a seamless transaction experience for users. The backend is built with Express and integrated with Stripe to process payments in a secure and efficient manner.

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/nafisk/Vizilu-Backend
   ```

2. **Navigate to the Directory:**
   ```bash
   cd Vizilu-Backend
   ```

3. **Install Dependencies:**
   - Make sure you have Node.js installed on your machine.
   - Install the necessary Node modules:
     ```bash
     npm install
     ```

4. **Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your Stripe secret key:
     ```
     STRIPE_SECRET_KEY=your_stripe_secret_key_here
     ```

5. **Starting the Server:**
   ```bash
   node index.js
   ```
   - The server will start running on `localhost:3000` or a custom port defined in your environment variables.

## Usage

After starting the server, you can process payments by sending POST requests to `/api/payment` with the necessary payment information.

## Contributing

Feel free to contribute to the project by submitting pull requests or opening issues for any bugs or feature requests.
