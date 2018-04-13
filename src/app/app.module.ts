import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GithubService } from './github/github.service';

import { MaterialModule } from './material.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
