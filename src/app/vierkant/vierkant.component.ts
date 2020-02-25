import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vierkant',
  templateUrl: './vierkant.component.html',
  styleUrls: ['./vierkant.component.css']
})
export class VierkantComponent implements OnInit {

  @Input() value: 'X' | 'O';

  constructor() { }

  ngOnInit(): void {
  }

}
