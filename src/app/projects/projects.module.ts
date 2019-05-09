import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule, MatSlideToggleModule, MatSelectModule, MatDividerModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatTooltipModule,
  MatTabsModule, MatStepperModule, MatDialogModule, MatIconModule,
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';

import { TumblerService } from './event_BehaviorSubject/tumbler.service';
import { EventSubjectService } from './event_Subject/event_Subject.service';
import { TumblerComponent } from './event_BehaviorSubject/requestObject/tumbler.component';
import { TumblerResultComponent } from './event_BehaviorSubject/responseObject/tumbler-result.component';
import { ButtonComponent } from './event_Subject/requestObject/button.component';
import { ButtonResultComponent } from './event_Subject/responseObject/button-result.component';
import { ViewChildComponent } from './event_ViewChild/viewChild.component';
import { HostListenerComponent, DirectiveHostListenerCountClicks } from './event_Directive/hostListener.directive';
import { RequestOutputComponent } from './event_Output/requestObject/output.component';
import { ResponseOutputComponent } from './event_Output/responseObject/output.component';
import { RequestInputComponent } from './event_Input/requestObject/request_input.component';
import { ResponseInputComponent } from './event_Input/responseObject/response_input.component';
import { EventEmitterService } from './event_EventEmitter/eve.service';
import {RequestEventEmitterComponent} from './event_EventEmitter/requestObject/emitter.component';
import {ResponseEventEmitterComponent} from './event_EventEmitter/responseObject/emitter.component';
import { FormEventRequestComponent } from './event_FromEvent/requestObject/formEvent_request.component';
import { FormEventResponseComponent } from './event_FromEvent/responseObject/formEvent_response.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProjectsRoutingModule,
    SharedModule,

    MatSidenavModule, MatSlideToggleModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatListModule, MatDividerModule, MatTabsModule, MatTooltipModule,
    MatStepperModule, MatDialogModule, MatIconModule,
  ],
  declarations: [
    ProjectsComponent,
    TumblerComponent,
    TumblerResultComponent,
    ButtonComponent,
    ButtonResultComponent,
    ViewChildComponent,
    RequestOutputComponent, ResponseOutputComponent,
    RequestInputComponent, ResponseInputComponent,
    RequestEventEmitterComponent, ResponseEventEmitterComponent,
    FormEventRequestComponent, FormEventResponseComponent,
    HostListenerComponent, DirectiveHostListenerCountClicks
  ],
  exports: [
    RequestOutputComponent, ResponseOutputComponent,
    RequestInputComponent, ResponseInputComponent,
    RequestEventEmitterComponent, ResponseEventEmitterComponent,
    FormEventRequestComponent, FormEventResponseComponent,
    HostListenerComponent, DirectiveHostListenerCountClicks
  ],
  providers: [
    TumblerService,
    EventSubjectService,
    EventEmitterService,
  ]
})
export class ProjectsModule {}
