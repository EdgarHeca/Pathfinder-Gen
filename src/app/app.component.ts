import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneratedContentComponent } from './components/generated-content/generated-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserInputComponent,
    HeaderComponent,
    FooterComponent,
    GeneratedContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit{
  title = 'pfgen';
  
  
  ngOnInit(): void {
  }
}
