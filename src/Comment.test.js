import React from 'react'
import Enzyme, { shallow /* quando quer validar se existe um componente */, 
	             mount   /* quando preciso de uma interação com o componente que dependa do DOM (clique por ex) */, 
	             render  /* quando quero ser mais fidedigno com a saída do HTML */} from 'enzyme'
import Comment from './Comment'

import ReactTestUtils from 'react-dom/test-utils'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('<Comment />', () => {
  it('renders without crashing', ()=> {
    const comment = {
    	comment: 'test'
    }
	const wrapper = shallow(<Comment comment={comment} />)
	expect(wrapper.length).toBe(1)
	expect(wrapper.is('.well')).toBe(true)
	expect(wrapper.text()).toBe(comment.comment)
  })
})
