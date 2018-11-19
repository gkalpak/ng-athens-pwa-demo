import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {TodoItemComponent} from './todo-item.component';
import {TodoListComponent} from './todo-list.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
