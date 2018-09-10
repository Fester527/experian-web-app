import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ZipCodeDataService } from '../zip-code-data.service';

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
    this.zipService.getZipCodeData(code)
    .subscribe(data => {
      this.data = data;
      console.log(data),
      error => this.errorMessage = <any>error
    });
  }

}
