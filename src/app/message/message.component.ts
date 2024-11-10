import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  public message: string | null = null;
  public name: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.message = params['message'];
      this.name = params['name'];
    });
  }
}
