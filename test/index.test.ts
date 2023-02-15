import { process } from "../index"
import { join } from 'path'
import type { TransformOptions } from '../index'


const png = join(__dirname, './mock/template.png')
describe('Test transform png', () => {
  const transformed = {
    code: 'module.exports = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYNQTFRFWYXXTXfEUXvKVYDROl+kHz12GzhwMlWXQmiwRm23J0aDOl6jI0J9LlCQKkuJPmOqI0F9SnK+QmixSXK9NlqdMlWWJkaDPGCmK0yLJEN/Hjx1LE2MR265VYDQU33NMFKSIkF8PGGnU37NSXG8Hjx2QWiwVoHSSHC7L1CRID54KkqJM1aYJkaCT3nGL1GRSHC6MlSWKEiFR2+6U33MP2SrVoLTHz13O1+kOV2iUHrIHTt0OF2hVoHRPGGmPWKpKUmHIT96KEmGUHnHTXbCO2ClQGauHjt0RWy1LU6NLk+PV4LTU37OIUB7JUSAUnzLLU+OUn3MP2WtVH/PJUWBHDpyV4PUJEN+TnfFR264MFKTSXG9VH7OQ2qyTHXCP2WsGzlxIT95NFeaLE2NQmmxQ2qzJkWCOFygT3nHUHrJPmSrWYTWKkqIO2CmHDlxN1ufI0J+TnjFHTpzQGatUXvJMVOULU+PNlqeRm64THTBJESAS3TAPWKoNVmcLE2LL1GSQ2myTXbDsoY0BwAAA6FJREFUeJztmdlX00AUh2+SZrqENC1tkVZAkE1xAUQRVxQXpIhbrVrBBUVxA/d9/dMN7Wmb0rTJzJ0kD8zvgQd6znxf585eABERERERERGRHRRJDpKuhFRCwkpgfMnEm1GlgPiRCj8wgyipJRZEFSS1LkA0//lKB7HG/7mgN/D974JoI5/E/RZoKICqG36XIFKnJ7QgJmGtA9RIAHTLCEj40fVyMpk0QuafOqw6BTxfAiVDj1lHW4ceSm79v7oGeTv5omHrWleP3pmqFsBDupzusKX7tPrIYWe6OQK82oIUV3hCMh7xo/alb07Mkzmg6M7kWkL8+VLMGetlJ0huu78azkux6/JbwrMM1N+/nHDAfH4GCt3442+gsfIJ4TMSGQtQToqHQLmlLl1Lx+PULly2BZOqVduRo+kuKgOdg0DGPN/Iu7qzpkhut9bTq1BJRPECUqRvj7XJfn1gr2y4deBRhMGhpma7h0dkLeHKAH86GbVveN8gSGkXDuguUPa3anps0LyJOJcC2wUH2rR90OiFlNNBQcXxDzk0f3gc5Ez79QE3ESYcBAiZPAKK1k4BdUaccuSbyR491k4BNQwH3AgQMn1ckTMtP8XsSa7XvKGZ1gppdv4Jt3wzJ0+dluO2nyCeSc5QCJjFPgtR26WJXWCWSoCQc8OK3fmF/ZBOyTdzfs6mDsyj8AK9ACEXm+vAvBpfYhEgs7KybT4wC6SZBMjl+W1XGWaBK2wChMyAbF1BmA9mWVYBspAHSxmYF4Lmo5DrdC2CgRdg5xNyda7+bsoqsIgRIP1TNQPWzcDVXtw6S0p1HLDOgms4AXIdIIESuIEUIDeh8nbJekW8hRXI5StdwPp0PYIVIEb5cs/+dIsWKJRf8NmPxbfRBsUUiSMeCe6gBe7KqJ8uxtAC9zB4gBJa4D5OYAYtsIwTWMHyJ3F8eIAVeIgUyD/C8R8XkQLA/EhaSSeWD6so/hM0H55i+Lk+vMAyRmANzwd4xs4v8eDDc2Z+Ic9FYJ2Vn3vBhU9/Qa+mhxMf1tj4L3nx4VWBhW9w4wPMM/D5/nL6mpr/hisf1jfo8BsrfPkAm1T8HPIQZJPiEgX/7TvufKpzSWnEA777xeD9B0/w4HZL0D96xQf45IwvJL3Dm/nsgM/ij1/tU1xoh4/Ne4zfypdWdHWVy2/Uzvk6aUOfnhj1h17Ot83vDXXXQz98pFfSO/7zV+n3n9XQ33/oW4eIiIiIiIiIyA7Mf5CYnXUXhIGbAAAAAElFTkSuQmCC"'
  }
  test('File is resource transformed', () => {
    expect(process('', png, {} as TransformOptions)).toEqual(transformed)
  })
})

