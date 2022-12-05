import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { error } from 'console';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverForm: FormGroup;

  constructor(private FB: FormBuilder, private AS: AuthService, private AC: AlertController, 
    private router: Router) { this.buildForm(); }

    resetPassword(event: Event): void{
      event.preventDefault();
      if(this.recoverForm.valid){
        const value = this.recoverForm.value;
        this.AS.rpassword(value.email).then(
          async () => {
            const alert = await this.AC.create({
              message: "Revisa tu correo, enviamos un link para cambiar la contraseña. ",
              buttons: [{text:'OK', role: 'Cancel', handler: () => {
                this.router.navigateByUrl('login');
              }, }, ], 
            });

            await alert.present();
          },
          async error=> {
            const Erroralert = await this.AC.create({
              message: error.message, buttons: [{text:'OK', role:'Cancel'}],
            });
            await Erroralert.present();
          }
        );
      }
    }

  ngOnInit() {  }

    buildForm() {
      this.recoverForm = this.FB.group({
        email: ['', [Validators.required, Validators.email]],
      });
    }

    get emailField() {
      return this.recoverForm.get('email');
    }
}
