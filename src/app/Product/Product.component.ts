import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plants";
import { ActivatedRoute } from "@angular/router";
import { AnimateTimings } from "@angular/animations";

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.scss']
})
export class ProductComponent implements OnInit{


  constructor(private route: ActivatedRoute,private http: HttpClient) {
  }
id:any;
ItemPlants: any;
  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    this.getPlantById(this.id)
     
  }
  getPlantById(id: any){
    this.http.get(`https://api.petiteweb.dev/plants/${id}`).subscribe((res) => {
      this.ItemPlants = res
    })
  }
onDeletePlant(id: string){
  this.http.delete(`https://api.petiteweb.dev/plants/${id}`)
  .subscribe()
}



}