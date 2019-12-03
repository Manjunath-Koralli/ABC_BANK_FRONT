export class Employee{
	
	public empId:number;
	public name:string;
	public dob: string;
	public contact: number;
	public username: string;
	public pwd: string;
	public role:string;

	
	

	constructor(name:string,dob: string,phno: number,username: string,password: string,role:string)
	{	
		this.name=name;
		this.dob=dob;
		this.contact=phno;
		this.username=username;
		this.pwd=password;
		this.role=role;
	}
}