import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input() githubUsername: string = ''; 
  userProfile: any;
  loading: boolean = false;
  userProfileSub: Subscription | undefined;
  private fetchTimeout: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.githubUsername) {
      this.fetchUserProfile();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['githubUsername'] && !changes['githubUsername'].firstChange) {
      this.scheduleFetchUserProfile();
    }
  }

  ngOnDestroy(): void {
    if (this.userProfileSub) {
      this.userProfileSub.unsubscribe();
    }
    clearTimeout(this.fetchTimeout);
  }

  private scheduleFetchUserProfile(): void {
    clearTimeout(this.fetchTimeout);
    this.fetchTimeout = setTimeout(() => {
      this.fetchUserProfile();
    }, 2000); // 1000 milliseconds delay
  }

  private fetchUserProfile(): void {
    this.loading = true;
    this.userProfileSub = this.apiService.getUser(this.githubUsername).subscribe(
      (profile: any) => {
        this.userProfile = profile;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
        this.loading = false;
      }
    );
  }
}
