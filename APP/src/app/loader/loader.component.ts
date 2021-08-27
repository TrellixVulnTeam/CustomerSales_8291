import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../Services/loader.service';
import { LoaderState } from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  show = false;

  private subscription!: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loaderState.subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
