# Todo Application

Simple Todo Application was built using React JS, Typescript, Tailwind CSS and Firebase.

Check the demo hosted on Firebase https://todo-react-ts-v1.web.app.

## Instructions

First clone this repository.
```bash
$ git clone https://github.com/kiervz/todo-app.git
```

Change Directory into this project.
```bash
$ cd ./todo-app
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Create a copy of .env file.
```bash
$ cp .env.example .env
```

Configure your .env file with your firebase details.
```bash
$ VITE_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
$ VITE_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
$ VITE_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
$ VITE_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
$ VITE_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
$ VITE_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
```

Run it
```bash
$ npm start # or yarn start
```
