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
import { PostDetailPageComponent } from './post-detail/post-detail-page/post-detail-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutBannerComponent } from './pages/about-us/about-banner/about-banner.component';
import { AboutContentComponent } from './pages/about-us/about-content/about-content.component';
import { ClassroomValuesComponent } from './pages/about-us/classroom-values/classroom-values.component';
import { UiUxDesignComponent } from './pages/ui-ux-design/ui-ux-design.component';
import { UiUxBannerComponent } from './pages/ui-ux-design/ui-ux-banner/ui-ux-banner.component';
import { UiUxBootcampExperienceComponent } from './pages/ui-ux-design/ui-ux-bootcamp-experience/ui-ux-bootcamp-experience.component';
import { UiUxBootcampOverviewComponent } from './pages/ui-ux-design/ui-ux-bootcamp-overview/ui-ux-bootcamp-overview.component';
import { UiUxWellpaidCareerComponent } from './pages/ui-ux-design/ui-ux-wellpaid-career/ui-ux-wellpaid-career.component';
import { UiUxWhatWillLearnComponent } from './pages/ui-ux-design/ui-ux-what-will-learn/ui-ux-what-will-learn.component';
import { UiUxStudentProjectsComponent } from './pages/ui-ux-design/ui-ux-student-projects/ui-ux-student-projects.component';
import { PaymentOptionsComponent } from './pages/ui-ux-design/payment-options/payment-options.component';
import { InstructorsComponent } from './pages/ui-ux-design/instructors/instructors.component';
import { NextUxDesignComponent } from './pages/ui-ux-design/next-ux-design/next-ux-design.component';
import { FaqsComponent } from './pages/ui-ux-design/faqs/faqs.component';
import { NeedInformationComponent } from './pages/ui-ux-design/need-information/need-information.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { DigitalMarketingBannerComponent } from './pages/digital-marketing/digital-marketing-banner/digital-marketing-banner.component';
import { MarketingBootcampExperienceComponent } from './pages/digital-marketing/marketing-bootcamp-experience/marketing-bootcamp-experience.component';
import { MarketingWellpaidCareerComponent } from './pages/digital-marketing/marketing-wellpaid-career/marketing-wellpaid-career.component';
import { MarketingBootcampOverviewComponent } from './pages/digital-marketing/marketing-bootcamp-overview/marketing-bootcamp-overview.component';
import { MarketingWhatWillLearnComponent } from './pages/digital-marketing/marketing-what-will-learn/marketing-what-will-learn.component';

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
    OurGraduatesSayingComponent,
    PostDetailPageComponent,
    AboutUsComponent,
    AboutBannerComponent,
    AboutContentComponent,
    ClassroomValuesComponent,
    UiUxDesignComponent,
    UiUxBannerComponent,
    UiUxBootcampExperienceComponent,
    UiUxBootcampOverviewComponent,
    UiUxWellpaidCareerComponent,
    UiUxWhatWillLearnComponent,
    UiUxStudentProjectsComponent,
    PaymentOptionsComponent,
    InstructorsComponent,
    NextUxDesignComponent,
    FaqsComponent,
    NeedInformationComponent,
    DigitalMarketingComponent,
    DigitalMarketingBannerComponent,
    MarketingBootcampExperienceComponent,
    MarketingWellpaidCareerComponent,
    MarketingBootcampOverviewComponent,
    MarketingWhatWillLearnComponent
  ],
  imports: [
    BrowserModule,
    NgbNavModule,
    NgbDropdownModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
