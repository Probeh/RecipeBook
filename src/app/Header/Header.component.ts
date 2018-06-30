import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { DataStorageService } from '../_Shared/DataStorage.service';
import { Response } from '@angular/http';
import { AuthService } from '../Auth/Auth.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }

  public onSelect(selection: string) {
    this.featureSelected.emit(selection);
  }
  public onSaveData() {
    this.dataService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        });
  }
  public onFetchData() {
    this.dataService.getRecipes();
  }
  public onSignout() {
    this.authService.signoutUser();
  }
}
