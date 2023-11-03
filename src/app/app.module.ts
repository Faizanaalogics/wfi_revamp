import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbDropdownModule, NgbModule, NgbNavModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { OurGraduatesComponent } from './pages/home/our-graduates/our-graduates.component';
import { ExploreCoursesComponent } from './pages/home/explore-courses/explore-courses.component';
import { OurBootcampsComponent } from './pages/home/our-bootcamps/our-bootcamps.component';
import { OurPartnersComponent } from './pages/home/our-partners/our-partners.component';
import { HomeBlogComponent } from './pages/home/home-blog/home-blog.component';
import { OurGraduatesSayingComponent } from './pages/home/our-graduates-saying/our-graduates-saying.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    OurGraduatesComponent,
    ExploreCoursesComponent,
    OurBootcampsComponent,
    OurPartnersComponent,
    HomeBlogComponent,
    OurGraduatesSayingComponent
  ],
  imports: [
    BrowserModule,
    NgbNavModule,
    NgbDropdownModule,
    AppRoutingModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
