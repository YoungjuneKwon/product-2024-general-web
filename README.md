# @WinM2M/web

This package is a set of features commonly used to build web-based applications. It includes utility functions related to JWT authentication, RESTful API calls to external backend systems, and asynchronous processing. It also includes components to help you handle authentication written in Vue.

## Features

- **JWT Authentication**: Seamless integration for managing user authentication and token validation.
- **RESTful API Calls**: Easy-to-use functions to interact with backend APIs.
- **Asynchronous Handling**: Utilities for managing asynchronous operations efficiently.

## Installation

To install the package, use npm:

```sh
npm install @winm2m/web
```

## Usage Example
```javascript
import { hasAuthToken, api, setAuthToken } from '@winm2m/web';

if (hasAuthToken()) {
    // Do something
}

api.updateBaseURL('https://example.com');

// request unauthorized
api.post('/api/login', { username: 'admin', password: 'admin' }).then((response) => {
    // Do something
});

// set token. authToken is stored in localStorage
setAuthToken('some token');

// then, request with token
api.get('/api/get-data').then((response) => {
    // Do something
});

// load authToken from localStorage
loadAuthToken();

// to clear authToken
clearAuthToken();
```

## License
This project is licensed under the MIT License.