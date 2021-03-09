export class Alumno{
	public id: string;
	public nombre: string;
	public aPaterno: string;
	public aMaterno: string;
	public grupo: string;
	public promedio: number;

	

	constructor (id: any, nombre: any, aPaterno: any,aMaterno: any, grupo: any, promedio: any){
		this.id = id;
		this.nombre = nombre;
		this.aPaterno = aPaterno;
		this.aMaterno = aMaterno;
		this.grupo = grupo;
		this.promedio = promedio;
	
	
	}
	
}