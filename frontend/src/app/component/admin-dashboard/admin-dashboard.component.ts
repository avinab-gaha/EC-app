import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  //register = new Register();
  productData: any;
  target: any = "";
  file: any;

  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.registerProductData();
  }
  imageUpload(event: any) {
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);

  }

  registerProductData() {
    let formdata = new FormData();
    formdata.append("file", this.file);

    this.product.changeDataInApi(this.file).subscribe((res: any) => {
      console.log(res);
    })


  }
}
