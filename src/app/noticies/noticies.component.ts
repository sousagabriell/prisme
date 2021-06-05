import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Noticias } from '../../model/noticiais.model';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss']
})
export class NoticiesComponent implements OnInit {

  noticias: Noticias[] | undefined; 

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.noticiasService.read().subscribe(noticias => {
      this.noticias = noticias
    })
  }

}
