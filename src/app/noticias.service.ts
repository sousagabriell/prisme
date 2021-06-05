import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias } from '../model/noticiais.model';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  baseUrl = "http://localhost:8080/noticias"

  constructor(private hhtp: HttpClient) { }

  read(): Observable<Noticias[]> {
    return this.hhtp.get<Noticias[]>(this.baseUrl)
  }
}
