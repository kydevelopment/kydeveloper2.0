import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../pages/about/about.component';
import { ReadingListComponent } from '../pages/about/reading-list/reading-list.component';
import { ResumeComponent } from '../pages/about/resume/resume.component';
import { AboutMilestonesComponent } from '../pages/about/milestones/milestones.component';
import { BiographyComponent } from '../pages/about/biography/biography.component';
import { KyDeveloperRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared.module';
import { ReadingItemComponent } from '../pages/about/reading-list/reading-item/reading-item.component';
import { RecommendComponent } from '../pages/about/reading-list/recommend/recommend.component';
import { SpeakingComponent } from '../pages/about/resume/speaking/speaking.component';
import { ResumeJobComponent } from '../pages/about/resume/resume-job/resume-job.component';
import { ResumePresentationComponent } from '../pages/about/resume/resume-presentation/resume-presentation.component';
import { ResumeEducationComponent } from '../pages/about/resume/resume-education/resume-education.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutComponent,
    BiographyComponent,
    ReadingListComponent,
    ResumeComponent,
    AboutMilestonesComponent,
    ReadingItemComponent,
    RecommendComponent,
    SpeakingComponent,
    ResumeJobComponent,
    ResumePresentationComponent,
    ResumeEducationComponent
  ],
  exports: [ReadingItemComponent, RecommendComponent]
})
export class AboutModule { }
