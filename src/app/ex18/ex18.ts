import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex18',
  standalone: false,
  templateUrl: './ex18.html',
  styleUrl: './ex18.css',
})
export class Ex18 implements OnInit {
  customers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/customers.json').subscribe({
      next: (data) => {
        console.log('Data loaded:', data);
        this.customers = data;
      },
      error: (error) => {
        console.error('Error loading data:', error);
      }
    });
  }
}
