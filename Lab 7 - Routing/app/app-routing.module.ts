import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [

  { path: 'home', component:HomeComponent},
  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'productdetails', component:ProductdetailsComponent},
  { path: 'contact', component:ContactComponent},
  { path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
