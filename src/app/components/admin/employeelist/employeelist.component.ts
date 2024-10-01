import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../TypescriptClasses/Employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  addEmployee(): void {
    const newEmployee: Employee = { id: 0, name: 'New Employee', email: 'new@employee.com', phone: '1234567890', address: 'New Address' };
    this.employeeService.createEmployee(newEmployee).subscribe((employee) => {
      this.employees.push(employee);
    });
  }

  editEmployee(id: number | undefined): void {
    const updatedEmployee: Employee = { id, name: 'Updated Employee', email: 'updated@employee.com', phone: '0987654321', address: 'Updated Address' };
    this.employeeService.updateEmployee(id, updatedEmployee).subscribe((employee) => {
      const index = this.employees.findIndex(e => e.id === id);
      if (index !== -1) {
        this.employees[index] = employee;
      }
    });
  }

  deleteEmployee(id: number | undefined): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(employee => employee.id !== id);
    });
  }
}
