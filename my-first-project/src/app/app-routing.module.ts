import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
 // {path:'',component:ToDoComponent},
  //{path:'',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'todos',component:ToDoComponent},
  {path:'menu',component:MenuComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
