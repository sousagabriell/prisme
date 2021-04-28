import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhoComponent } from './who/who.component';
import { NewsComponent } from './news/news.component';
import { ArtistsComponent } from './artists/artists.component';
import { DalasamComponent } from './singers/dalasam/dalasam.component';




const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'sobre', component: AboutComponent},
  {path: 'quem-somos', component: WhoComponent},
  {path: 'noticias', component: NewsComponent},
  {path: 'artistas', component: ArtistsComponent},
  {path: 'rico-dalasam', component: DalasamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
