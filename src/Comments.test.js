import React from 'react'
import Enzyme, { shallow /* quando quer validar se existe um componente */, 
	             mount   /* quando preciso de uma interação com o componente que dependa do DOM (clique por ex) */, 
	             render  /* quando quero ser mais fidedigno com a saída do HTML */} from 'enzyme'
import Comments from './Comments'

import ReactTestUtils from 'react-dom/test-utils'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('<Comments />', () => {
  it('renders without crashing', ()=> {
    const comments = {
      1: {
    	comment: 'test 1'
      },
      2: {
    	comment: 'test 2'
      },
      3: {
    	comment: 'test 3'
      }
    }
	const wrapper = shallow(<Comments comments={comments} />)
	expect(wrapper.length).toBe(1)
	expect(wrapper.find('Comment').length).toBe(3)
  })
})