import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { EventBusComponent } from './samples/event-bus/event-bus.component';
import { LoadingHostComponent } from './samples/loading-host/loading-host.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { StatefulVouchersComponent } from './samples/vouchers/stateful-vouchers/stateful-vouchers.component';
import { FormControlsComponent } from './samples/form-controls/form-controls.component';
import { SignPadComponent } from './samples/sign-pad/sign-pad.component';
import { ImperativeComponent } from './samples/imperative/imperative.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { ReifiedReactiveComponent } from './samples/reified-reactive/reified-reactive.component';
import { NgrxDataComponent } from './samples/ngrx-data/ngrx-data.component';
import { ResponsiveScreenComponent } from './samples/responsive-screen/responsive-screen.component';
import { TakeUntilDestroyedComponent } from './samples/take-until-destroyed/take-until-destroyed.component';
import { SignalsBasicsComponent } from './samples/signals-basics/signals-basics.component';
import { SignalsEventBusComponent } from './samples/signals-event-bus/signals-event-bus.component';
import { BorderDirective } from '../shared/formatting/formatting-directives';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'subjects', component: SubjectsComponent },
      { path: 'imperative', component: ImperativeComponent },
      { path: 'reactive', component: ReifiedReactiveComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'formcontrols', component: FormControlsComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'responsive-screen', component: ResponsiveScreenComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'async-pipe', component: AsyncPipeComponent },
      { path: 'stateful', component: StatefulComponent },
      { path: 'event-bus', component: EventBusComponent },
      { path: 'loading', component: LoadingHostComponent },
      { path: 'ngrx-data', component: NgrxDataComponent },
      { path: 'signals-basics', component: SignalsBasicsComponent },
      { path: 'signals-bus', component: SignalsEventBusComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CreatingObservableComponent,
    OperatorsComponent,
    UnsubscribingComponent,
    SubjectsComponent,
    StatefulComponent,
    EventBusComponent,
    AsyncPipeComponent,
    StatefulVouchersComponent,
    LoadingHostComponent,
    FormControlsComponent,
    SignPadComponent,
    ImperativeComponent,
    ReifiedReactiveComponent,
    NgrxDataComponent,
    ResponsiveScreenComponent,
    TakeUntilDestroyedComponent,
    SignalsBasicsComponent,
    SignalsEventBusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    BorderDirective
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule { }
