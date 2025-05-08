export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
}

export interface Enquiry {
  id: string;
  agentId: string;
  propertyId: string;
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}