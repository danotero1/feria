import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from '../../interface/form.interface';
import { Pregunta } from '../../interface/pregunta.interface';
import { Send } from '../../interface/send.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  id = '';
  forma: Form = {
    idForm: ''
  };
  
  res: Send = {
    idForm: null,
    calf: null,
    numPregunta: null
  };
  pre: Pregunta[];

  constructor(public alertController: AlertController,private route: ActivatedRoute,private router: Router, private form: FormService) { 
    
    // this.route.params.subscribe(parametros =>{
    //     // tslint:disable-next-line:no-string-literal
    //     this.id = parametros['id'];
    //     console.log(this.id);
    // });

    // // this.forma.idForm = localStorage.getItem("form");
    // this.forma.idForm = this.id;

    // this.pre = [];
    // this.form.getForm(this.forma).subscribe(data => {

    //   this.pre = JSON.parse(JSON.stringify(data));
    //   console.log(this.pre);
    // });
  }

  ngOnInit() {
    this.route.params.subscribe(parametros =>{
      // tslint:disable-next-line:no-string-literal
      this.id = parametros['id'];
      console.log(this.id);
  });

  // this.forma.idForm = localStorage.getItem("form");

    this.forma.idForm = this.id;

    this.pre = [];
    this.form.getForm(this.forma).subscribe(data => {

      this.pre = JSON.parse(JSON.stringify(data));
      console.log(this.pre);
    });
    
  }
  async send(){

    for(let i = 0; i < this.pre.length; i++){
      this.res.idForm = this.forma.idForm;
      this.res.numPregunta = this.pre[i].ordenPregunta;
      this.res.calf = this.pre[i].calf;
      this.form.setForm(this.res).subscribe(data =>{
        console.log(data);
      });
    }
    const alert = await this.alertController.create({
      header: 'Correcto',
      message: 'Sus respuestas fueron enviadas ',
      buttons: ['OK']
    });
    
    await alert.present();
    this.router.navigateByUrl('/tabs/tab1');
  }

}
