import type { FC, ReactNode } from 'react';

import 'styles/global.css';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
    <html lang="en">
    <body>{children}</body>
    </html>
);

export default RootLayout;
