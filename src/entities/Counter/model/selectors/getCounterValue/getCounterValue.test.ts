import { getCounterValue } from './getCounterValue';
import { StateSchema } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    })
})