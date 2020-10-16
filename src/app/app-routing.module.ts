import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component';
import { TiktokComponent } from './components/tiktok/tiktok.component';


const routes: Routes = [
  {path: 'tiktok', component: TiktokComponent},
  {path: 'instagram', component: InstagramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
