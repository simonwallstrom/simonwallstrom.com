import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, favicon }) {
  return (
    <>
      <Head>
        <title>Simon Wallström · Product designer</title>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text fill=%22%23FFD03D%22 y=%22.85em%22 font-size=%22100%22>${favicon}</text></svg>`}
        />
      </Head>
      <Header favicon={favicon} />
      <main className="px-6">
        <div className="max-w-2xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
