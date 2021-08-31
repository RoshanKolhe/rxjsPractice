import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  switchLang:any ;
  browserLang:any;
  exclusive : boolean = false
  constructor(private designUtility:DesignUtilityService,public translate:TranslateService) {
    this.designUtility.selectedLang.subscribe(res=>{
      this.switchLang = res
    })
    
    translate.addLangs(['de','en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();


    this.designUtility.selectedLang.next(this.browserLang)

 
  }

  ngOnInit(): void {

    this.designUtility.exclusive.subscribe(res =>{
      this.exclusive = res
    })
  }
  languageChanged(){

    this.translate.use(this.browserLang.match(/de|en/) ? this.browserLang:'en')

  }
  selectedLanguage(lang:any){

    this.designUtility.selectedLang.next(lang)
    this.browserLang = lang
    this.languageChanged()

  }

}
