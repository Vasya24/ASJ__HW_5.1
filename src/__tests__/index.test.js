import { sorting } from '../sorting';


test('Checking', () => {
    const obj = {
        name: 'мечник', 
        health: 10, 
        level: 2, 
        attack: 80, 
        defence: 40
      }
    sorting(obj)
    expect(obj.attack).toBe(80);
    expect(Object.values(obj).includes('мечник')).toBe(true)
})