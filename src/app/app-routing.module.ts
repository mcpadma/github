import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'search', 
    component: SearchComponent
  },
  { path: 'user/:userId', 
    component: UserComponent
  },
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'search'},
  {
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
