import { Component } from '@angular/core';
import { Report } from '../../interface/report.interface';
import { ReportsService } from '../../services/reports.service';
import { Tabla } from '../../interface/tabla.interface';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mayor: Report = {
    grupo: '',
    descripcion: '',
  };
  primero: Report = {
    grupo: '',
    descripcion: '',
  };
  ultimo: Report = {
    grupo: '',
    descripcion: '',
  };
  tabla: Tabla[] = [];
  constructor(private reporte: ReportsService) {
    this.reporte.getMayor().subscribe(data =>{
      this.mayor = JSON.parse(JSON.stringify(data));
    });

    this.reporte.getPrimero().subscribe(data =>{
      this.primero = JSON.parse(JSON.stringify(data));
    });
    this.reporte.getMayor().subscribe(data =>{
      this.ultimo = JSON.parse(JSON.stringify(data));
    });

    this.reporte.getTabla().subscribe(data =>{
      console.log(data);
      this.tabla = JSON.parse(JSON.stringify(data));
    });
  }

}
