import App from './App';
import setupIntegrationTest from './setup-integration-test';

test('renders account login link', () => {
	const { getByText } = setupIntegrationTest(<App />, { route: '/' });
	expect(getByText('Account Login')).toBeInTheDocument();
});
