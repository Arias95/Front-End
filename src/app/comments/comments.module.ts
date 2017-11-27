import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CommentComponent,
        CommentSectionComponent],
    providers: [],
    exports: [
        CommentSectionComponent
    ]
})

export class CommentsModule { }
