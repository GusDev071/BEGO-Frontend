export interface UpcomingOrder {
  _id: string;
  status: number;
  order_number: string;
  manager: string; // ID del manager (string)
  driver: string;  // ID del driver (string)
  version: string;
  type: string; // Tipo de orden (por ejemplo, "FTL")
  destinations: UpcomingDestination[];
  start_date: number; // Timestamp en milisegundos
  end_date: number;   // Timestamp en milisegundos
  is_today: boolean;
  status_string: string; // Estado en texto (por ejemplo, "Orden Asignada")
  status_class: string;  // Clase CSS para el estado (por ejemplo, "grey-dot-bg")
  driver_thumbnail?: string | null; // Puede ser `null` o una URL
}

export interface UpcomingDestination {
  address: string; // Dirección completa
  start_date: number; // Timestamp en milisegundos
  end_date: number;   // Timestamp en milisegundos
  nickname: string;   // Nombre del destino (por ejemplo, "Recolección")
  show_navigation: boolean; // Indica si se debe mostrar navegación
}