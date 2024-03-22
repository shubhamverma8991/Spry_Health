import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.css", "../../styles.css"],
})
export class EmployeeFormComponent {
  @Input() selectedClient: string | undefined;
  employeeForm: FormGroup;
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

  onSubmit() {
    if (this.employeeForm.valid) {
      // Form is valid, proceed with form submission
      console.log(this.employeeForm.value);
      // You can also reset the form after successful submission
      this.employeeForm.reset();
    } else {
      // Form is invalid, display error messages or handle accordingly
    }
  }
}
