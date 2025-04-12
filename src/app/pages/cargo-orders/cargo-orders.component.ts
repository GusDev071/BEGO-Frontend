import { Component, OnInit } from '@angular/core';
import { UpcomingOrderService } from '../../services/upcoming-order.service';
import { UpcomingOrder } from '../../models/upcoming-order.model';

@Component({
  selector: 'app-cargo-orders',
  templateUrl: './cargo-orders.component.html',
  styleUrls: ['./cargo-orders.component.css']
})
export class CargoOrdersComponent implements OnInit {
  orders: UpcomingOrder[] = [];
  filteredOrders: UpcomingOrder[] = [];
  searchTerm: string = '';

  constructor(private upcomingOrderService: UpcomingOrderService) {}

  ngOnInit(): void {
    this.upcomingOrderService.getUpcomingOrders().subscribe((orders) => {
      this.orders = orders;
      this.filteredOrders = orders; // Inicializa el array filtrado con todas las órdenes
    });
  }

  filterOrders(): void {
    this.filteredOrders = this.orders.filter(order =>
      order.order_number.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  canNavigate(startDate: number | undefined): boolean {
    if (startDate === undefined) {
      return false;
    }
    return Date.now() >= startDate;
  }

  getTimeRemaining(startDate: number | undefined): string {
    if (startDate === undefined) {
      return 'N/A';
    }
    const diff = startDate - Date.now();
    if (diff <= 0) {
      return '0h 0m 0s'; // Si el tiempo ya pasó, muestra 0
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  navigate(order: UpcomingOrder): void {
    console.log('Navigate:', order.order_number);
  }

  viewOrderDetails(order: UpcomingOrder): void {
    console.log('View details of order:', order.order_number);
  }

  formatDate(timestamp: number | undefined): string {
    if (timestamp === undefined) {
      return 'N/A';
    }
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  getStatusColor(status: number): string {
    switch (status) {
      case 1: // Orden Asignada
        return 'green';
      case 3: // Recolección completada
        return 'gray';
      default: // Otros estados
        return 'yellow';
    }
  }
}