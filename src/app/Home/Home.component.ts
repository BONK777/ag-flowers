import { Component } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent {
  title = 'flowers';
  plants: {name: string, icon: string, category: string, sun: number,wet: string, care: string }[] = [...data];
  plantsCnt: number = this.plants.length;
  word: string = 'растений'
  inc(): void {
    this.plantsCnt++
  }
  dec(): void {
      this.plantsCnt--
      if (this.plantsCnt <= 0) {
          this.plantsCnt = 0;
      }
  }
  setWord($event: string) {
    this.word = $event;
  }
}
