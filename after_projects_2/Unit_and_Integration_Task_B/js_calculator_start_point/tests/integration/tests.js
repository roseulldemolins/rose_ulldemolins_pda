var chaiAsPromised = require('chai-as-promised');
var chai = require('chai');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  test('calculator should have buttons that update the display of the running total', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('2')
  })

  test('calculator should update the display with the results of arithmetical operations', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('3')
  })

  test('calculator should be able to chain operations', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('11')
  })

  test('calculator should clear the running total without affecting the calculation', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#clear')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('0')
  })

  test('calculator should be able to go negative', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('-1')
  })

  test('calculator should be able to display decimals', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('1.5')
  })

  test('calculator should be able to display large numbers', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('990000000000000')
  })


  test('calculator should display NaN if dividing by zero', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('NaN')
  })


});
