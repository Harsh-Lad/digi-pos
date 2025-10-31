import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface TimelineEvent {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  color: 'blue' | 'orange';
}

@Component({
  selector: 'app-partner-timeline',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './partner-timeline.component.html',
  styleUrl: './partner-timeline.component.css'
})
export class PartnerTimelineComponent {
  events: TimelineEvent[] = [
    {
      icon: 'paid',
      titleKey: 'becomePartner.whyPartner.benefits.commissions.title',
      descriptionKey: 'becomePartner.whyPartner.benefits.commissions.description',
      color: 'blue'
    },
    {
      icon: 'support_agent',
      titleKey: 'becomePartner.whyPartner.benefits.support.title',
      descriptionKey: 'becomePartner.whyPartner.benefits.support.description',
      color: 'blue'
    },
    {
      icon: 'public',
      titleKey: 'becomePartner.whyPartner.benefits.leadership.title',
      descriptionKey: 'becomePartner.whyPartner.benefits.leadership.description',
      color: 'blue'
    }
  ];
  
  bottomEvents: TimelineEvent[] = [
    {
      icon: 'trending_up',
      titleKey: 'becomePartner.whyPartner.benefits.zeroRisk.title',
      descriptionKey: 'becomePartner.whyPartner.benefits.zeroRisk.description',
      color: 'orange'
    },
    {
      icon: 'lightbulb',
      titleKey: 'becomePartner.whyPartner.benefits.futureReady.title',
      descriptionKey: 'becomePartner.whyPartner.benefits.futureReady.description',
      color: 'orange'
    }
  ];
}