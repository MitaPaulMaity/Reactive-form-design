import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { comments } from './comments';


@Component({
  selector: 'app-pagedetails',
  templateUrl: './pagedetails.component.html',
  styleUrls: ['./pagedetails.component.scss']
})
export class PagedetailsComponent implements OnInit {

  

  enabled: boolean = false;

  newQuantityFormArray: Array<any> = [];

  comments: comments[] | undefined;

  onChange(id : number, name : string) {
    if(id) {
      this.newQuantityFormArray.push(name);
    } else {
      let index = this.newQuantityFormArray.indexOf(name);
      this.newQuantityFormArray.splice(index,1);
    }
}

duplicate() {
  console.log(this.newQuantityFormArray);
}

  productForm: FormGroup;
  private _fb: any;
  FormControl: any;


  constructor(public fb: FormBuilder) {

    this.productForm = this.fb.group({
      quantities: this.fb.array([]),
    });
  }
  ngOnInit(): void {

    this.comments = [
      { name: 'Google', id: 1},
      { name: 'Twitter', id: 2},
      { name: 'Facebook', id: 3},
      { name: 'Linkedin', id: 4},
    ]

    this.productForm = this.fb.group({
      quantities: this.fb.array([this.initquantities()])
    });
  }

  initquantities(){
    return this.fb.group({
      companyName: [""],
      whereAbout: [""],
      selectTariff: [""],
      selectPayment: [""],
    });
  }

  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      companyName: '',
      whereAbout: '',
      selectTariff: '',
      selectPayment: '',
    })
  }

  get formArr() {
    return this.productForm.get("quantities") as FormArray;
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
    return this.fb.group({
      companyName: '',
      whereAbout: '',
      selectTariff: '',
      selectPayment: '',
    })
  }

  removeQuantity(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}

