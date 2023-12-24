import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  actividades=[];


  constructor(private datos: DatosService, 
    private router:Router, 
    private navCtrl: NavController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  getActividades(){
    console.log("Actividades:Inicio");
    this.datos.datosgetActividades().subscribe((res)=>{
      console.log("Actividades:Correcto");
      this.actividades=res["items"];
      console.log("Actividades:Asignación");
      console.log(res);
    },
    (error)=>{
      console.log("Actividades: Error");
      console.log(error);
    });
    console.log("Actividades:Fin");
  };

  editActividad(id:string){
    const data = id;
    console.log("Actividad: Ingreso, Variable : " + id)

    let navigationExtras: NavigationExtras ={
      state:{data: data}
    };

    this.router.navigate(['editar-actividad'], navigationExtras);
  }

}
