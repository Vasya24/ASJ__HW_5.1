import { obj } from '../index';
import { sorting, orderByProps, keysArr, otherStuff, mainArr } from '../sorting';


test('Checking', () => {

    sorting()
    expect(obj.attack).toBe(80)
})