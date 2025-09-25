import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vapi-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vapi-widget.component.html',
  styleUrl: './vapi-widget.component.css'
})
export class VapiWidgetComponent implements OnInit, OnDestroy {
  iframeWidth = 64;
  iframeHeight = 64;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupMessageListener();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('message', this.handleMessage);
    }
  }

  private setupMessageListener() {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  private handleMessage(event: MessageEvent) {
    if (event.data?.type === 'vapi-widget-resize') {
      const { width, height } = event.data.size;
      this.iframeWidth = width;
      this.iframeHeight = height;
    }
  }
}
