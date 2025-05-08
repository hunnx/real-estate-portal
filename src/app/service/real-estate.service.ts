import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent, Customer, Property, Enquiry, LoginRequest, LoginResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private baseUrl = 'https://projectapi.gerasim.in/api/RealEstate/';

  constructor(private http: HttpClient) {}

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}GetAllAgents`);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}GetAllCustomers`);
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}login`, request);
  }

  addNewAgent(agent: Agent): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.baseUrl}AddNewAgent`, agent, { headers });
  }

  addNewCustomer(customer: Customer): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.baseUrl}AddNewCustomer`, customer, { headers });
  }

  updateUser(user: Customer): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.baseUrl}UpdateUser`, user, { headers });
  }

  deleteUserById(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}DeleteUserByUserId/${userId}`);
  }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.baseUrl}GetAllProperty`);
  }

  addNewProperty(property: Property): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.baseUrl}AddNewProperty`, property, { headers });
  }

  updateProperty(property: Property): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.baseUrl}UpdateProperty`, property, { headers });
  }

  deletePropertyById(propertyId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}DeletePropertyId/${propertyId}`);
  }

  getEnquiriesByAgentId(agentId: string): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(`${this.baseUrl}GetEnquiryReceivedByAgentId/${agentId}`);
  }

  getEnquiriesByPropertyId(propertyId: string): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(`${this.baseUrl}GetEnquiryReceivedByPropertyId/${propertyId}`);
  }

  addNewEnquiry(enquiry: Enquiry): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.baseUrl}AddNewEnquiry`, enquiry, { headers });
  }
}