const jpg = join(__dirname, './mock/template.jpg')
describe('Test transform jpg', () => {
  const transformed = {
    code: 'module.exports = "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCACAAIADASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAQMGAv/EADIQAAICAQEFBQcEAwEAAAAAAAABAgMEEQUSITFBEyJRYXEGFCNSgZGhMkJi4WNysdH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAwECBAUG/8QAHhEBAQEBAAICAwAAAAAAAAAAAAECERIhAzEiQVH/2gAMAwEAAhEDEQA/AMgA/TPkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaLMzFqelmRVF+DmtQN4Iq2lgt6LKq+skiRCyu1b1c4zXjF6jsOI+0M+vAo7Sfek+EYeLKCG381X9pKUZQ617ui0/6R9p5bzM2dmvcT3YLyJ+B7Pu6qNuTY4KS1UI89CN1rV/FSSSe17j3wyaIXVvWM1r6G004uLVh0qmlPd114vU3FomAAAAAAAAFdtHbFODrXFdpd8q5L1Pe18yeFguyv9cpbsX4ef4OaWBnWp2e7Wy146uL4k96s9R3nPfdZytpZeW32tr3X+yPBEU92U20vS2ucH/KLR4IXv7UDMJzrlvQk4vxT0MAxrZRKuF9crYuUIyTkl1R2WNlU5dSspmpR6+K9TiTfh5luFeran6x6SXmUxrxc6z12oNOJlV5mPG6p8Jc11T8DcehEAAAAAAABV7czo4tEK4xjK2T1jqtd3Tqc1ZdbdJytslNvrJ6kra97yNpWvXhB7i+n96kI829dq2ZyNteVkVLdhdNR+Xe4fY2LIpsemTjx/3q7svty/BGBz1vEt4UbuOHerv8cu7P7dfoRZwlXJxnFxkuaa0aMEmObKUVXkxV8Fy3n3l6S5m+hGBJeLG1OeJJ2JcXW134/Tr9CMZwWuwMt05nYSfcu/Euh05wtc3VbGyPOLTR3MZKUVJcmtUX+O+uJ7ntkAFHAAAABhrVaAcLOTnOUnzk9TAa0ej6A8b0AAAAADMZShJSjJxkuKafFE+Dq2n8Ozdqy/2z5Rs8n5+ZXhPR6o2Vj1ZXOqyVc4uMovRp9DtcbX3WnXnuR1+xQTwbtrwxcmCScobt02+qemvrodHFKMVFcktEW+Oc6nq9ZABVwAAAAAOKzquxzr6/lm9PTXgaC39osV15cchLu2rRvzX9FQeXU5eLy9gADloAABmMZTkoxTcpPRJdTB0Ow9lurTLvjpNr4cX0XidZz5VlvFlgY3umFVQ+cV3vV8WSQD1T0gAAAAAAAA0ZuLDNxZ0T4a8n4PozjsiizGulTbHSUWdwQ8/ZtO0IJT7s4/pmuaON48vp1nXHHgtrfZ3Lg/hzrsXrozzD2ezpPvdnD1l/4Q8NfxTyirPVdc7ZqFcHOT5JLVl9R7NQT1yL3L+MFp+S2xsTHxIbtFUYeL6v6nc+O37ZdxV7L2GqWr8tKU1xjDmo+viXQBaST6Tt6AA1gAAAAAAAAAAAAAAAAAAAAA//2Q=="'
  }
  test('File is resource transformed', () => {
    expect(process('', jpg, {} as TransformOptions)).toEqual(transformed)
  })
})