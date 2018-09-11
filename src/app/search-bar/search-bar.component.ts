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

  public code: number;
  public data: any = [];
  public errorMessage: string;
  public loading = false;

  ngOnInit() { }

  getZipCodeData(search) {
    if (search && search.length == 5){
      this.loading = true;
      this.zipService.getZipCodeData(search)
        .subscribe(
          data => {
            this.data = data; 
            this.loading = false; 
            console.log(data);
          },
          error => {
            this.errorMessage = <any>error;
            this.loading = false;
          },
          () => {
            if(this.data == null) alert('No data was found.');
            if(this.data != null) alert(
              "Married: " + this.data.maritalStatus.married +
              "\nSingle: " + this.data.maritalStatus.single +
              "\nUnknown: " + this.data.maritalStatus.unknown
            );
          }
        );
    }
    else{
      alert('Please eneter a valid five digit zip code.');
    }
  }

  enterSearch(event, search){
    if(event.keyCode == 13 && search.length == 5) {
      this.getZipCodeData(search);
    }
    if(search && search.length != 5) this.data = [];
    if(event.keyCode == 13 && !search) alert('Please eneter a valid five digit zip code.');
  }

}
