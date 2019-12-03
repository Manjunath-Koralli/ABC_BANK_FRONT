export class Employee{
	
	public emp_no:number;
	public name:string;
	public dob: string;
	public phno: number;
	public username: string;
	public password: string;
	public emp_role:string;

	
	

	constructor(name:string,dob: string,phno: number,username: string,password: string,role:string)
	{	
		this.name=name;
		this.dob=dob;
		this.phno=phno;
		this.username=username;
		this.password=password;
		this.emp_role=role;
	}
}