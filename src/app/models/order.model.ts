export interface Order {
    _id: string;
    stamp: boolean;
    reference_number: string;
    status: number;
    completion_percentage: number;
    cargo: Cargo;
    user_id: string;
    order_number: string;
    route: Route;
    created: number;
    distance_mts: number;
    manager: Manager;
    bego_order: boolean;
    invoice: Invoice;
    pricing: Pricing;
    driver: Driver;
    trailer: Trailer;
    truck: Truck;
    version: string;
    add_ons: AddOns;
    ETA: number;
    map: MapData;
    stampedPercentage: number;
    start_date: number;
    end_date: number;
    status_list: StatusList;
    destinations: Destination[];
  }
  
  export interface Cargo {
    ["53_48"]: string;
    type: string;
    required_units: number;
    description: string;
    hazardous_type: string;
    weigth: number[];
    cargo_goods: string;
    hazardous_material: string;
    packaging: string;
    unit_type: string;
    weight_unit: string;
  }
  
  export interface Route {
    route: string;
    single: number;
    pickup: string;
    dropoff: string;
    status: number;
    end_date: number;
    start_date: number;
    stay: string;
  }
  
  export interface Manager {
    _id: string;
    nickname: string;
    raw_nickname: string;
    email: string;
    telephone: string;
    raw_telephone: string;
    country_code: string;
    language: string;
    date_created: number;
    full_documentation: boolean;
    verified: boolean;
    allow_login: boolean;
    availability: number;
    mood: number;
    connected: boolean;
    active_sessions: number;
    location: LocationData;
    role: number;
    test: boolean;
    tags: string[];
    cer: FileData;
    key: FileData;
    key_pswd: string;
    version: string;
    place_id: string;
  }
  
  export interface LocationData {
    lat: number;
    lng: number;
    geometry: {
      type: string;
      coordinates: number[];
    };
  }
  
  export interface FileData {
    ETag: string;
    Key: string;
    Bucket: string;
    Location: string;
  }
  
  export interface Invoice {
    series_id: string;
    fullname: string;
    phonenumber: string | null;
    country_code: string | null;
    email: string | null;
    address: string;
    company: string | null;
    rfc: string;
    cfdi: string;
    receiver: Receiver;
  }
  
  export interface Receiver {
    address: {
      place_id: string;
    };
    branch: string | null;
    cfdi: string;
    rfc: string;
    company: string;
    place_id: string;
  }
  
  export interface Pricing {
    deferred_payment: boolean;
    subtotal: number;
    insurance: number;
    customs: number;
    cruce: number;
    taxes: number;
    extras: number;
    driver_earnings: number;
    total: number;
    pre_taxes: number;
    single: number;
  }
  
  export interface Driver {
    _id: string;
    nickname: string;
    raw_nickname: string;
    email: string;
    telephone: string;
    raw_telephone: string;
    country_code: string;
    language: string;
    date_created: number;
    full_documentation: boolean;
    verified: boolean;
    allow_login: boolean;
    availability: number;
    mood: number;
    connected: boolean;
    active_sessions: number;
    location: LocationData;
    role: number;
    test: boolean;
    version: string;
    thumbnail: string;
  }
  
  export interface Trailer {
    _id: string;
    attributes: {
      plates: string;
      trailer_number: string;
      type: string;
    };
    active: boolean;
    thumbnail: string;
  }
  
  export interface Truck {
    _id: string;
    attributes: {
      plates: string;
      year: string;
      brand: string;
      color: string;
      caat: string;
      colorName: string;
      sct_permission: string;
      sct_permission_text: string;
      sct_number: string;
      truck_settings: string;
      truck_settings_text: string;
      insurer: string;
      policy_number: string;
    };
    active: boolean;
    thumbnail: string;
  }
  
  export interface AddOns {
    cargo_value: number;
    insurance: boolean;
    cruce: boolean;
    customs_agent: boolean;
    min_insurance: boolean;
    insurance_percentage: number;
  }
  
  export interface MapData {
    original_url: string;
    thumbnail_url: string;
  }
  
  export interface StatusList {
    pickup: Status[];
    dropoff: Status[];
  }
  
  export interface Status {
    active: boolean;
    status: string;
  }
  
  export interface Destination {
    lat: number;
    lng: number;
    address: string;
    startDate: number;
    zip_code: number;
    place_id_pickup?: string;
    place_id_dropoff?: string;
    contact_info: ContactInfo;
    geometry: {
      type: string;
      coordinates: number[];
    };
    raw_address: string;
    evidence: {
      pictures: any[];
      extra_notes: string;
      signature: Record<string, any>;
    };
    status: number;
    status_class: string;
    status_string: string;
    endDate?: number;
  }
  
  export interface ContactInfo {
    name: string;
    telephone: string;
    email: string;
    country_code: string;
    rfc: string;
  }