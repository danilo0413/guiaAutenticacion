import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { RegisterPageRoutingModule } from './register-routing.module';
import { firebaseConfig } from '../credentials';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
firebase.initializeApp(firebaseConfig);
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule, ReactiveFormsModule, FormsModule, AngularFireAuthModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
