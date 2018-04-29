import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  @Input('incrimentName') incName;
  @Input('decrimentName') decName;
  @Output('countChange') countChange=new EventEmitter();
  count:number=0
  params='';
  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      console.log(params.get('username'))
      this.params=params.get('username')
    })
  }


  incriment(){
    this.count++;
    this.countChange.emit(1);
  }

  decriment(){
    this.count--;
    this.countChange.emit(-1);
  }

}
