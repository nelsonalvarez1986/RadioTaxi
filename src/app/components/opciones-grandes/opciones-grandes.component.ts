import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opciones-grandes',
  templateUrl: './opciones-grandes.component.html',
  styleUrls: ['./opciones-grandes.component.scss']
})
export class OpcionesGrandesComponent implements OnInit {

  @Input() icon;
  @Input() titulo;
  @Input() texto;
  @Input() url;
  
  constructor() { }

  ngOnInit() {
    console.log(this.icon)
  }

}
