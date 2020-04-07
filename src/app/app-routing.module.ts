import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/list/dashboard.component";
import { PageNotFoundComponent } from "./error-handler/page-not-found/page-not-found.component";
import { UserdetailsComponent } from "./dashboard/details/userdetails.component";

const routes: Routes = [
  //{ path: "", component: DashboardComponent },
  { path: "", redirectTo: "/home", pathMatch:"full" },
  { path: "user/:id", component: UserdetailsComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: DashboardComponent },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
