import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  githubUsername: string = '';
  repositories: any[] = [];
  loading: boolean = false;
<<<<<<< HEAD
  loadError: any;
  touchedDisplay: any;
  title: string = 'fyle-frontend-challenge';
=======
>>>>>>> 72e878f57935db1c226c598d4f3072b13d958ef7

  // Carousel options
  carouselOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<', '>'], // Customize navigation arrows
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Call the method to fetch repositories when component initializes
    this.fetchRepositories();
<<<<<<< HEAD
=======
  }

  fetchRepositories() {
    this.loading = true;
    this.apiService.getRepos(this.githubUsername, 1, 10) // Default page size 10
      .subscribe(
        (data: any[]) => {
          this.repositories = data;
          this.loading = false;
        },
        (error: any) => {
          console.error('Error fetching repositories:', error);
          this.loading = false;
        }
      );
>>>>>>> 72e878f57935db1c226c598d4f3072b13d958ef7
  }

  fetchRepositories() {
    // Check if githubUsername is empty
    if (!this.githubUsername) {
      console.error('GitHub username is empty. Please provide a username.');
      return;
    }
  
    // Set loading to true before fetching repositories
    this.loading = true;
    
    setTimeout(() => {
      this.apiService.getRepos(this.githubUsername, 1, 10) // Default page size 10
        .subscribe(
          (data: any[]) => {
            this.repositories = data;
            // Set loading back to false after fetching repositories
            this.loading = false;
          },
          (error: any) => {
            console.error('Error fetching repositories:', error);
            // Set loading back to false in case of error
            this.loading = false;
          }
        );
    }, 1000); // Add a delay of 1 second before fetching repositories
  }
  
}
