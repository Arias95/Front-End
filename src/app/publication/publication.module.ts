import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsModule } from '../comments/comments.module';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { PublicationComponent } from './publication/publication.component';
import { VideoComponent } from './video/video.component';
import { FileComponent } from './file/file.component';
import { GithubComponent } from './github/github.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        YoutubePlayerModule,
        CommentsModule
    ],
    declarations: [
        PublicationComponent,
        VideoComponent,
        FileComponent,
        GithubComponent
    ],
    providers: [],
    exports: [
        PublicationComponent,
        VideoComponent,
        FileComponent,
        GithubComponent
    ]
})

export class PublicationModule {}
