import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './page/categories/categories.component';
import { WizardComponent } from './page/wizard/wizard.component';
import { GroupComponent } from './page/group/group.component';

const routes: Routes = [{
  path: 'categories',
  component: CategoriesComponent
},{
  path: 'categories/:id',
  component: GroupComponent
},{
  path: '**',
  component: WizardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
