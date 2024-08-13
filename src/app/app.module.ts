// Modulos de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Modulos muestros
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
// componenetes
import { AppComponent } from './app.component';
import { MainPageComponent } from './dbz/pages/main-page.component';

// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,

    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
