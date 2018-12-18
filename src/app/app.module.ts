import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/dashboard/home/home.component';
import { NavBarComponent } from '../app/dashboard/nav-bar/nav-bar.component';
import { PseudoFormComponent } from '../app/dashboard/pseudo-form/pseudo-form.component';
import { FooterComponent } from '../app/dashboard/footer/footer.component';
import { BoardComponent } from '../app/Graphs/board/board.component';
import { ChartsComponent } from '../app/Graphs/charts/charts.component';
import { LinechartComponent } from '../app/Graphs/linechart/linechart.component';
import { RadarchartComponent } from '../app/Graphs/radarchart/radarchart.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartsComponent,
    FooterComponent,
    NavBarComponent,
    PseudoFormComponent,
    RadarchartComponent,
    LinechartComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
