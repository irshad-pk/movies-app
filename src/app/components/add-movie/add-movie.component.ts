import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: MovieService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      director: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }


  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.addMovie(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Movie successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/movies'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
