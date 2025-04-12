import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UpcomingOrder } from '../models/upcoming-order.model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingOrderService {
  private apiUrl = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming';

  constructor(private http: HttpClient) {}

  getUpcomingOrders(): Observable<UpcomingOrder[]> {
    return this.http.get<{ status: number; result: UpcomingOrder[] }>(this.apiUrl).pipe(
      map(response => response.result) // Extrae el array de órdenes de la propiedad `result`
    );
  }
}