import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  postsList$: Observable<any> = new Observable<any>();

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.postsList$ = this.productsService.fetchData().pipe(
      map((data: any) => {
        return data;
      }),
    );
  }
}
