import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogListComponent } from './blog-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importiere das HttpClientTestingModule
import { BlogService } from '../../services/blog.service'; // Falls du BlogService manuell bereitstellst, importiere ihn auch

describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogListComponent, HttpClientTestingModule],
      providers: [BlogService],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
