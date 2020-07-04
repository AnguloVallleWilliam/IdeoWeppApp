import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { AxiosInstance } from 'axios';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  constructor(private router: Router) { }
  projects = ['createdAt', 'updatedAt', 'id', 'name', 'description', 'content'];
  myProjects = [];

  getProjects() {
    axios.get('http://localhost:8080/api/projects')
        .then(response => {
          this.myProjects = response.data.content;
        });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
