import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); // Simulació creació component

describe('Test <GifGrid />', () => { 
    
    const category = 'Test';

    test('Es mostra correctament', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Ha de mostrar items quan es carreguen imatges amb useFetchGif', () => { 
        const gifs = [{
            id:'ABC',
            url: 'https://localhost/img/imgExemple.gif',
            title: 'Qualsevol Títol'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});