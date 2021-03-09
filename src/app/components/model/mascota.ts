export class Mascota{
	public idMascota: string;
	public raza: string;
	public especie: string;
	public fechaNac: string;
	public fechaLlegada: string;
	public precio: number;
	public existencias: number;
	

	constructor (idMascota: any, raza: any, especie: any,fechaNac: any, fechaLlegada: any, precio: any, existencias:any){
		this.idMascota = idMascota;
		this.raza = raza;
		this.especie = especie;
		this.fechaNac = fechaNac;
		this.fechaLlegada = fechaLlegada;
		this.precio = precio;
		this.existencias = existencias;
	
	}
	
}