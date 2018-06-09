import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mangol',
  templateUrl: './mangol.component.html',
  styleUrls: ['./mangol.component.scss']
})
export class MangolComponent implements OnInit {
  @Input() config: any;
  showFiller = false;
  constructor() {}

  ngOnInit() {}
}