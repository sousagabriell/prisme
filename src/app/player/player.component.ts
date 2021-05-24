import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  
 
  audioList = [
    {
      url: "../../assets/musics/mp3/Linhas Riquíssimas_70k.mp3",
      title: "Rico Dalasam - Linhas Riquíssimas feat. Glória Groove",
      cover: "../../assets/musics/cover/linhas-riquissimas.jpg",
      widht:'100%'
    },
    {
      url: "../../assets/musics/mp3/Quebrada Queer - Guigo Murillo Zyess Harlley Lucas Boombeat Tchelo Gomez_50k.mp3",
      title: "Quebrada Queer - Guigo | Murillo Zyess | Harlley | Boombeat | Tchelo Gomez",
      cover: "../../assets/musics/cover/quebrada-querr.jpg"
    },
    {
      url: "../../assets/musics/mp3/linn-da-quebrada-bixa-preta.mp3",
      title: "Linn da Quebrada - Bixa Preta",
      cover: "../../assets/musics/cover/linn-da-quebrada.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
