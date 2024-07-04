import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol } from '@ionic/angular/standalone';
import { Skylander } from '../model/skylander/skylander';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol]
})
export class ListePage implements OnInit {

  listeSkylanders : Skylander[] = [];

  constructor() { }

  async ngOnInit() 
  {
    this.listeSkylanders.push(
      new Skylander(
        "Spyro",
        "Dragon",
        "Magie",
        "Skylander",
        "https://m.media-amazon.com/images/I/81L4HOmXLKL._AC_UF1000,1000_QL80_.jpg"
      )
    );

    this.listeSkylanders.push(
      new Skylander(
        "Tree Rex",
        "Un arbre",
        "Vie",
        "Géant",
        "https://i.ebayimg.com/images/g/-SUAAOSwhpxidVb-/s-l400.png"
      )
    )

    this.listeSkylanders.push(
      new Skylander(
        "Nitro Magna",
        "Un robot",
        "Tech",
        "Swap_Force",
        "https://thumbs.coleka.com/media/item/20160205/skylanders-nitro-magna-charge.webp"
      )
    )

    this.listeSkylanders.push(
      new Skylander(
        "Trigger Happy",
        "Quelque chose ?",
        "Tech",
        "Swap_Force",
        "https://m.media-amazon.com/images/I/71E3w9OQRyL._AC_UF1000,1000_QL80_.jpg"
      )
    )
  }

}
