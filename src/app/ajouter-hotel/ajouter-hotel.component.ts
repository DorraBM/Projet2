import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/model/hotel';
import { HotelsService } from 'src/service/hotels.service';

@Component({
  selector: 'app-ajouter-hotel',
  templateUrl: './ajouter-hotel.component.html',
  styleUrls: ['./ajouter-hotel.component.css']
})
export class AjouterHotelComponent implements OnInit {
  newHotel= new Hotel(10, '', '', '', 0,0,true);
  message:string="Votre nouveau Hotel a bien été ajouté";
  ajouterHotel(f:NgForm)
  {
    //console.log(this.newHotel);
   this.hotelService.ajouterHotel(this.newHotel);
   f.reset();
  }
  constructor( private hotelService:HotelsService) { }

  ngOnInit(): void {
  }
 onReset(f:NgForm)
 {
   f.reset();
 }
}
