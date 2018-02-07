import React from 'react'
import Enzyme, { shallow /* quando quer validar se existe um componente */, 
	             mount   /* quando preciso de uma interação com o componente que dependa do DOM (clique por ex) */, 
	             render  /* quando quero ser mais fidedigno com a saída do HTML */} from 'enzyme'
import NewComment from './NewComment'

import ReactTestUtils from 'react-dom/test-utils'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('<NewComment />', () => {
  const postNewCommentMock = jest.fn()
  it('renders without crashing', ()=> {
	const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />) // criando uma versão de "App", renderizando na tela com shallow
	expect(wrapper.length).toBe(1)
  })
  it('handles enter', ()=> {
	const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />) // criando uma versão de "App", renderizando na tela com shallow
	const eventMock = {
	  keyCode: 13,
	  preventDefault: jest.fn()
	}
	wrapper.instance().refs.comment.value = 'test'
	wrapper.instance().handleEnter(eventMock)
	expect(eventMock.preventDefault.mock.calls.length).toBe(1)
	//console.log(eventMock)
	//console.log(eventMock.preventDefault)
	expect(postNewCommentMock.mock.calls.length).toBe(1)
	expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test')
	//expect(wrapper.length).toBe(1)
	expect(wrapper.instance().refs.comment.value).toBe('')
	console.log(postNewCommentMock.mock.calls[0][0].comment)
  })
})
