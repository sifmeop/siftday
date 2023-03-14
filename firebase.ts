import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBTsflQ119s3MHQ4KpEuKRvBfKD-8loCEQ',
  authDomain: 'siftday-46856.firebaseapp.com',
  projectId: 'siftday-46856',
  storageBucket: 'siftday-46856.appspot.com',
  messagingSenderId: '467113310754',
  appId: '1:467113310754:web:63fb4e1414f93869d9687b',
  databaseURL:
    'https://siftday-46856-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase()
