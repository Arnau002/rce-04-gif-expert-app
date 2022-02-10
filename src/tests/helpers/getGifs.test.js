import { getGifs } from "../../helpers/getGifs"

describe('Test getGifs Fetch', () => { 

    test('Ha de retornar 10 elements', async() => { 
        const gifs = await getGifs('Test');
        expect(gifs.length).toBe(10);
    });

    test('Si no rep cap string ha de retornar un array buit', async() => { 
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});