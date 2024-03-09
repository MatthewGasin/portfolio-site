'use client';

import Header from 'components/header';
import { ThemeProvider } from 'contexts/DarkModeContext';
import Footer from 'components/footer';
import Container from 'components/container/container';
import getContent from 'utils/content/getContent';
import Link from "../components/link";

const Home = () => (
    <div><Link isInternalLink={true} href={'/'}></Link>a</div>
);

export default Home;
