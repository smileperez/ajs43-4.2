import calculateHealth from '../health';

test('should calculate health', () => {
  const input = [
    { name: 'Маг', health: 10 },
    { name: 'Мечник', health: 100 },
    { name: 'Лучник', health: 40 },
    { name: 'Лекарь', health: 80 },
  ];
  const expected = [
    { name: 'Мечник', health: 100 },
    { name: 'Лекарь', health: 80 },
    { name: 'Лучник', health: 40 },
    { name: 'Маг', health: 10 },
  ];
  const received = calculateHealth(input);
  expect(received).toEqual(expected);
});

test('should calculate health', () => {
  const input = [
    { name: 'Маг', health: 1 },
    { name: 'Мечник', health: 43 },
    { name: 'Лучник', health: 14 },
    { name: 'Лекарь', health: 70 },
  ];
  const expected = [
    { name: 'Лекарь', health: 70 },
    { name: 'Мечник', health: 43 },
    { name: 'Лучник', health: 14 },
    { name: 'Маг', health: 1 },
  ];
  const received = calculateHealth(input);
  expect(received).toEqual(expected);
});
