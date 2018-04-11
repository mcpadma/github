import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {

  searchTxt:any;

  public searchText;
  public searchResult;
  public searchCount;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.searchTxt = this.searchTxt;
    
  }
onKeyUp(event){
  this.searchText = event.target.value;
}
getUsers(){
  this.githubService.getUser(this.searchText).subscribe(
    res => {
     this.searchResult = res;
     this.searchCount = res.total_count;
    }
  );
}
}
