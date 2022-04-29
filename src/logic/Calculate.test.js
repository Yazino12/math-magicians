import calculate from './calculate';

describe('calculate tests', () => {
  test('should return an obj with result of 4 + 4', () => {
    let res = calculate({}, '4');
    res = calculate(res, '+');
    res = calculate(res, '4');
    res = calculate(res, '=');
    expect(res.total).toBe('8');
  });
  test('calculate negative number and should return negative num', () => {
    let res = calculate({}, '1');
    res = calculate(res, '+/-');
    res = calculate(res, '-');
    res = calculate(res, '2');
    res = calculate(res, '=');
    expect(res.total).toBe('-3');
  });
  test('Multiply 5 x 5 should return 25', () => {
    let res = calculate({}, '5');
    res = calculate(res, 'x');
    res = calculate(res, '5');
    res = calculate(res, '=');
    expect(res.total).toBe('25');
  });
});
