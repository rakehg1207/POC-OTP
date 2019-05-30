import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,MatCardModule,MatButtonModule, MatIconModule,MatInputModule,MatCheckboxModule, MatTabsModule, MatInkBar, MatSelectModule} from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    LoginComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    HttpModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
