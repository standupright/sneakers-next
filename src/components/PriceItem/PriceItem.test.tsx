import { render, screen } from '@testing-library/react';
import { PriceItem } from './PriceItem';
import '@testing-library/jest-dom';

describe('PriceItem', () => {
    it('renders a PriceItem', () => {
        render(<PriceItem price={{ id: 1, title: 'text' }} />);
        const spanTitle = screen.getByText('text');
        expect(spanTitle).toBeInTheDocument();
    });
});
