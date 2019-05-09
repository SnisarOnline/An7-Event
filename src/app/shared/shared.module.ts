import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {JwtHelperService} from '@auth0/angular-jwt';
/* подробней :  https://angular.io/tutorial/toh-pt6#simulate-the-web-api */
import {HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './data';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './auth/auth.service';

import { ApiService } from './services/_api.service';
import { EventService } from './services/_event.service';
import { LocalStorageService } from './services/_localStorage.service';
import { ReqAnsComponent } from './template/req-ans/req-ans.component';


@NgModule({
  imports: [
    CommonModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,

    // блокирует нормальные запросы на HTTP
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, // База данных
      {
        apiBase: 'api/', // Базоый URL по которому стучимся к базе
        dataEncapsulation: false
      } // опции для бд
    )
  ],
  declarations: [ ReqAnsComponent],
  exports: [ ReqAnsComponent ],
  entryComponents: [],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DecimalPipe,
        JwtHelperService,
        AuthService,
        AuthGuard,
        ApiService,
        EventService,
        LocalStorageService,
      ],
    };
  }

}
