import { Component } from "@angular/core";

@Component({
  selector: "app-form-wrapper",
  templateUrl: "./form-wrapper.component.html",
  styleUrls: ["./form-wrapper.component.css", "../../styles.css"],
})
export class FormWrapperComponent {
  selectedClient: string | undefined;
  constructor() {}
  clientSelectionChanged(client: string) {
    this.selectedClient = client;
  }
}
