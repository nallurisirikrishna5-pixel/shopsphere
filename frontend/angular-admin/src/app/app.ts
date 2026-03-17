import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
    MatSidenavModule, MatToolbarModule,
    MatListModule, MatIconModule, MatButtonModule
  ],
  template: `
    <mat-sidenav-container style="height: 100vh;">
      <mat-sidenav mode="side" opened style="width: 240px; background: #1e293b;">
        <div style="padding: 1.5rem; border-bottom: 1px solid #334155;">
          <h2 style="color: white; margin: 0; font-size: 1.3rem;">🛒 ShopSphere</h2>
          <p style="color: #94a3b8; margin: .25rem 0 0; font-size: .8rem;">Admin Dashboard</p>
        </div>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link">
            <span style="color: #cbd5e1;">📊 Dashboard</span>
          </a>
          <a mat-list-item routerLink="/products" routerLinkActive="active-link">
            <span style="color: #cbd5e1;">📦 Products</span>
          </a>
          <a mat-list-item routerLink="/orders" routerLinkActive="active-link">
            <span style="color: #cbd5e1;">🧾 Orders</span>
          </a>
        </mat-nav-list>
        <div style="position: absolute; bottom: 1rem; padding: 1rem;">
          <p style="color: #475569; font-size: .8rem;">Logged in as Admin</p>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar style="background: white; border-bottom: 1px solid #e2e8f0;">
          <span style="font-weight: 600; color: #1e293b;">ShopSphere Admin</span>
          <span style="flex: 1;"></span>
          <button mat-button style="color: #6366f1;">👤 Admin User</button>
        </mat-toolbar>
        <div style="padding: 2rem;">
          <router-outlet />
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .active-link { background: rgba(99,102,241,0.2) !important; border-left: 3px solid #6366f1; }
    .active-link span { color: white !important; }
    mat-sidenav-content { background: #f8fafc; }
  `]
})
export class AppComponent {}