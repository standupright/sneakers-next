import { render } from '@testing-library/react';
import { PriceItem } from '../../components/PriceItem/PriceItem';

it('renders homepage unchanged', () => {
    const { container } = render(<PriceItem price={{ id: 1, title: 'text' }} />);
    expect(container).toMatchSnapshot();
});
