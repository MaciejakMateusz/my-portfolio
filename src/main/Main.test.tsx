import { render, screen } from '@testing-library/react';
import { Main } from './Main';

vi.mock('./start/Start.tsx', () => ({
    Start: () => <div data-testid="start-section">Start Section</div>
}));

vi.mock('./tech-stack/TechStack.tsx', () => ({
    TechStack: () => <div data-testid="tech-stack-section">Tech Stack Section</div>
}));

vi.mock('./projects/Projects.tsx', () => ({
    Projects: () => <div data-testid="projects-section">Projects Section</div>
}));

vi.mock('./activity/Activity.tsx', () => ({
    Activity: () => <div data-testid="activity-section">Activity Section</div>
}));

vi.mock('./career/Career.tsx', () => ({
    Career: () => <div data-testid="career-section">Career Section</div>
}));

vi.mock('./about/About.tsx', () => ({
    About: () => <div data-testid="about-section">About Section</div>
}));

vi.mock('./books/Books.tsx', () => ({
    Books: () => <div data-testid="books-section">Books Section</div>
}));

vi.mock('./contact/Contact.tsx', () => ({
    Contact: () => <div data-testid="contact-section">Contact Section</div>
}));

vi.mock('./footer/Footer.tsx', () => ({
    Footer: () => <div data-testid="footer-section">Footer Section</div>
}));

vi.mock('./navigation/NavController.tsx', () => ({
    NavController: () => <div data-testid="nav-controller">Navigation Controller</div>
}));

describe('Main Component', () => {
    test('renders all sections correctly', () => {
        render(<Main />);

        expect(screen.getByTestId('start-section')).toBeInTheDocument();
        expect(screen.getByTestId('tech-stack-section')).toBeInTheDocument();
        expect(screen.getByTestId('projects-section')).toBeInTheDocument();
        expect(screen.getByTestId('activity-section')).toBeInTheDocument();
        expect(screen.getByTestId('career-section')).toBeInTheDocument();
        expect(screen.getByTestId('about-section')).toBeInTheDocument();
        expect(screen.getByTestId('books-section')).toBeInTheDocument();
        expect(screen.getByTestId('contact-section')).toBeInTheDocument();
        expect(screen.getByTestId('footer-section')).toBeInTheDocument();
    });

    test('renders the navigation controller', () => {
        render(<Main />);
        expect(screen.getByTestId('nav-controller')).toBeInTheDocument();
    });
});