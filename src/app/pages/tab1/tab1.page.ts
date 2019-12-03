import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Grupo } from '../../interface/grupo.interface';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    grupo = '';
    
    grupos: Grupo[] = [];
    preguntas: string[] = [];
    bandera = false;
    groups: string[] = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5'];
  constructor(private route: ActivatedRoute,public alertController: AlertController,private router: Router,private menu: MenuController) {
    this.grupos = JSON.parse(localStorage.getItem('grupos'));
    console.log(this.grupos);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }
  salir(){
    this.router.navigateByUrl('/tabs');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  buscarGrupo(){
    if (this.grupo === 'prueba'){
      // tslint:disable-next-line:max-line-length
      this.preguntas = ['Considera el poster llamativo y concorde al proyecto', 'Concimeinto del grupo en el tema', 'presentación del grupo'];
      this.bandera = true;
    } else {
      this.preguntas = [];
      this.bandera = false;
    }
  }

  group(i:string){
    console.log(i)
    //this.router.navigate(['form' + '/' + i]);
    localStorage.setItem("form",i);
    
    this.router.navigateByUrl('/tabs/form/' + i);
  }
  async guardar(){

  
      const alert = await this.alertController.create({
        header: 'Correcto',
        
        message: 'Su calificación se ha guardado correctamente.',
        buttons: ['OK']
      });
      this.preguntas = [];
      this.bandera = false;
      await alert.present();
    }
  

}
