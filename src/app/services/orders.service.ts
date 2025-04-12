import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las órdenes
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

     getOrderByNumber(order_number: string): Observable<Order | undefined> {
    return this.http.get<{ status: number; result: Order }>(this.apiUrl).pipe(
      map(response => {
        // Verifica si el `order_number` coincide con el de la respuesta
        return response.result.order_number === order_number ? response.result : undefined;
      })
    );
  }

  // Método para crear una nueva orden
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  // Método para actualizar una orden existente
  updateOrder(id: string, order: Partial<Order>): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
  }

  // Método para eliminar una orden
  deleteOrder(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}