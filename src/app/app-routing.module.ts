import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TasksPageComponent} from "./tasks-page/tasks-page.component";
import {AddUsersPageComponent} from "./admin/add-users-page/add-users-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AppGuardGuard} from "./app-guard.guard";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: LoginPageComponent},
    {path: 'home', component: HomePageComponent, canActivate: [AppGuardGuard]},
    {path: 'tasks', component: TasksPageComponent,canActivate: [AppGuardGuard]},
    {path: 'admin', component: AddUsersPageComponent, canActivate: [AppGuardGuard]}
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule {}
