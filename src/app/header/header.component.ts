import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Output() selectedPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectPage(page: string) {
    this.selectedPage.emit(page);
  }

}
