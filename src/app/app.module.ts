import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { AllComponent } from './all/all.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncComponentComponent } from './async-component/async-component.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { Concatmap2Component } from './concatmap2/concatmap2.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchsearchComponent } from './switchsearch/switchsearch.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplyComponent } from './share-reply/share-reply.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipforkComponent } from './zipfork/zipfork.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    HeaderComponent,
    PromiseComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncComponentComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatmapComponent,
    Concatmap2Component,
    SwitchMapComponent,
    SwitchsearchComponent,
    ExhaustMapComponent,
    ShareReplyComponent,
    CombineLatestComponent,
    ZipforkComponent,
    CatchErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
