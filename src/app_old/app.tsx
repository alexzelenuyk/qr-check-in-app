import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PorscheDesignSystemProvider>
            <Component {...pageProps} />
        </PorscheDesignSystemProvider>
    );
}
