import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Importa MatDialog
import { NoDataDialogComponent } from './no-data-dialog/no-data-dialog.component'; // Importa el componente del diálogo
import { OrderService } from '../../services/orders.service';
import { Order } from '../../models/order.model';



@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.css']
})
export class CargoDetailsComponent implements OnInit {
  orderNumber: string | null = null;
  orderData: Order | null = null; // Aquí guardaremos los datos de la orden
  showPickup: boolean = true; // Controla el switch entre Pickup y Dropoff
  isPanelExpanded: boolean = false; // Controla el panel 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private dialog: MatDialog // Inyecta MatDialog
  ) {}

  ngOnInit(): void {
    this.orderNumber = this.route.snapshot.paramMap.get('order_number');
    console.log('Order Number:', this.orderNumber);

    if (this.orderNumber) {
      this.orderService.getOrderByNumber(this.orderNumber).subscribe(
        (data: Order | undefined) => {
          if (data) {
            console.log('Order Data:', data);
            this.orderData = data;
          } else {
            console.error('Order not found');
            this.openNoDataDialog(); // Abre el popup si no hay datos
          }
        },
        (error) => {
          console.error('Error fetching order data:', error);
          this.openNoDataDialog(); // Abre el popup en caso de error
        }
      );
    } else {
      this.openNoDataDialog(); // Abre el popup si no hay número de orden
    }
  }

  togglePickupDropoff(): void {
    this.showPickup = !this.showPickup; // Alterna entre Pickup y Dropoff
  }
  
  togglePanel(): void {
    this.isPanelExpanded = !this.isPanelExpanded; // Alterna el panel expandible
  }
  
  trackOrder(): void {
    if (this.orderData && this.orderData.status >= 3) {
      console.log('Track Order');
    }
  }

  openNoDataDialog(): void {
    const dialogRef = this.dialog.open(NoDataDialogComponent, {
      data: { orderNumber: this.orderNumber },
      width: '300px', 
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/cargo-orders']); 
    });
  }
}