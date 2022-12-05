import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  song: any = {}; songId: any;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.song = this.firestoreService.getSongDetail(this.songId).valueChanges();
  }

  async deleteSong() {
    const alert = await this.alertController.create({ message: 'Are you sure you want to delete the song?', 
    buttons: [
      {
        text: 'Cancel', role: 'cancel', handler: blah  => {
          console.log('Confirm cancel: blah');
        },
      },
      {
        text: 'Okay', handler: () => {
          this.firestoreService.deleteSong(this.songId).then(() => {
            this.router.navigateByUrl('');
          });
        },
      },
    ],
  });
  await alert.present();
  }

}
