import { Injectable } from '@angular/core';
// import { HttpClient ,Headers, RequestOptions} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //urlprueba = 'http://localhost:80/pruebas/test.php';
 // urllogin = 'http://localhost:80/pruebas/login.php';
 
  urllogin = 'http://jenkins.b612.cloud/login.php';
  // urlPrub = 'http://jenkins.b612.cloud:3000/';
  // urlPrub = 'http://jenkins.b612.cloud:3000/test.php';
  urlPrub = 'http://jenkins.b612.cloud:/login.php';

  constructor(private http: HttpClient) { }

  loginA(user: any){

  console.log('entro')
  const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'content-Type': 'application/json',
    })
  };
  // var headers = new Headers();
  // headers.append('Access-Control-Allow-Origin' , '*');
  // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  // headers.append('Accept','application/json');
  // headers.append('content-type','application/json');
  // let options = new RequestOptions({ headers:headers});

  let header = new HttpHeaders({
   
    'content-Type': 'application/json',
   
    
    // 'x-auth-token': localStorage.getItem("token")
    
  });
  // return this.http.get(this.urlprueba, {responseType: 'text'});
  return this.http.post(this.urllogin, user, {headers:header});
  //return this.http.post(this.urlPrub, user, {headers:header});
  // return this.http.post(this.urlPrub, user, {headers:header});
}
}
