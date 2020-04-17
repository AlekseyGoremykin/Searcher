import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TasksPageComponent} from "./tasks-page/tasks-page.component";
import {AddUsersPageComponent} from "./admin/add-users-page/add-users-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomePageComponent},
    {path: 'tasks', component: TasksPageComponent},
    {path: 'admin', component: AddUsersPageComponent},
    {path: 'login', component: LoginPageComponent}
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule {}
