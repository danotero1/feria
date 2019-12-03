import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  //urlForm = 'http://localhost:80/pruebas/formulario.php';

  urlForm = 'http://jenkins.b612.cloud/formulario.php';

  //urlRes = 'http://localhost:80/pruebas/calificar.php';
  
  urlRes = 'http://jenkins.b612.cloud/calificar.php';

  constructor(private http: HttpClient) { }

  setForm(form: any){
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
    return this.http.post(this.urlRes, form, {headers:header});
  }
  getForm(id: any){

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
    return this.http.post(this.urlForm, id, {headers:header});




  }
}
