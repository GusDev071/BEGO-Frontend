export interface UpcomingOrder {
  _id: string;
  status: number;
  order_number: string;
  manager: string; // ID del manager (string)
  driver: string;  // ID del driver (string)
  version: string;
  type: string; 
  destinations: UpcomingDestination[];
  start_date: number; // Timestamp en milisegundos
  end_date: number;   // Timestamp en milisegundos
  is_today: boolean;
  status_string: string; 
  status_class: string;  
  driver_thumbnail?: string | null; 
}

export interface UpcomingDestination {
  address: string; // Dirección completa
  start_date: number; // Timestamp en milisegundos
  end_date: number;   // Timestamp en milisegundos
  nickname: string;   
  show_navigation: boolean; 
}