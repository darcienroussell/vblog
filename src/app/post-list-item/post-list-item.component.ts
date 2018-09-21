import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() itemPostTitile: string;
  @Input() itemPostContent: string;
  @Input() itemPostLoveIts: number;
  @Input() itemPostCreated_at: Date;

  onLoveIt(){
    console.log("on aime");
    return this.itemPostLoveIts++;
    }
  
    onDontLoveIt(){
    console.log("on aime plus");
    return this.itemPostLoveIts--;
    }


  constructor() { }

  ngOnInit() {
  }

  getLove(){
  	return this.itemPostLoveIts;
  }

  getColor(){

  	if (this.itemPostLoveIts > 0) {
  		return 'green';
  	}
  	else if (this.itemPostLoveIts < 0){
  		return 'red';
  	}
  }

}
