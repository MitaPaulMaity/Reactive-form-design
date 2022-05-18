import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-pagedetails',
  templateUrl: './pagedetails.component.html',
  styleUrls: ['./pagedetails.component.scss']
})
export class PagedetailsComponent implements OnInit {


  productForm: FormGroup;
  private _fb: any;
  FormControl: any;


  constructor(public fb: FormBuilder) {

    this.productForm = this.fb.group({
      quantities: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      quantities: this.fb.array([this.initquantities()])
    });
  }

  initquantities(){
    return this.fb.group({
      companyName: [""],
      whereAbout: [""],
      selectTariff: [""],
      selectPayment: [""]
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
  }

  removeQuantity(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}

