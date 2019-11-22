import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { dataReducer, DataEffects } from '../app/model/dataModel';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { userReducer, selectedUserReducer } from './model/userModel';
import { UserEffects } from './effects/userEffects';
import { ButtonComponent } from './components/button/button.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoPartComponent } from './components/user-info-part/user-info-part.component';
import { ImageComponent } from './components/image/image.component';
import { LoginService } from 'src/app/services/login.service';

const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Users', component: UsersComponent, canActivate: [LoginService] },
  { path: 'UserInfo/:id', component: UserInfoComponent, canActivate: [LoginService] },
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserInfoComponent,
    ButtonComponent,
    UserRowComponent,
    UserInfoPartComponent,
    ImageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      data: dataReducer,
      users: userReducer,
      selectedUser: selectedUserReducer
    }),
    EffectsModule.forRoot([DataEffects, UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
