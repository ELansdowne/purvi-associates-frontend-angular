import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, SharedModule, LoginRoutingModule],
  declarations: [LoginComponent],
  exports: [],
  providers: []
})
export class LoginModule {}
