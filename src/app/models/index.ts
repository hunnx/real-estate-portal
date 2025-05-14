export interface Agent {
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    role: string;
    createdDate: string; // or Date, depending on how you're handling dates
    password: string;
    projectName: string;
    refreshToken: string | null;
    refreshTokenExpiryTime: string | null; // or Date | null, if using Date objects
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