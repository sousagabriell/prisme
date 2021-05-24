import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngMusicPlayerModule } from  'ang-music-player';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarComponent } from './bar/bar.component';
import { PlayerComponent } from './player/player.component';
import {SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhoComponent } from './who/who.component';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { ArtistsComponent } from './artists/artists.component';
import { DalasamComponent } from './singers/dalasam/dalasam.component';
import { NoticiesComponent } from './noticies/noticies.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BarComponent,
    PlayerComponent,
    HomeComponent,
    AboutComponent,
    WhoComponent,
    NewsComponent,
    ArtistsComponent,
    DalasamComponent,
    NoticiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    AngMusicPlayerModule,



  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
