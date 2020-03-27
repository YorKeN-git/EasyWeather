import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  villeSaisie: string; 
  maVilleNonConvertJSON: string;
  maVIlleConvertJSON: string;
  latitude: number; 
  longitude: number;
  erreurRequest: boolean = false;
  constructor() { }

  ngOnInit() {
    //Récuperd la ville enregister en local storage 
    this.villeSaisie = localStorage.getItem('ville');
    //Récuperd notre objet en local storage et convertit en JSON
    this.maVilleNonConvertJSON = localStorage.getItem('villeRecup');
    this.maVIlleConvertJSON = JSON.parse(this.maVilleNonConvertJSON);
    console.log(this.maVIlleConvertJSON.success);
    //MON WIP
    if(this.maVIlleConvertJSON.success){
      console.log("je suis false")
      this.erreurRequest = true;
    }else{
      this.latitude = Number.parseFloat(this.maVIlleConvertJSON.location.lat);
      this.longitude = Number.parseFloat(this.maVIlleConvertJSON.location.lon);
      //Appel de notre méthode pour initialiser l'api Leaflet
      this.initMap();
      //Applique un background en fonction du moment JOUR/NUIT
      this.afficherBackground();
    }
    
    
    
    }

    initMap(){
      //Initialisation de l'API
      var mymap = L.map('mapid', {
      center: [this.latitude  , this.longitude],
      zoom: 13
      });

      //Need token and add title for use API (copyright)
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoieW9ya2VuIiwiYSI6ImNrODk3NW9jeTAzdGwzdG1wZ3NhY3l4ZHIifQ.aSwZBDz4-mMBP8XSqpQXmw'
      }).addTo(mymap);

      //Initialisation du marker de Leaflet 
      var point = L.icon({
      iconUrl: './assets/point.png',
      iconSize: [128, 116],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      // shadowUrl: 'my-icon-shadow.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
      });
      var marker = L.marker([this.latitude, this.longitude], {icon: point}).addTo(mymap);
    }

    afficherBackground(){
      //Afficher un fond d'écran en fonction 
      const monImage = this.maVIlleConvertJSON.current.weather_icons[0];
      //console.log(monImage);
      if(monImage.includes('night')){
        document.getElementById('background').style.backgroundColor = "#3C4A90";
      }else{
        document.getElementById('background').style.backgroundColor = "#96B5E5";
      }
    }
  }
