import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private d: MatDialogRef<any>) {

  }

  ngOnInit(): void {
  }

  close(): void {
    this.d.close();
  }
}
