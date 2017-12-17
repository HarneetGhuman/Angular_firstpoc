import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {UserService}  from './user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RedColorDirective } from './red-color.directive';
import { ImagesService } from './images.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {
 
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { ImageComponentComponent } from './image-component/image-component.component';
import {MatGridListModule} from '@angular/material/grid-list';


const appRoutes:Routes = [ {
 
 path: '',
 component: LoginFormComponent

},
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: ImageComponentComponent

}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    RedColorDirective,
    ImageComponentComponent
  ],
  imports: [ 
   RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpModule,
    MatProgressBarModule,
    MatGridListModule

  ],
  providers: [UserService, AuthGuard, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }