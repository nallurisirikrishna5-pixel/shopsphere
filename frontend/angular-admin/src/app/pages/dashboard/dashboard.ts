import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatChipsModule],
  template: `
    <h1 style="font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;color:#1e293b;">Dashboard Overview</h1>

    <!-- STATS CARDS -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem;">
      <mat-card *ngFor="let stat of stats" style="padding:1.25rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <p style="color:#64748b;font-size:.85rem;margin:0 0 .5rem;">{{stat.label}}</p>
            <h2 style="font-size:1.75rem;font-weight:700;margin:0;color:#1e293b;">{{stat.value}}</h2>
            <p [style.color]="stat.up ? '#16a34a' : '#dc2626'" style="margin:.5rem 0 0;font-size:.85rem;font-weight:600;">
              {{stat.change}} vs last month
            </p>
          </div>
          <span style="font-size:2.5rem;">{{stat.icon}}</span>
        </div>
      </mat-card>
    </div>

    <!-- ORDERS TABLE -->
    <mat-card>
      <div style="padding:1rem 1rem 0;">
        <h2 style="font-size:1.1rem;font-weight:600;margin:0 0 1rem;color:#1e293b;">Recent Orders</h2>
      </div>
      <table mat-table [dataSource]="recentOrders" style="width:100%;">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Order ID</th>
          <td mat-cell *matCellDef="let o">{{o.id}}</td>
        </ng-container>
        <ng-container matColumnDef="customer">
          <th mat-header-cell *matHeaderCellDef>Customer</th>
          <td mat-cell *matCellDef="let o">{{o.customer}}</td>
        </ng-container>
        <ng-container matColumnDef="product">
          <th mat-header-cell *matHeaderCellDef>Product</th>
          <td mat-cell *matCellDef="let o">{{o.product}}</td>
        </ng-container>
        <ng-container matColumnDef="amount">
          <th mat-header-cell *matHeaderCellDef>Amount</th>
          <td mat-cell *matCellDef="let o" style="font-weight:700;color:#6366f1;">\${{o.amount}}</td>
        </ng-container>
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let o">
            <mat-chip [color]="getStatusColor(o.status)" highlighted>{{o.status}}</mat-chip>
          </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-card>
  `
})
export class DashboardComponent {
  stats = [
    { label:'Total Revenue', value:'$48,295', icon:'💰', change:'+12%', up:true },
    { label:'Total Orders', value:'1,284', icon:'🧾', change:'+8%', up:true },
    { label:'Total Products', value:'340', icon:'📦', change:'+3%', up:true },
    { label:'Total Customers', value:'5,920', icon:'👥', change:'-2%', up:false },
  ];

  recentOrders = [
    { id:'#ORD-001', customer:'John Smith', product:'iPhone 15 Pro', amount:999, status:'Delivered' },
    { id:'#ORD-002', customer:'Sarah Jones', product:'MacBook Air M3', amount:1299, status:'Processing' },
    { id:'#ORD-003', customer:'Mike Brown', product:'Sony WH-1000XM5', amount:349, status:'Shipped' },
    { id:'#ORD-004', customer:'Emma Wilson', product:'Nike Air Max', amount:129, status:'Pending' },
    { id:'#ORD-005', customer:'Chris Lee', product:'Yoga Mat Premium', amount:49, status:'Delivered' },
  ];

  displayedColumns = ['id', 'customer', 'product', 'amount', 'status'];

  getStatusColor(status: string): string {
    const colors: any = { 'Delivered':'primary', 'Processing':'accent', 'Shipped':'warn', 'Pending': undefined };
    return colors[status];
  }
}