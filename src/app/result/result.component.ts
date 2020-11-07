import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score:number;
  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.score=this.route.snapshot.data['data'];
    console.log(this.score);
  }

}
