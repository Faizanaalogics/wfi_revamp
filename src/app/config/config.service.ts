import { tap,catchError  } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,throwError,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiDomain = 'https://workforceinstitute.io/rest/all/V1/';
  // private apiDomain = 'https://qa.workforceinstitute.io/rest/all/V1/';
  //private apiDomain = 'https://shop.workforceinstitute.io/rest/all/V1/';
  private cmsPageUrl = this.apiDomain + "cmsPage/search?searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=identifier&searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bvalue%5D=";
  private cmsBlockhUrl = this.apiDomain + "cmsBlock/search?searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=identifier&searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bvalue%5D=";
  private productuiux = this.apiDomain + "products/ui_paycove_sku";
  private productdm = this.apiDomain + "products/digital-marketing-12-weeks";
  private productpmp = this.apiDomain + "products/pmp_paycove_sku";

//Revamp start
  private about_us = this.cmsBlockhUrl + "rv-about-us";
  private about_us_classroom = this.cmsBlockhUrl + "rv-about-us-classroom";
//revamp end
  private homeUrl = this.cmsPageUrl + "new-home";
  private homeBanner = this.cmsBlockhUrl + "home_banner";
  private jobGuarantee = this.cmsBlockhUrl + "job_guarantee";
  private rightProgram = this.cmsBlockhUrl + "right_program";
  private bootcampWork = this.cmsBlockhUrl + "bootcamp_work";
  //private homeBlog = this.apiDomain + 'blog/post/list/blog/blog/health_tech_store/1/3?storeId=2';
  private homeBlog = this.apiDomain + 'blog/post/list/blog/blog/2/1/3';
  private BlogPage = this.apiDomain + 'blog/post/list/blog/blog/health_tech_store/1/0?storeId=2';
  private cat_UiUx = this.apiDomain + 'blog/post/list/category/51/1/1/20';
  private cat_DigitalMarketing = this.apiDomain + 'blog/post/list/category/52/1/1/20';
  private cat_ProductManagement = this.apiDomain + 'blog/post/list/category/53/1/1/20';
  private aboutUrl = this.cmsPageUrl + "new-about-us";
  private UiUxDesign = this.cmsPageUrl + "new-ui-ux-design";
  private privacyPolicy = this.cmsPageUrl + "privacy-policy";
  private programeDigitalMarketing = this.cmsPageUrl + "new-programe-digital-marketing";
  //Digital Marketing Blocks
  private dm_course = this.cmsBlockhUrl + "dm_courses";
  private dm_career = this.cmsBlockhUrl + "dm_career_possibilities";
  private dm_instructors = this.cmsBlockhUrl + "dm_instructors";
  private dm_prices_payment = this.cmsBlockhUrl + "dm_prices_and_payment";
  //End Digital Marketing Blocks

 //UI UX Page Blocks
 private ui_ux_course = this.cmsBlockhUrl + "ui_ux_course";
 private ui_ux_career = this.cmsBlockhUrl + "ui_ux_career_possibilities";
 private ui_instructors = this.cmsBlockhUrl + "ui_ux_instructors";
 private ui_prices_payment = this.cmsBlockhUrl + "ui_ux_prices_and_payment";
 //End UI UX Page Blocks

 //PMP Blocks
 private pmp_course = this.cmsBlockhUrl + "pmp-course";
 private pmp_why_study = this.cmsBlockhUrl + "pmp_why_study";
 private pmp_instructors = this.cmsBlockhUrl + "pmp-instructors";
 private pmp_prices_and_payment = this.cmsBlockhUrl + "pmp-prices-and-payment";
 //End PMP Blocks
  
