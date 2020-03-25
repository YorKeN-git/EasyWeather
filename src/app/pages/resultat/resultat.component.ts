import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  villeSaisie: string; 
  constructor() { }

  ngOnInit() {
    //Récuperd la ville enregister en local storage 
    this.villeSaisie = localStorage.getItem('ville');

  }

}
