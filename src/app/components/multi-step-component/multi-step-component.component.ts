import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors } from '@angular/forms'
import { equalValidator } from '../../validators/formValidators'
declare var $

@Component({
  selector: 'app-multi-step-component',
  templateUrl: './multi-step-component.component.html',
  styleUrls: ['./multi-step-component.component.css']
})
export class MultiStepComponentComponent implements OnInit {
  formModel
  forms

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.forms = [
      {
        valid: false,
        selectable: true,
        errors: '!',
        errorsList: [],
        alias: 'Sign Up',
        group: this.fb.group({
          username: ['', [Validators.required, Validators.minLength(4)]],
          email: ['', [Validators.required, Validators.email]],
          password: this.fb.group({
            pass: ['', [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(12)]],
            pass2: ['', [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(12)]]
          }, { validator: equalValidator }),
          next: ['Next']
        })
      }, {
        valid: false, 
        errors: '!',
        errorsList: [],
        selectable: false,
        alias: 'Personal Info',
        group: this.fb.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          address: ['', Validators.required],
          birthdate: ['', Validators.required],
          next: ['Next']
        }, {})
      }, {
        valid: false,
        errors: '!',
        errorsList: [],
        selectable: false,
        alias: 'Credit Card Info',
        group: this.fb.group({
          cardNumber: ['', Validators.required],
          keyNumber: ['', Validators.required],
          type: ['', Validators.required],
          next: ['Next']
        }, {})
      }, {
        valid: false,
        errors: '!',
        errorsList: [],
        selectable: false,
        alias: 'Preferences',
        group: this.fb.group({
          comments: ['', Validators.required],
          sendMeSpam: ['true'],
          agreed: ['true'],
          next: ['Next']
        }, {})
      }
    ]
    this.initForm()
  }

  stepErrors (step) {
    const errors = this.getFormValidationErrors(step.group)
    step.errors = errors.length
    this.attachErrorsList(errors, step)
    step.valid = !!step.errors
  }


  getFormValidationErrors(formGroup) {
    let errors = []
    Object.keys(formGroup.controls).forEach(key => {
      const controlErrors: ValidationErrors = formGroup.get(key).errors
      
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.push({control: key, error: keyError, value: controlErrors[keyError]})
        })
      }
      if ('controls' in formGroup.controls[key]) {
        errors = [...errors, ...this.getFormValidationErrors(formGroup.controls[key])]
      }
    })
    return errors
  }

  onSubmit() { 
    if (this.isFormValid())
      console.log('fine go ahead')
    else
      console.log('stop it :O')
  }

  makeStepsSelectable () {
    for (let i = 1, l = this.forms.length; i < l; i++) {
      const current = this.forms[i], 
        previous = this.forms[i - 1]
      current.selectable = previous.selectable && (previous.errors === 0)
    }
  }

  isFormValid () {
    const last = this.forms[this.forms.length - 1]
    return last.selectable && (last.errors === 0)
  }

  initForm () {
    // saving reference
    const signUp = this.forms[0].group 
    const data = this.forms[1].group 
    const creditCard = this.forms[2].group 
    const preferences = this.forms[3].group

    // handling changes on each group 
    signUp.valueChanges.subscribe((v) => {this.stepErrors(this.forms[0])})
    data.valueChanges.subscribe((v) => {this.stepErrors(this.forms[1])})
    creditCard.valueChanges.subscribe((v) => {this.stepErrors(this.forms[2])})
    preferences.valueChanges.subscribe((v) => {this.stepErrors(this.forms[3])})

    // handling changes on main group and assigning subgroups to main form
    this.formModel = this.fb.group({signUp, data, creditCard, preferences})
    this.formModel.valueChanges.subscribe((v) => {this.makeStepsSelectable()})
  }

  attachErrorsList (errors, step) {
    step.errorsList = new Array
    
    errors.forEach(({ control: key, error, value }, index) => {
    console.log(key, error, value);
      switch (error) {
        case 'required':
          step.errorsList.push(`The field ${key} is ${error}`)
          break;
        case 'email':
          step.errorsList.push(`The field ${key} must have an ${error} format`)
          break;
        case 'minlength':
          step.errorsList.push(`The field ${key} must have at least ${value.requiredLength} charachters`)
          break;
        case 'maxlength':
          step.errorsList.push(`The field ${key} must have at most ${value.requiredLength} charachters`)
          break;
        case 'equal':
          step.errorsList.push(`The ${key} fields must be ${error}`)
          break;
        default:
          step.errorsList.push(`generic ${key} ------------- ${value.requiredLength}`)
          break;
      }        
    })
  }
}
