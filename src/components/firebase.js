import app from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

app.initializeApp(config);

const db = app.firestore();
    
export { db };
