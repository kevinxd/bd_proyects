import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate: [NologinGuard] },
  { path: 'register', loadChildren: './componentes/register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './componentes/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  { path: 'inventory', loadChildren: './componentes/inventory/inventory.module#InventoryPageModule' },
  { path: 'sales', loadChildren: './componentes/sales/sales.module#SalesPageModule' },
  { path: 'employed', loadChildren: './componentes/employed/employed.module#EmployedPageModule' },
  { path: 'add-inv', loadChildren: './componentes/add-inv/add-inv.module#AddInvPageModule' },
  { path: 'add-sales', loadChildren: './componentes/add-sales/add-sales.module#AddSalesPageModule' },
  { path: 'add-inv-t', loadChildren: './componentes/add-inv-t/add-inv-t.module#AddInvTPageModule' },
  { path: 'inv-store', loadChildren: './componentes/inv-store/inv-store.module#InvStorePageModule' },
  { path: 'sales2', loadChildren: './componentes/sales2/sales2.module#Sales2PageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'providers', loadChildren: './componentes/providers/providers.module#ProvidersPageModule' },
  { path: 'addproviders', loadChildren: './componentes/addproviders/addproviders.module#AddprovidersPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
