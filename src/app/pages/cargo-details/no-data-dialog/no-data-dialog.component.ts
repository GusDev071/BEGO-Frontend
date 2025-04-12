import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-no-data-dialog',
  template: `
    <div class="dialog-container">
      <h2 class="dialog-title">No hay información</h2>
      <p class="dialog-message">No hay información del número de orden: <strong>{{ data.orderNumber }}</strong></p>
      <button mat-button class="dialog-button" (click)="close()">Cerrar</button>
    </div>
  `,
  styles: [`
    .dialog-container {
      text-align: center;
      padding: 20px;
    }
    .dialog-title {
      font-size: 18px;
      margin-bottom: 10px;
      color: #333;
    }
    .dialog-message {
      font-size: 14px;
      margin-bottom: 20px;
      color: #555;
    }
    .dialog-button {
      background-color: #ffc107;
      color: #000;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
    }
    .dialog-button:hover {
      background-color: #e0a800;
    }
  `]
})
export class NoDataDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NoDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderNumber: string }
  ) {}

  close(): void {
    this.dialogRef.close(); // Cierra el popup
  }
}