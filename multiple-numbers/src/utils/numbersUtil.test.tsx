import numbersUtil from '../utils/numbersUtil';

const expected = ['Team', 'Nama', 'Nama Team'];
//This test is focused to verify that expected data is being returned

describe('Result expected', () => {
    it('should return the words: Team, Nama, Nama Team', () => {
        expect(numbersUtil).toEqual(expect.arrayContaining(expected));
        console.log('ok, the words (Team, Nama, Nama Team) is returned.')
    })
}
)
