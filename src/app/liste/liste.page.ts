import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol } from '@ionic/angular/standalone';
import { Skylander } from '../model/skylander/skylander';
import { SkylanderService } from '../service/skylander.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol]
})
export class ListePage implements OnInit {

  listeSkylanders : Skylander[] = [];

  constructor(private service : SkylanderService) { }

  async ngOnInit() 
  {
    this.service.getListeSkylanders().subscribe(
      {
        next: (response: any) => {
          response.forEach((element: Skylander) => {
            this.listeSkylanders.push(
              element
            );
          });
        }, error: (err) => console.log(err),
        complete: () => console.log(this.listeSkylanders)
      }
    )
  }

}
