import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ZipCodeDataService } from '../zip-code-data.service';
import { delay } from 'q';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private zipService: ZipCodeDataService) { }

  private code: number = undefined;
  public data: any = [];
  public errorMessage: string;

  ngOnInit() {

  }

  searchBar(code): boolean{
    if(code.length == 5) return true;
    else {
      this.data = [];
      return false;
    }
  }

  getZipCodeData(code) {
    if (code.length == 5){
      this.zipService.getZipCodeData(code)
      .subscribe(data => {
        this.data = data;
        console.log(data),
        error => this.errorMessage = <any>error
      });
    }
  }

  enterSearch(event, code){
    if(event.keyCode == 13 && code.length == 5 ){
      this.getZipCodeData(code);
    }
  }

}
