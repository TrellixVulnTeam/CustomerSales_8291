import { Injectable } from '@angular/core';

declare function toastr_success(title: any,message: any): any;
declare function toastr_info(title: any,message: any): any;
declare function toastr_error(title: any,message: any): any;
declare function toastr_warning(title: any,message: any): any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success (title: string, message: string) {
    toastr_success(title, message);
  }

  info (title: any, message: any) {
    toastr_info(title, message);
  }

  error (title: string, message: string) {
    toastr_error(title, message);
  }

  warning (title: string, message: string) {
    toastr_warning(title, message);
  }
}
