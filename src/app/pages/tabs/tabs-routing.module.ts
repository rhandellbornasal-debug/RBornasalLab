import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(
            module => module.HomePageModule
          )
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('../catalog/catalog.module').then(
            module => module.CatalogPageModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(
            module => module.ProfilePageModule
          )
      },
      {
        path: 'product-page/:productId',
        loadChildren: () =>
          import('../product-page/product-page.module').then(
            module => module.ProductPagePageModule
          )
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}