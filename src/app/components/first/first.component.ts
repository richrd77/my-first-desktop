import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private tit: Title) {
    tit.setTitle('first - Desktop');
  }

  ngOnInit(): void {
  }

  clickEvent(): void {
    alert('working');
  }

  getConfirmation(): void {
    console.log(confirm('confirm man!!!'));
  }

}
