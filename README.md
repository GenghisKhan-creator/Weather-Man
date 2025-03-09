# Simple Weather API Node.js Server

This is a basic Node.js server that fetches weather data using the OpenWeatherMap free API. Due to the limitations of the free API, the response contains a minimal set of information.

## Getting Started

To run this server, you'll need Node.js installed.

1.  **Clone the repository:**

    ```bash
    git clone [your-repository-url]
    cd [your-repository-directory]
    ```

2.  **Install dependencies (if any):**

    ```bash
    npm install
    ```

3.  **Configure API Key and City:**

    * Open the `index.js` file.
    * Locate the `API_KEY` and `CITY` variables.
    * Replace `''` with your OpenWeatherMap API key and desired city.
    * **Note:** You will need to create an account on OpenWeatherMap and get a free API key.

    ```javascript
    const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
    const CITY = 'YOUR_CITY_NAME'; // Replace with the city name
    ```

4.  **Run the server:**

    * Using Node.js:

        ```bash
        node index.js
        ```

    * Using Nodemon (if installed):

        ```bash
        nodemon index.js
        ```

    * If you don't have nodemon installed, you can do so by running `npm install -g nodemon`

5.  **Access the weather data:**

    * Open your web browser or use a tool like `curl` to access the server's endpoint:
        * `http://localhost:3000/weather` (or the port defined in your `index.js`).

## API Response

Due to the constraints of the free OpenWeatherMap API, the response is limited. Expect to receive a JSON object containing basic weather information, such as:

* Temperature
* Weather description
* Possibly other limited data.

## Important Notes

* **API Key Security:** Avoid committing your API key directly to your repository. Consider using environment variables for sensitive information.
* **Free API Limitations:** The free OpenWeatherMap API has usage limits and provides a restricted set of data. For more detailed weather information, consider upgrading to a paid plan.
* **Error Handling:** Basic error handling is implemented. Review the console for any error messages.
* **Port:** The server runs on port 3000 by default. This can be configured in the `index.js` file.

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues.
