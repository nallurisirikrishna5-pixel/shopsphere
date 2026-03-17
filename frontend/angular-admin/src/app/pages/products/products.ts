import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatChipsModule, MatCardModule],
  template: `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h1 style="font-size:1.75rem;font-weight:700;color:#1e293b;margin:0;">Products</h1>
      <button mat-raised-button style="background:#6366f1;color:white;">+ Add Product</button>
    </div>

    <mat-card>
      <table mat-table [dataSource]="products" style="width:100%;">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>#</th>
          <td mat-cell *matCellDef="let p">{{p.id}}</td>
        </ng-container>
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Product</th>
          <td mat-cell *matCellDef="let p" style="font-weight:600;">{{p.name}}</td>
        </ng-container>
        <ng-container matColumnDef="category">
          <th mat-header-cell *matHeaderCellDef>Category</th>
          <td mat-cell *matCellDef="let p">{{p.category}}</td>
        </ng-container>
        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef>Price</th>
          <td mat-cell *matCellDef="let p" style="font-weight:700;color:#6366f1;">\${{p.price}}</td>
        </ng-container>
        <ng-container matColumnDef="stock">
          <th mat-header-cell *matHeaderCellDef>Stock</th>
          <td mat-cell *matCellDef="let p">{{p.stock}} units</td>
        </ng-container>
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let p">
            <mat-chip [color]="getStatusColor(p.status)" highlighted>{{p.status}}</mat-chip>
          </td>
        </ng-container>
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let p">
            <button mat-button style="color:#6366f1;">Edit</button>
            <button mat-button style="color:#ef4444;" (click)="deleteProduct(p.id)">Delete</button>
          </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-card>
  `
})
export class ProductsComponent {
  products = [
    { id:1, name:'iPhone 15 Pro', category:'Electronics', price:999, stock:45, status:'Active' },
    { id:2, name:'Nike Air Max', category:'Fashion', price:129, stock:120, status:'Active' },
    { id:3, name:'MacBook Air M3', category:'Electronics', price:1299, stock:12, status:'Low Stock' },
    { id:4, name:'Coffee Maker Pro', category:'Home', price:89, stock:0, status:'Out of Stock' },
    { id:5, name:'Sony WH-1000XM5', category:'Electronics', price:349, stock:33, status:'Active' },
    { id:6, name:'Yoga Mat Premium', category:'Sports', price:49, stock:78, status:'Active' },
  ];

  displayedColumns = ['id', 'name', 'category', 'price', 'stock', 'status', 'actions'];

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  getStatusColor(status: string): string {
    const map: any = { 'Active':'primary', 'Low Stock':'warn', 'Out of Stock':'accent' };
    return map[status];
  }
}