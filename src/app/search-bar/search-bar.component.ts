import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ZipCodeDataService } from '../zip-code-data.service';
import { ZipCodeData } from '../ZipCodeData';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private zipService: ZipCodeDataService) { }

  private code;
  data: ZipCodeData;

  getZipCodeData(code: string): Observable<ZipCodeData> {
    return this.zipService.getZipCodeData(code)
    .subscribe((data: ZipCodeData) => this.data = {
      zipCode: data['zipCode']
    });
  }

  ngOnInit() {

  }

}
