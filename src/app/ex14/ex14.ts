import { Component } from '@angular/core';
class CatalogService {
  datas = [
    {
      CateId: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: './assets/h1.jpg' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: './assets/h2.jpg' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: './assets/h3.jpg' }
      ]
    },
    {
      CateId: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heineken', Price: 500, Image: './assets/h4.jpg' },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: './assets/h5.jpg' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: './assets/h6.jpg' }
      ]
    }
  ];

  getCategories() {
    return this.datas;
  }
}
@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.css',
})
export class Ex14 {
categories: any[] = [];

  constructor() {
    const service = new CatalogService();
    this.categories = service.getCategories();
  }
}
