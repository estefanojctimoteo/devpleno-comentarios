import React from 'react'
import Enzyme, { shallow /* quando quer validar se existe um componente */, 
	             mount   /* quando preciso de uma interação com o componente que dependa do DOM (clique por ex) */, 
	             render  /* quando quero ser mais fidedigno com a saída do HTML */} from 'enzyme'
import App from './App'

import ReactTestUtils from 'react-dom/test-utils'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('<App />', () => {
  const base = { /* passa o "moc" da dependência */
  	syncState: jest.fn()
  }
  it('renders without crashing', ()=> {
	const wrapper = shallow(<App base={base} />) // criando uma versão de "App", renderizando na tela com shallow
	expect(wrapper.length).toBe(1)
  })
  it('should have .container class', ()=>{
  	const wrapper = shallow(<App base={base} />)
  	expect(wrapper.is('.container')).toBe(true)
  })
  it('shows Comments', ()=>{
  	const wrapper = shallow(<App base={base} />)
  	expect(wrapper.find('Comments').length).toBe(1)
  })
  it('shows NewComment', ()=>{
  	const wrapper = shallow(<App base={base} />)
  	expect(wrapper.find('NewComment').length).toBe(1)
  })
  it('adds a new comment to state when postNewComment is called', ()=>{
  	const wrapper = mount(<App base={base} />)
  	wrapper.instance().postNewComment({ comment: 'test'})
  	//wrapper.instance().postNewComment({ comment: 'test'})
  	//wrapper.instance().postNewComment({ comment: 'test'})
  	//console.log(wrapper.instance().state)
  	/* Abaixo: cria uma variável (vetor) para a qual são passadas todas as chaves do state */
  	const comments = Object.keys(wrapper.instance().state.comments)
  	expect(comments.length).toBe(1)
  })



  /*
  it('outputs the <App />', ()=>{
  	const wrapperShallow = shallow(<App />)
  	const wrapperMount = mount(<App />)
  	const wrapperRender = render(<App />)
  	
  	console.log(wrapperShallow.debug())
  	console.log(wrapperMount.debug())
  	console.log(wrapperRender.html())
  }) */
})
