import { FormControl, FormGroup } from "@angular/forms";
import { MyValidators } from "./validators";

fdescribe('testing validatos ', () => {
  describe('testing validPassword', () => {
    it('should validate correct password returning null', () => {
      const control = new FormControl('diego1123')
      const rta = MyValidators.validPassword(control)
      expect(rta).toBeNull()
    })
    it('should error with invalid password', () => {
      const control = new FormControl('asdasd')
      const rta = MyValidators.validPassword(control)
      expect(rta?.invalid_password).toBeTruthy()
    })
  })

  describe('matchPasswords', () => {
    it('should validate equal password', () => {
      const form =  new FormGroup({
        password: new FormControl('d123456'),
        confirmPassword: new FormControl('d123456')
      })
      const rta = MyValidators.matchPasswords(form)
      expect(rta).toBeNull()
    })
    it('should return error when passwords differents', () => {
      const form = new FormGroup({
        password: new FormControl('d12345678'),
        confirmPassword: new FormControl('d123456')
      })
      const rta = MyValidators.matchPasswords(form)
      expect(rta?.match_password).toBeTruthy()
    })
    it('should throw error when controll missing', () => {
      const form = new FormGroup({
        elmo: new FormControl('dsa'),
        mazo: new FormControl('dasd')
      })
      const fn = () => {
        MyValidators.matchPasswords(form);
      }
      expect(fn).toThrow(new Error('matchPasswords: controls not found'))
    })
  })
})