private apiHeader = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  // 'Authorization': 'Bearer 7f2fuhaazb8xzfuks4opljfj0q3bhx7j'
  'Authorization': 'Bearer 6pfw29i5tyeq3gucktoas8rrxp0pbysa' //production   
}
  private requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.apiHeader), 
  };
  constructor(private httpClient: HttpClient) { }

  /** Home Page Functions */
  getHome() {
    return this.httpClient.get(this.homeUrl, this.requestOptions);
  }
  getHomeBanner() {
    return this.httpClient.get(this.homeBanner, this.requestOptions);
  }
  getjobGuarantee() {
    return this.httpClient.get(this.jobGuarantee, this.requestOptions);
  }
  getrightProgram() {
    return this.httpClient.get(this.rightProgram, this.requestOptions);
  }
  getbootcampWork() {
    return this.httpClient.get(this.bootcampWork, this.requestOptions);
  }

    /** About Us Revamp */
    getRV_About() {
      return this.httpClient.get(this.about_us, this.requestOptions);
    }
    getRV_About_Classroom() {
      return this.httpClient.get(this.about_us_classroom, this.requestOptions);
    }
    /** About Us Revamp */
  // getBlogs() {
  //   return this.httpClient.get(this.homeBlog, this.requestOptions);
  // }
  // Digital Marketing Functions
  getDM_course() {
    return this.httpClient.get(this.dm_course, this.requestOptions);
  }
  getDM_career() {
    return this.httpClient.get(this.dm_career, this.requestOptions);
  }
  getDM_instructors() {
    return this.httpClient.get(this.dm_instructors, this.requestOptions);
  }
  getDM_prices_payment() {
    return this.httpClient.get(this.dm_prices_payment, this.requestOptions);
  }
  //End Digital Marketing Functions
  //UI/UX page Functions
  getUI_course() {
    return this.httpClient.get(this.ui_ux_course, this.requestOptions);
  }
  getUI_career() {
    return this.httpClient.get(this.ui_ux_career, this.requestOptions);
  }
  getUI_instructors() {
    return this.httpClient.get(this.ui_instructors, this.requestOptions);
  }
  getUI_prices_payment() {
    return this.httpClient.get(this.ui_prices_payment, this.requestOptions);
  }
  //End UI/UX page Functions
  //START PMP Functions
  getPMP_course() {
    return this.httpClient.get(this.pmp_course, this.requestOptions);
  }
  getPMP_why_study() {
    return this.httpClient.get(this.pmp_why_study, this.requestOptions);
  }
  getPMP_instructors() {
    return this.httpClient.get(this.pmp_instructors, this.requestOptions);
  }
  getPMP_prices_payment() {
    return this.httpClient.get(this.pmp_prices_and_payment, this.requestOptions);
  }
  //End PMP Functions
  getBlogs(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.homeBlog, this.requestOptions)
      .pipe(
        //tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getBlogPage(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.BlogPage, this.requestOptions)
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getBlogs_UiUX(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.cat_UiUx, this.requestOptions)
      .pipe(
        //tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getBlogs_DigitalMarketing(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.cat_DigitalMarketing, this.requestOptions)
      .pipe(
        //tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getBlogs_ProductManagement(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.cat_ProductManagement, this.requestOptions)
      .pipe(
       // tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getAboutUs() {
    return this.httpClient.get(this.aboutUrl, this.requestOptions);
  }
  getUiUxDesign() {
    return this.httpClient.get(this.UiUxDesign, this.requestOptions);
  }
  getPrivacyPolicy() {
    return this.httpClient.get(this.privacyPolicy, this.requestOptions);
  }
  getDigitalMarketing() {
    return this.httpClient.get(this.programeDigitalMarketing, this.requestOptions);
  }
  getPostsByCategoryId(categoryId: number) {
    const url = `${this.apiDomain}blog/post/list/blog/blog/health_tech_store/1/0?storeId=2`;
    this.httpClient.get(url).pipe(
      map((response: any) => {
        // const category = response.categories.find((cat: any) => cat.url_key == urlKey);
        // if (!category) {
        //   return null; // Category not found
        // }
        const posts = response[0].posts.filter((post: any) => post.categories[0].category_id == categoryId);
        return posts;
      })
    );
  }

  getUI_paycove(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.productuiux, this.requestOptions)
      .pipe(
        //tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getDM_paycove(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.productdm, this.requestOptions)
      .pipe(
        //tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  getPMP_paycove(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.productpmp, this.requestOptions)
      .pipe(
        //tap(response => console.log(response)),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}
