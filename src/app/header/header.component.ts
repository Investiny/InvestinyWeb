import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    // Call the checkAuthentication method during component initialization
    this.checkAuthentication();
  }

  ngOnInit() {
    this.refreshComponent();
    this.checkAuthentication();
  }
  
  refreshComponent() {
    this.cdRef.detectChanges(); // Trigger change detection
  }

  // Method to check authentication status by inspecting localStorage
  checkAuthentication(): void {
    const userId = localStorage.getItem('userId');
    this.isLoggedIn = !!userId; // Set isLoggedIn to true if userId exists
  }

  logout(): void {
    // Clear localStorage when logging out
    localStorage.removeItem('userId');
    alert("Tu es Maintenant Déconnecté !");
    this.refreshComponent();
    this.checkAuthentication();

    // Redirect to the login page or any other desired route after logout
    this.router.navigateByUrl('/'); // Replace 'login' with your desired route
  }
}
