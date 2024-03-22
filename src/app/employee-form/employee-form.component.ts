import { Component, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.css", "../../styles.css"],
})
export class EmployeeFormComponent {
  @Input() selectedClient: string | undefined;
  employeeForm: FormGroup;
  employeeData: any; // Property to store form data
  formFieldSequence = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "address",
    "position",
    "dateOfJoining",
  ];

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: [
        "",
        [Validators.required, Validators.pattern("^[0-9]{10}$")],
      ],

      address: [""],
      position: ["", Validators.required],
      dateOfJoining: ["", Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["selectedClient"] &&
      changes["selectedClient"].currentValue !==
        changes["selectedClient"].previousValue
    ) {
      this.resetForm();
    }
  }

  resetAll() {
    this.employeeForm.reset();
    this.employeeData = undefined;
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.employeeData = this.employeeForm.value;
      this.employeeForm.reset();
    } else {
    }
  }

  resetForm() {
    this.resetAll();
  }
}
