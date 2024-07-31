import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideRouter(routes),
    provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-70f77","appId":"1:337853689486:web:f0c75916d494374710e3df","databaseURL":"https://ring-of-fire-70f77-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"ring-of-fire-70f77.appspot.com","apiKey":"AIzaSyApI3vkZgrcH6vMYzyy58Lhbxsv5d_igtM","authDomain":"ring-of-fire-70f77.firebaseapp.com","messagingSenderId":"337853689486"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())
  ]
};
