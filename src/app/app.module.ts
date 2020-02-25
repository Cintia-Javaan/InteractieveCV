import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { OpleidingComponent } from './opleiding/opleiding.component';
import { WerkervaringComponent } from './werkervaring/werkervaring.component';
import { HobbyComponent } from './hobby/hobby.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LinksComponent } from './links/links.component';
import { BargraphComponent } from './bargraph/bargraph.component';
import { VierkantComponent } from './vierkant/vierkant.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    OpleidingComponent,
    WerkervaringComponent,
    HobbyComponent,
    PageNotFoundComponent,
    LinksComponent,
    BargraphComponent,
    VierkantComponent,
    BoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
