import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './App';
afterEach(cleanup)


// test('renders learn react link', () => {
//     render( < App / > );
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
});
it('should take a snapshot', () => {
    const { asFragment } = render( < App / > )

    expect(asFragment( < App / > )).toMatchSnapshot()
})