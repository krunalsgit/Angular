import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { PageEvent } from '@angular/material/paginator';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  dataSource:any=[];
  displayedColumns=['Name','DateOfBirth','Gender','Email','Contact','Address','Department','Action']
  
  constructor(private service:UserService){}
 
  ngOnInit(){
    this.service.GetStudents().subscribe((res) => {
      this.StudentData = res;
      this.StudentData = this.StudentData.data;
      this.pageLength=this.StudentData.length;
      this.dataSource=this.getDisplayedItems()
    })
  }

  StudentData:any;
  pageLength:number=0;
  pageSize: number = 5; // Number of items to display per page
  currentPage: number = 0; // Current page index
 
  // Pagination event handler
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.dataSource=this.getDisplayedItems()
  }

  getDisplayedItems() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.StudentData.slice(startIndex, endIndex);
  }

  heading="home.component.html";
  isDisable=true;
  ClickFunction(param:any){
    this.isDisable=false;
    alert(param);
  }

  ChangeInput(param:string){
    alert(param);
  }

  colorName="Green";
  fontSize="20px";
  
  className="heading";
  styleName={"color":"cornsilk","background-color":"brown"}
  
  colorsList=["Orange","Red","Yellow","Green"]
}
