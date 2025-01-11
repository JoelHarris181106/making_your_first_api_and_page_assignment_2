// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get("/status-info", (req, res) => {
  const code = req.query.code;

  // Define the status codes and their descriptions
  const statusCodes = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and resulted in one or more new resources.",
    204: "No Content: The server successfully processed the request and is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors.",
    401: "Unauthorized: The request has not been applied because it lacks valid authentication credentials.",
    403: "Forbidden: The server understood the request but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI.",
    405: "Method Not Allowed: The method received in the request is known by the server but is not allowed for the requested resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.",
    504: "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
  };

  // If the code exists in our statusCodes object
  if (statusCodes[code]) {
    const response = {
      status: code,
      message: statusCodes[code],  // Corrected from "Message" to "message"
    };
    return res.json(response);
  } else {
    // If the status code is not found
    return res.status(400).json({
      status: 400,
      message: "Invalid status code. Please provide a valid HTTP status code."
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
