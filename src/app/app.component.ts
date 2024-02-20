import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

interface Repository {
  name: string;
  description: string;
  language: string;
  techStack: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  githubUsername: string = '';
  repositories: Repository[] = [];
  loading: boolean = false;
  pageSize: number = 10;
  totalRepositories: number = 0;
  currentPage: number = 1;
  pageSizeOptions: number[] = [10, 20, 50, 100];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchRepositories();
  }

  fetchRepositories() {
    if (!this.githubUsername) {
      console.error('GitHub username is empty. Please provide a username.');
      return;
    }
  
    this.loading = true;
    const offset = (this.currentPage - 1) * this.pageSize;
  
    this.apiService.getRepos(this.githubUsername, this.currentPage, this.pageSize)
      .subscribe(
        (data: any[]) => {
          console.log('Repositories:', data); // Log the response to check if data is received
          this.repositories = data;
          this.loading = false;
          this.totalRepositories = data.length; // Update total repositories count
        },
        (error: any) => {
          console.error('Error fetching repositories:', error);
          this.loading = false;
          this.repositories = []; // Clear repositories in case of error
        }
      );
  }
  

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchRepositories();
  }

  onPageSizeChange(event: any) {
    const value = event?.target?.value;
    if (value) {
      this.pageSize = parseInt(value, 10);
      this.fetchRepositories();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchRepositories();
    } else {
      console.log('Already at the first page.');
    }
  }

  goToNextPage() {
    const totalPages = Math.ceil(this.totalRepositories / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.fetchRepositories();
    } else {
      console.log('Already at the last page.');
    }
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.totalRepositories / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
