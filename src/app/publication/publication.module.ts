import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from '../comments/comments.module';
import { PublicationService } from '../publication.service';
import { ResourceService } from '../resource.service';

import { YoutubePlayerModule } from 'ngx-youtube-player';
import { PublicationComponent } from './publication/publication.component';
import { VideoComponent } from './video/video.component';
import { FileComponent } from './file/file.component';
import { GithubComponent } from './github/github.component';
import { FeedComponent } from './feed/feed.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        YoutubePlayerModule,
        CommentsModule
    ],
    declarations: [
        PublicationComponent,
        VideoComponent,
        FileComponent,
        GithubComponent,
        FeedComponent,
        ResourceComponent
    ],
    providers: [
        PublicationService,
        ResourceService
    ],
    exports: [
        FeedComponent,
        PublicationComponent
    ]
})

export class PublicationModule { }
