import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Post } from 'src/app/core/models/post';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  listPosts: any;
  page: number = 1;
  entityForm!: FormGroup;

  constructor(
    private postsService: PostsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.entityForm = this.fb.group({
      searchValue: ['', [Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService
      .getPosts()
      .pipe(
        tap((res) => {
          this.listPosts = res;
        })
      )
      .subscribe();
  }

  onSearch() {
    this.postsService
      .getPosts()
      .pipe(
        tap((result) => {
          this.listPosts = result.filter((x: Post) =>
            x.title.includes(this.entityForm.get('searchValue')?.value)
          );
        })
      )
      .subscribe();
  }

  verifyValidTouched(input: string) {
    return (
      !this.entityForm.get(input)?.valid &&
      (this.entityForm.get(input)?.touched || this.entityForm.get(input)?.dirty)
    );
  }

  validateClass(input: string) {
    return {
      'is-invalid': this.verifyValidTouched(input),
    };
  }

  navigateTo(id: number) {
    this.router.navigate(['post', id]);
  }
}
