import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  };

  apiURL = 'https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/open-api-catalog/modulo_actividad/';
  
  apiActualizarActividad = 'https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/modulo_actividad/actualizarActividad/:id';
  apiEliminarActividad = 'https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/modulo_actividad/eliminarActividad/:id';
  apiInsertarActividad = 'https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/modulo_actividad/insertarActividad/:id';
  apiObtenerActividad = 'https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/modulo_actividad/obtenerActividad/:id';
  apiObteneActividades = 'https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/modulo_actividad/obtenerActividades';

  constructor(private http:HttpClient) { }

  datosgetActividades():Observable<any>{
    //return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
    return this.http.get('https://g16b2df43ad90f8-actividadesproyectoinformes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/modulo_actividad/obtenerActividades').pipe(retry(3));
  };
  datosgetActividad(id:string):Observable<any>{
    return this.http.get(this.apiURL+ '/obtenerActividad/'+id).pipe(retry(3));
  }
}
