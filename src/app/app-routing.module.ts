import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailPageComponent } from './post-detail/post-detail-page/post-detail-page.component';
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path: ':cat/:identifier', component: PostDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
