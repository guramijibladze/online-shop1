export class productList{
    productName: string;
    productPrice: any;
    selected: any;
    sku: number;
    fileToUpload: any;

    constructor(productName: string, productPrice: any, selected: any, sku: number, fileToUpload: any){
        this.productName = productName;
        this.productPrice = productPrice;
        this.selected = selected;
        this.sku = sku;
        this.fileToUpload = fileToUpload;
    }

}