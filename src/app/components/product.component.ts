import { from } from "rxjs";
import{ 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges, 
    OnInit, 
    DoCheck,
    OnDestroy } from "@angular/core";
import { Product } from "../product.model";
import { analyzeAndValidateNgModules } from "@angular/compiler";


@Component({
    selector:'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy { //OnChanges,
    @Input() product: Product;
    @Output() productClicked:EventEmitter<any>;

    today = new Date();

    constructor(){
        console.log('1. constructor');
        this.product = {
            id: '',
            image: '',
            title: '',
            price: 0,
            description: ''
          };

          this.productClicked = new EventEmitter();
    }

    //ngOnChanges(changes: SimpleChanges){
    //    console.log('2. evento cambio');
    //    console.log(changes);
    //}

    ngOnInit(){
        console.log('3. init');
    }

    ngDoCheck(){
        console.log('4. check');
    }

    ngOnDestroy(){
        console.log('5. check');
    }

    addCart(){
        console.log('Añadir al carro');
        this.productClicked.emit(this.product.id);
    }
    
}