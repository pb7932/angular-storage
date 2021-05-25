import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFound404Component } from './components/dashboard/page-not-found404/page-not-found404.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
