# Prepto App

## Schema

`users`, `questions` and `games` are root collections.

```json
{
  "users": {
    "id": {
      "username": "",
      // auth stuff
      "coins": 45678
    }
  },
  "questions": {
    "id": {
      "question": "",
      "answer": 1,
      "rating": 1213
    }
  },
  "games": {
    "id": {
      "users": {
        "id": {}
      },
      "question": {
        "id": {
          ... // Store Question ID here
          "answers": {
            "userId": {
              "timestamp": "",
              "option": ""
            }
          }
        }
      }
    }
  }
}
```



```js
const firebaseConfig = {
    apiKey: "AIzaSyBP7c_0nPfoQhH0RuUW4xo8Blk6WTCzRmE",
    authDomain: "getprepto.firebaseapp.com",
    databaseURL: "https://getprepto.firebaseio.com",
    projectId: "getprepto",
    storageBucket: "getprepto.appspot.com",
    messagingSenderId: "492191243375",
    appId: "1:492191243375:web:6fcb5d58b07c0adf33819a",
    measurementId: "G-3TTMGMD0RW"
  };
```