import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  githubUsername: string = '';
  repositories: any[] = [];
  loading: boolean = false;

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
  }
}
