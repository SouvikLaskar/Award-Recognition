import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;
  title = 'EmployeeCRUD';

  employeeForm: FormGroup;

  employees: Employee[];
  employeesToDisplay: Employee[];
  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];


  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
      lastPromotion: this.fb.control(''),
      gid: this.fb.control(''),
      doj: this.fb.control(''),
      jobDesignation: this.fb.control(''),
      awardsReceived: this.fb.control(''),
      awardName: this.fb.control(''),
      awardDate: this.fb.control(''),
    });

    this.employeeService.getEmployees().subscribe((res) => {
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
  }

  addEmployee() {
    let employee: Employee = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      jobExperience: this.JobExperience.value,
      profile: this.fileInput.nativeElement.files[0]?.name,
      lastPromotion: this.lastPromotion.value,
      gid: this.gid.value,
      doj: this.doj.value,
      jobDesignation: this.jobDesignation.value,
      awardsReceived: this.awardsReceived.value,
      awardName: this.awardName.value,
      awarddate: this.awardDate.value,
    };
    this.employeeService.postEmployee(employee).subscribe((res) => {
      this.employees.unshift(res);
      this.clearForm();
    });
  }

  removeEmployee(event: any) {
    this.employees.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.employeeService.deleteEmployee(event).subscribe((res) => {
          this.employees.splice(index, 1);
        });
      }
    });
  }

  editEmployee(event: any) {
    this.employees.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeEmployee(event);
    this.addEmployeeButton.nativeElement.click();
  }

  

  setForm(emp: Employee) {
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthdate);
    this.Gender.setValue(emp.gender);
    let educationIndex = 0;
    this.educationOptions.forEach((val, index) => {
      if (val === emp.education) educationIndex = index;
    });
    this.Education.setValue(educationIndex);
    this.gid.setValue(emp.gid);
    this.jobDesignation.setValue(emp.jobDesignation);
    this.awardsReceived.setValue(emp.awardsReceived);
    this.awardName.setValue(emp.awardName);
    this.awardDate.setValue(emp.awarddate);
    this.lastPromotion.setValue(emp.lastPromotion);
    this.JobExperience.setValue(emp.jobExperience);
    this.doj.setValue(emp.doj);
    this.fileInput.nativeElement.value = '';
  }

  searchEmployees(event: any) {
    let filteredEmployees: Employee[] = [];

    if (event === '') {
      this.employeesToDisplay = this.employees;
    } else {
      filteredEmployees = this.employees.filter((val, index) => {
        let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.JobExperience.setValue('');
    this.fileInput.nativeElement.value = '';
    this.lastPromotion.setValue('');
    this.gid.setValue('');
    this.doj.setValue('');
    this.jobDesignation.setValue('');
    this.awardsReceived.setValue('');
    this.awardName.setValue('');
    this.awardDate.setValue('');
  }

  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Education(): FormControl {
    return this.employeeForm.get('education') as FormControl;
  }
  public get JobExperience(): FormControl {
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get lastPromotion(): FormControl {
    return this.employeeForm.get('lastPromotion') as FormControl;
  }
  public get gid(): FormControl {
    return this.employeeForm.get('gid') as FormControl;
  }
  public get doj(): FormControl {
    return this.employeeForm.get('doj') as FormControl;
  }
  public get jobDesignation(): FormControl {
    return this.employeeForm.get('jobDesignation') as FormControl;
  }
  public get awardsReceived(): FormControl {
    return this.employeeForm.get('awardsReceived') as FormControl;
  }
  public get awardName(): FormControl {
    return this.employeeForm.get('awardName') as FormControl;
  }
  public get awardDate(): FormControl {
    return this.employeeForm.get('awardDate') as FormControl;
  }
}
