import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  constructor() { }

  openDialog2() {
    this.despesa.open(DespesaComponent, {
      width:'40%',
      height:'40%'
    });
  }

  ngOnInit(): void {
  }

}
