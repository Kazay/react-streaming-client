## Setting up

**This application requires a RESTFUL api and a RMTP server**

Rename configSample.js to config.js and add your google OAuth 2.0 client id

[Google developers console](https://console.developers.google.com/)

## API

To simulate an API, i'm using [JSON Server library](https://github.com/typicode/json-server)

db.json example

```
{
  "streams": [
    {
      "title": "First stream",
      "description": "Let's get the party started",
      "userId": "110297272621889339787",
      "id": 1
    }
  ]
}
```

## RMTP Server

Set up a RTMP server with Node Media Server using default settings

[Node Media Server](https://github.com/illuspas/Node-Media-Server)

## App

This application allows you to browse a list a streams created by the users.

To create/edit/delete a stream, you must be logged in via Google Authentication.

## Broadcast

Once a stream is created within the app, copy the stream id and set up a broadcast using OBS with the following streaming parameters :

**Service :** Custom...<br/>
**Server :** rtmp://localhost/live<br/>
**Stream Key :** Stream id

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
