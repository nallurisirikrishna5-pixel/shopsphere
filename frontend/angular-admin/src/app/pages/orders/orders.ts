import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatChipsModule, MatCardModule, MatButtonModule],
  template: `
    <h1 style="font-size:1.75rem;font-weight:700;color:#1e293b;margin-bottom:1.5rem;">Orders</h1>
    <mat-card>
      <table mat-table [dataSource]="orders" style="width:100%;">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Order ID</th>
          <td mat-cell *matCellDef="let o" style="font-weight:600;">{{o.id}}</td>
        </ng-container>
        <ng-container matColumnDef="customer">
          <th mat-header-cell *matHeaderCellDef>Customer</th>
          <td mat-cell *matCellDef="let o">{{o.customer}}</td>
        </ng-container>
        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef>Date</th>
          <td mat-cell *matCellDef="let o">{{o.date}}</td>
        </ng-container>
        <ng-container matColumnDef="items">
          <th mat-header-cell *matHeaderCellDef>Items</th>
          <td mat-cell *matCellDef="let o">{{o.items}}</td>
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
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let o">
            <button mat-button style="color:#6366f1;">View</button>
            <button mat-button style="color:#16a34a;">Update</button>
          </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-card>
  `
})
export class OrdersComponent {
  orders = [
    { id:'#ORD-001', customer:'John Smith', date:'2025-01-15', amount:999, items:1, status:'Delivered' },
    { id:'#ORD-002', customer:'Sarah Jones', date:'2025-01-16', amount:1299, items:1, status:'Processing' },
    { id:'#ORD-003', customer:'Mike Brown', date:'2025-01-17', amount:349, items:2, status:'Shipped' },
    { id:'#ORD-004', customer:'Emma Wilson', date:'2025-01-18', amount:178, items:3, status:'Pending' },
    { id:'#ORD-005', customer:'Chris Lee', date:'2025-01-19', amount:49, items:1, status:'Delivered' },
  ];

  displayedColumns = ['id', 'customer', 'date', 'items', 'amount', 'status', 'actions'];

  getStatusColor(status: string): string {
    const map: any = { 'Delivered':'primary', 'Processing':'accent', 'Shipped':'warn', 'Pending': undefined };
    return map[status];
  }
}
