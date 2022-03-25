import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private tit: Title, private matD: MatDialog) {
    tit.setTitle('Second | Desktop');
  }

  ngOnInit(): void {
  }

  D(): void {
    this.matD.open(DialogComponent, { disableClose: true, hasBackdrop: true });
  }

}
