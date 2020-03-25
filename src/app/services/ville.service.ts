import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  //Path pour la requête current 
  path: string = "http://api.weatherstack.com/"
                  +"current?access_key=5f161f47f914b797afb15484d09d9cc5&query=";

  constructor(private route: Router) { }

  getVilleSaisie(ville: string){
    this.getInfoVille(ville);
  }

  getInfoVille(ville: string){
    //Finalise le path 
    let pathComplete = this.path + ville ;
    //faire la requête a l'API 

    //Enregister en local storage la ville saisie 
    localStorage.setItem('ville', ville);
    this.route.navigate(['/resultat']);
  }
}
