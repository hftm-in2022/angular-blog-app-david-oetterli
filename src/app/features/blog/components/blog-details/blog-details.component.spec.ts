import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogDetailsComponent } from './blog-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogService } from '../../services/blog.service';

describe('BlogDetailsComponent', () => {
  let component: BlogDetailsComponent;
  let fixture: ComponentFixture<BlogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogDetailsComponent, HttpClientTestingModule],
      providers: [
        BlogService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                blog: { title: 'Test Blog', content: 'This is a test blog.' },
              },
            },
            paramMap: of({ id: '1' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
