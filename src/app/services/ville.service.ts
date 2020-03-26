import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Ville } from '../modeles/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  //Path pour la requête current 
  path: string = "http://api.weatherstack.com/"
                  +"current?access_key=5f161f47f914b797afb15484d09d9cc5&query=";

  ville: Ville;
  constructor(private route: Router,
              private http: HttpClient) { }

  getVilleSaisie(ville: string){
    this.getInfoVille(ville);
  }

  getInfoVille(ville: string){
    //Finalise le path 
    let pathComplete = this.path + ville ;
    //faire la requête a l'API 
    this.http.get(pathComplete).subscribe(data => {
      const response = data ;
      localStorage.setItem('villeRecup', JSON.stringify(response));
      //redirige vers la page resultat 
      this.route.navigate(['/resultat']);
    });
    //Enregister en local storage la ville saisie 
    localStorage.setItem('ville', ville);
    
  }
}
