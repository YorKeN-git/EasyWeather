import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/modeles/ville';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  villeSaisie: string; 
  maVilleNonConvertJSON: string;
  maVIlleConvertJSON: string[] = [];
  ville: Ville;
  constructor() { }

  ngOnInit() {
    //Récuperd la ville enregister en local storage 
    this.villeSaisie = localStorage.getItem('ville');

    //Récuperd notre objet en local storage 
    // const objet = localStorage.getItem('villeRecup');
    // console.log(JSON.parse(ville));
    this.maVilleNonConvertJSON = localStorage.getItem('villeRecup');
    this.maVIlleConvertJSON = JSON.parse(this.maVilleNonConvertJSON);
    //console.log(this.maVIlleConvertJSON);
    // this.ville = new Ville();
    // this.ville.nom = this.maVIlleConvertJSON.
    
  }

}
