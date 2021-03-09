import { Component, OnInit } from '@angular/core';
import {Mascota} from '../model/mascota';
import {Alumno} from '../model/alumno';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
public mascotas: Array<Mascota>;
public alumnos: Array<Alumno>;
public aux: boolean = true;

 
  constructor() { 

		this.mascotas = [
			new Mascota('54','Pastor Aleman', 'Canino','10/01/2021','02/03/2021','1000.00','0'),
			new Mascota('55','Chiuhuahua', 'Canino','11/01/2021','01/03/2021','200.00','6'),
			new Mascota('56','Persa', 'Felino','10/01/2021','02/03/2021','640.00','6'),
			new Mascota('57','Bulico', 'Ave','01/01/2021','02/03/2021','50.00','0'),
			new Mascota('58','Morgan', 'Caballo','03/01/2021','02/03/2021','90899.00','6')


		];
		this.alumnos = [
			new Alumno('1','Jesus', 'Rocha','Rocha','DSM504','7.5'),
			new Alumno('2','Rogelio', 'Ibarra','Castro','DSM504','10'),
			new Alumno('3','Perla', 'Contreras','Castillo','DSM504','8'),
			new Alumno('4','Edgar', 'Mendez','Soto','DSM504','7.4'),
			new Alumno('5','Sandra', 'Perez','Gutierrez','DSM504','9')


		];
	}
 ocultarComponente(value: boolean){
  	this.aux = value;


  }
  ngOnInit(): void {
  }

}
