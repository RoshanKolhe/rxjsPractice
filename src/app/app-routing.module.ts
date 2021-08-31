import { D3chartComponent } from './d3chart/d3chart.component';
import { ExternamLibComponent } from './externam-lib/externam-lib.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ZipforkComponent } from './zipfork/zipfork.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ShareReplyComponent } from './share-reply/share-reply.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { SwitchsearchComponent } from './switchsearch/switchsearch.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { Concatmap2Component } from './concatmap2/concatmap2.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeComponent } from './merge/merge.component';
import { AsyncComponentComponent } from './async-component/async-component.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { FilterComponent } from './filter/filter.component';
import { PluckComponent } from './pluck/pluck.component';
import { MapComponent } from './map/map.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { OfFromComponent } from './of-from/of-from.component';
import { IntervalComponent } from './interval/interval.component';
import { FromEventComponent } from './from-event/from-event.component';
import { AllComponent } from './all/all.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEvent } from 'rxjs';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { AsyncSubject } from 'rxjs';
import { ConcatComponent } from './concat/concat.component';

const routes: Routes = [
  {
    path: '',
    component:PromiseComponent
  },
  {
    path:'promise',
    component:PromiseComponent
  },
  {
    path:'observable',
    component:ObservableComponent,
    children:[
      {
        path:'',
        component:AllComponent
      },
      {
        path:'from-event',
        component:FromEventComponent
      },
      {
        path:'interval',
        component:IntervalComponent
      },  
      {
        path:'offrom',
        component:OfFromComponent
      },
      {
        path:'toArray',
        component:ToArrayComponent
      },
      {
        path:'customobservable',
        component:CustomObservableComponent
      },
      {
        path:'map',
        component:MapComponent
      },
      {
       path:'pluck',
       component:PluckComponent
      },
      {
        path:'filter',
        component:FilterComponent
      },
      {
        path:'tap',
        component:TapComponent
      },
      {
        path:'take',
        component:TakeComponent
      },
      {
        path:'retry',
        component:RetryComponent
      },
      {
        path:'debounce-time',
        component:DebounceTimeComponent
      },
      {
        path:'subject',
        component:SubjectComponent
      },
      {
        path:'replay-subject',
        component:ReplaySubjectComponent
      },
      {
        path:"async-subject",
        component:AsyncComponentComponent
      },
      {
        path:"concat",
        component:ConcatComponent
      },
      {
        path:"merge",
        component:MergeComponent
      },

    {
      path:"mergemap",
      component:MergeMapComponent
    },   
    {
      path:"concatmap",
      component:ConcatmapComponent
    },
    {
      path:"concatmapnotification",
      component:Concatmap2Component
    },
    {
      path:"switchmap",
      component:SwitchMapComponent
    },
    {
      path:"switchsearch",
      component:SwitchsearchComponent
    },
    {
      path:"exhaustMap",
      component:ExhaustMapComponent
    },
    {
      path:"shareReply",
      component:ShareReplyComponent
    },
    {
      path:"combine",
      component:CombineLatestComponent
    },
    {
      path:"zipfork",
      component:ZipforkComponent
    },
    {
      path:"cathchandthrow",
      component:CatchErrorComponent
    },
    {
      path:"externalLib",
      component:ExternamLibComponent
    },
    {
      path:"d3js",
      component:D3chartComponent
    }
  ]
},
{
  path:'**',
  component:ObservableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
