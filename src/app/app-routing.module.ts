import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './page/categories/categories.component';
import { WizardComponent } from './page/wizard/wizard.component';
import { GroupComponent } from './page/group/group.component';
import { CreatorComponent } from './page/creator/creator.component';

const routes: Routes = [{
  path: 'categories',
  component: CategoriesComponent
}, {
  path: 'categories/:id',
  component: GroupComponent
}, {
  path: 'categories/:id/new',
  component: CreatorComponent
}, {
  path: '**',
  component: WizardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
