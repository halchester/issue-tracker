import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/query';
import Head from 'next/head';
import Footer from './components/Footer';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com'></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap'
						rel='stylesheet'
					></link>
				</Head>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
