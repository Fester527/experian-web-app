//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Design imports
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatRadioModule, MatInputModule, MatMenuModule } from '@angular/material'; //material design imports
import { MatExpansionModule } from '@angular/material/expansion'; //material design import
import { MatDatepickerModule } from '@angular/material/datepicker'; //material design import
import { MatFormFieldModule } from '@angular/material/form-field'; //material design import

//Components
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CustomFormComponent } from './custom-form/custom-form.component';

//Directives
import { NumberOnlyDirective } from './number.directive'; //allows only numbers to be entered in search bar


//Routes
const appRoutes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchBarComponent},
  {path: 'custom-form', component: CustomFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NumberOnlyDirective,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    LoadingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
