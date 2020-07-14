import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { PostsService } from './posts.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgpSortModule } from 'ngp-sort-pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { AdministratorComponent } from './administrator/administrator.component';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    AdministratorComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgpSortModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
