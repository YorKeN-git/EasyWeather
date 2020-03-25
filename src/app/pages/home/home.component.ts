import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VilleService } from 'src/app/services/ville.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //Mon formulaire 
  saisieVilleForm: FormGroup;

  //Boolean pour message aler
  villeNonSaisie:boolean = false;

  constructor(private formBuilder: FormBuilder,
              private villeService: VilleService) { }

  ngOnInit() {
    this.saisieVilleForm = this.formBuilder.group({
      villeSaisie: ['', Validators.required]
    });
  }

  onSubmit(){

    if(this.saisieVilleForm.invalid){
      this.villeNonSaisie = true;
    }else{
      this.villeNonSaisie = false;
      //On récuperd la saisie de l'input 
      let ville = this.saisieVilleForm.get('villeSaisie').value;
      this.villeService.getVilleSaisie(ville);
    }
  }
}
