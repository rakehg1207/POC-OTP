import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,MatCardModule,MatButtonModule, MatIconModule,MatInputModule,MatCheckboxModule, MatTabsModule, MatInkBar, MatSelectModule} from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    HttpModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
