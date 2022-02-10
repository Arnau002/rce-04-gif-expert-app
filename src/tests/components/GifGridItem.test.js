import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Test <GifGridItem />', () => { 

    const title = 'Un título';
    const url = 'https://localhost/img.jpg'

    let wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Es Mostra Correctament', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Ha de tenir un paràgraf amb el title', () => { 
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('La imatge ha de tenir src = url i alt = title', () => { 
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
     });

     test('Té animate_fadeIn', () => { 
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true); 
      });      
 });