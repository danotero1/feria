import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  
  
  //urlMayor = 'http://localhost:80/pruebas/Mayor.php';
  
  urlMayor = 'http://jenkins.b612.cloud/mayor.php';
  
  
  //urlPrimero = 'http://localhost:80/pruebas/primero.php';
  
  urlPrimero = 'http://jenkins.b612.cloud/primero.php';
  
  //urlUltimo = 'http://localhost:80/pruebas/primero.php';
  
  urlUltimo = 'http://jenkins.b612.cloud/ultimo.php'

  urlTabla = 'http://localhost:80/pruebas/tabla.php';

  //urlTabla = 'http://jenkins.b612.cloud/tabla.php';
  constructor(private http: HttpClient) { }
  getPrimero() {

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'content-Type': 'application/json',
      })
    };

    let header = new HttpHeaders({
      'content-Type': 'application/json',

      // 'x-auth-token': localStorage.getItem("token")
    });
    return this.http.get(this.urlPrimero,{headers:header});
  }
  getTabla(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'content-Type': 'application/json',
      })
    };

    let header = new HttpHeaders({
      'content-Type': 'application/json',

      // 'x-auth-token': localStorage.getItem("token")
    });
    return this.http.get(this.urlTabla,{headers:header});
  }
  getUltimo(){

    
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'content-Type': 'application/json',
      })
    };

    let header = new HttpHeaders({
      'content-Type': 'application/json',

      // 'x-auth-token': localStorage.getItem("token")
    });
    return this.http.get(this.urlUltimo,{headers:header});

  };

  
  getMayor(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'content-Type': 'application/json',
      })
    };

    let header = new HttpHeaders({
      'content-Type': 'application/json',

      // 'x-auth-token': localStorage.getItem("token")
    });
    return this.http.get(this.urlMayor,{headers:header});
  }
}
