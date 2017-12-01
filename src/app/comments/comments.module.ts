import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentService } from './../comment.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CommentComponent,
        CommentSectionComponent],
    providers: [CommentService],
    exports: [
        CommentSectionComponent
    ]
})

export class CommentsModule { }
