import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { FlowerCardComponent } from './flower-card/flower-card.component';
import { ButtonComponent } from './Button/button.component';
import { WordComponent } from './Word/Word.component';
// import { AddPlantComponent } from './AddPlant/AddPlant.component';s
import { AboutComponent } from './About/About.component';
import { SimpleComponent } from './Simple/Simple.component';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './Header/Header.component';
import { ErrComponent } from './404/404.component';
import { ProductComponent } from './Product/Product.component';
import { AjaxComponent } from './Ajax/Ajax.component';
import { PlantsComponent } from './Plants/Plants.component';

//список путей SPA
const routers: Routes = [
  // {path: "путь", component: Компонент}
  {path: "home", component: HomeComponent},
  {path: "simple", component: SimpleComponent},
  // {path: "about", component: AboutComponent},
  // {path: "product", component: ProductComponent},
  {path: "ajax", component: AjaxComponent},
  {path: "ajax/:name", component: ProductComponent},
  // {path: "category/:id", component: ProductComponent},
  {path: "plants", component: PlantsComponent},
  {path: "plants/:id", component: ProductComponent},
  {path: "**", component: ErrComponent}
]

@NgModule({
  declarations: [									
    AppComponent,
    FlowerCardComponent,
    ButtonComponent,
    WordComponent,
    // AddPlantComponent,
    AboutComponent,
    SimpleComponent,
    HomeComponent,
    HeaderComponent,
    ErrComponent,
    ProductComponent,
    AjaxComponent,
      PlantsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routers),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
