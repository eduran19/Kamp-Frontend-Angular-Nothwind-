import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//app-root u index html de html tagi gibi kullanmaya yarıyor
  templateUrl: './app.component.html',//html lin componenti
  styleUrls: ['./app.component.css'] //html nin css leri koyduğumuz yer
})
export class AppComponent {
  title: string = "northwind";//string title ="Birşey" gibi
  user: string = "Eyüp Duran"

}
