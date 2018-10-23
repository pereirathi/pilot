import buildParameters from './buildParameters'
import registerData from './mocks/registerData'

describe('Company register build parameters', () => {
  const result = buildParameters(registerData)

  describe('Company template token',  () => {
    it('should be equal to token from self register template', () => {
      const selfRegisterToken = 'cjkifh2ja0000y0739q5odyyt'

      expect(result.company_template_token).toEqual(selfRegisterToken)
    })
  })

  describe('User data',  () => {
    it('should have email', () => {
      expect(result.email).toBeDefined()
      expect(result.email).toEqual(registerData.email)
    })

    it('should have password', () => {
      expect(result.password).toBeDefined()
      expect(result.password).toEqual(registerData.password)
    })
  })
})
