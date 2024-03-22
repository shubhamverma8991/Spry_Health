import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-client-selection",
  templateUrl: "./client-selection.component.html",
  styleUrls: ["./client-selection.component.css", "../../styles.css"],
})
export class ClientSelectionComponent {
  @Output() clientSelectionChanged = new EventEmitter<string>();
  selectedClient: string = "Client-A"; // Set default value here

  ngOnInit() {
    // Emit the default selected client when the component initializes
    this.clientSelectionChanged.emit(this.selectedClient);
  }

  onClientSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    const client = target.value;
    this.selectedClient = target.value;
    this.clientSelectionChanged.emit(client);
  }
}
