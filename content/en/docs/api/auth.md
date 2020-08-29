---
title: Authentication
description: ''
position: 3
category: API
---

## Introduction 
Completing the setup of the application will seed  the database with super admin credentials, 
from that point you can start adding agents, clients and other admins. 
All of those entities have the ability to issue a personal authentication token vie login endpoint.

<alert>
In all the following requests I'll use my local virtual host as the base url for all requests
</alert>

## login 
The login endpoint creates a bearer personal access token to the API for authenticated users. 

<code-group>
  <code-block label="Http" active>

  ```http request
  POST /api/login HTTP/1.1
    Host: techsupport.test
    Content-Type: application/json
    Acc: application/json
    
    {
      "email": "imkonsowa@gmail.com",
      "password": "123456789"
    }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```javascript
  let axios = require('axios');
  
  axios.post('http://techsupport.test/api/login', {
    email: 'imkonsowa@gmail.com',
    password: 'your-password'
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response);
  });

  ```

  </code-block>
</code-group>

<code-block label="Http" active>

  ```json
  {
      "status": true,
      "token": "13|6G7paYQM6qTYlGAhzwV0Zxu9Ul4jcQU1XKNrKFQKq9Irsb0lsNDD9jsPy32fGBFsFTumN58VJBg1SGEs"
  }
  ```

  </code-block>