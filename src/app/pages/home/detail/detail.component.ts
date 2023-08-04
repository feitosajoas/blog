import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { Post } from 'src/app/core/models/post';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  post!: any;
  postId!: number;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((x) => {
        if (x['id']) {
          this.postId = x['id'];
        }
      });
  }

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .pipe(
        tap((res) => {
          this.post = res.find((x: Post) => x.id == this.postId);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
