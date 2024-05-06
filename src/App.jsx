import './style.css';
import Container from './Container/Container';
import Header from './Header/Header.jsx';
import ContainerModal from './ContainerModal/ContainerModal';
import Button from './ButtonModal/ButtonModal'
import Submit from './Submit/Submit'

const App = () => {
    
    return (
        <>
            <Container>
                <Header />
                <p>Please let us know how we did with your support request. All feedback is apreciated to help us improve our oferring!</p>
                <div className='rated'>
                <Button nome={1}></Button>
                <Button nome={2}></Button>
                <Button nome={3}></Button>
                <Button nome={4}></Button>
                <Button nome={5}></Button>
                </div>
                <Submit/>
            </Container>    
        </>
    )
}

export default App;