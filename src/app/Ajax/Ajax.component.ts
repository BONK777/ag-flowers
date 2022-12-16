import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plants";


@Component({
  selector: 'app-Ajax',
  templateUrl: './Ajax.component.html',
  styleUrls: ['./Ajax.component.css']
})
export class AjaxComponent implements OnInit{
  data : {name: string, icon: string, likes: number}[] = []
  icons: string[] = [
    "fa-solid fa-tree",
    "fa-solid fa-plant-wilt",
    "fa-brands fa-canadian-maple-leaf",
    "fa-solid fa-clover",
    "fa-solid fa-plant-wilt",
    "fa-solid fa-tree",
    "fa-solid fa-tree",
    "fa-solid fa-tree",
    "fa-solid fa-tree"]
  getNumber(max:number = 11, min:number = 0):number{
    return Math.floor(Math.random() * (max - min) + min);
  }

  loadInfo(self = this): void {
    let path:string = "https://fakerapi.it/api/v1/custom";
    const cnt:number = 3;
    const params: {[k: string]: string} = {
      "name": "word",
      "likes": "number"
    }
    path += `?_quantity=${cnt}`;
    for(let k in params){
      path+=`&${k}=${params[k]}`
    }
    console.log(path)
    fetch(path)
      .then(function (res): any {
        return res.json()
      })
      .then(function (d): any {
        console.log(d);
        for (let i: number = 0; i < d.data.length; i++){
          let item: {[k: string]: any} = d.data[i];
          item["icon"] = self.icons[self.getNumber(self.icons.length)]
          self.data.push(d.data[i]);
        }
        console.log(self.data)
      })
  }

  allPlants: Plants[] = []
  

  constructor(private http: HttpClient){

  }
  reloadCurrentPage() {
    window.location.reload();
   }
  ngOnInit() {
    this.fetchPlants()
  }

  onPlantCreate(plants: {name: string, description: string, images: string[], category: string, sunlight: number, watering:number, temperature: number}){
    console.log(plants)
    this.http.post<{name: string}>('https://api.petiteweb.dev/plants', plants)
    .subscribe((res) =>{
      console.log(res)
      alert("Ваше растение было добавлено")
      this.reloadCurrentPage()
    })
  }
  private fetchPlants(){
    this.http.get<{[key: string]: Plants}>('https://api.petiteweb.dev/plants')
    .pipe(map((res) => {
      const plants = []
       for(const key in res){
        if(res.hasOwnProperty(key)){
          plants.push({...res[key], id: key})
          console.log(res)
        }
        
       }
       return plants;
    }))
    .subscribe((palnts)=>{
      console.log(palnts)
      this.allPlants = palnts;
    })
  }
}