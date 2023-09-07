import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyARI5lGfrQ_EqbzRviRIqaBU3EcQFGtogQ",
  authDomain: "app-tareas-dab94.firebaseapp.com",
  projectId: "app-tareas-dab94",
  storageBucket: "app-tareas-dab94.appspot.com",
  messagingSenderId: "837587179985",
  appId: "1:837587179985:web:25b4e3d5561c24aeeb68f0"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp( firebaseConfig )),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
