import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interface/login.interface';
import { Grupo } from '../../interface/grupo.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Login = {
    user:'',
    password:''
  };
  grupo: Grupo = {
    nombre_grupo: '',
    id_formulario: '',
    nombre_proyecto: ''

  };
  resp: any = [];
  constructor(private route: Router, private log: LoginService, public alertController: AlertController ) { }

  ngOnInit() {


  }

  async login() {
    console.log(this.user);

    this.log.loginA(this.user).subscribe(async data => {
      console.log(data);
      this.resp = data;
      localStorage.setItem('grupos', JSON.stringify(this.resp ));
      console.log(this.resp[0].nombre_grupo);
      if (data){
        this.route.navigateByUrl('/tabs/tab1');
      } else {
        const alert = await this.alertController.create({
          header: 'Ups..',
          message: 'Usuario o contraseña incorrecta',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    },(error) => {
      
      console.log(error);
    });
    // this.route.navigateByUrl('/tabs/tab1');
  }


}
