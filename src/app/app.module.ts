import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummeryPipe } from './summery.pipe';

@NgModule({
  declarations: [
    AppComponent ,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    SummeryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule

   ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
