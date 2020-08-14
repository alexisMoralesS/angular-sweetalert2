import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  alertSuscses() {
    Swal.fire({
      title: 'Success',
      text: 'text success',
      icon: 'success',
      confirmButtonText: 'ok',
    });
  }
  alertWarnig() {
    Swal.fire({
      title: 'Warning',
      text: 'text warning',
      icon: 'warning',
      confirmButtonText: 'ok',
    });
  }
  alertError() {
    Swal.fire({
      title: 'Error',
      text: 'text errr',
      icon: 'error',
      confirmButtonText: 'ok',
    });
  }
  alertInfo() {
    Swal.fire({
      title: 'Info',
      text: 'text info',
      icon: 'info',
      confirmButtonText: 'ok',
    });
  }
  alertQuestion() {
    Swal.fire({
      title: 'Question',
      text: 'text question',
      icon: 'question',
      confirmButtonText: 'ok',
    });
  }
}
