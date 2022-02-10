import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Test <AddCategory />', () => { 

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    
    test('Es mostra correctament', () => {         
        expect(wrapper).toMatchSnapshot();
    });

    test('Ha de canviar la caixa de text', () => { 
        const input = wrapper.find('input');
        const value = 'Hola';
        input.simulate('change', { target: { value: value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No ha de mostrar la informació fent submit', () => { 
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Ha de cridar setCategories i netejar la caixa de text', () => {         
        const value = 'Hola';
        wrapper.find('input').simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});