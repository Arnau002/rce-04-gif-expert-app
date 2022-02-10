import { shallow } from 'enzyme'
import GifExpertApp from "../GifExpertApp";


describe('Test <GifExpertApp />', () => {     

    test('Es mostra correctament', () => { 
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Ha de mostrar una llista de categories', () => { 
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});