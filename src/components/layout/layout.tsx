import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

export const MainLayout = ({ children }: PropsWithChildren) => (
	<>
		<Head>
			<title>NFT Market</title>
			<meta name="description" content="test project related NFTs" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main className='flex flex-col h-screen bg-white w-full'>
			<Header />

			{children}

			<Footer />
		</main>
	</>
);
