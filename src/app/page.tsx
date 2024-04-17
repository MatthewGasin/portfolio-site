'use client';

import Header from 'components/header';
import { ThemeProvider } from 'contexts/DarkModeContext';
import Footer from 'components/footer';
import Container from 'components/layout/container/container';
import getContent from 'utils/content/getContent';
import Hero from 'components/hero';
import Section from 'components/layout/section';
import Switchback from 'components/switchback';
import List from 'components/list';
import Timeline from 'components/timeline';
import Widget from 'components/layout/widget';
import Deck from 'components/deck';

const Home = () => (
  <ThemeProvider>
    <Container>
      <Header />
      <Section id="Title" background="primary" size="full" index={0}>
        <Hero
          eyebrow={getContent('hero.eyebrow')}
          heading={getContent('hero.heading')}
          subhead={getContent('hero.subhead')}
          icons={['github', 'linkedin', 'instagram']}
          links={[
            { href: 'https://github.com/MatthewGasin', isInternalLink: false, id: 'link-github' },
            { href: 'https://www.linkedin.com/in/matthewgasin/', isInternalLink: false, id: 'link-linkedin' },
            { href: 'https://www.instagram.com/taranack/', isInternalLink: false, id: 'link-instagram' },
          ]}
        />
      </Section>
      <Section id="about" background="primary" index={1}>
        <Switchback
          heading={getContent('about.heading')}
          subhead={getContent('about.subhead')}
          assets={['/portraits/portrait_1.jpg']}
        />
      </Section>
      <Section id="skills" background="primary" index={2}>
        <List
          heading={getContent('skills.heading')}
          items={[
            'TypeScript',
            'JavaScript',
            'Web Development',
            'React',
            'NextJS',
            'Gatsby',
            'Angular',
            'Vue',
            'Node',
            'GraphQL',
            'Python',
            'SQL',
            'Unit Testing',
            'CI/CD',
            'Git',
            'REST APIs',
            'Tailwind',
            'MUI',
            'SASS/LESS',
          ]}
        />
      </Section>
      <Section id="timeline" background="primary" index={3}>
        <Timeline
          heading={getContent('timeline.heading')}
          entries={[
            {
              date: getContent('timeline.entry0.date'),
              title: getContent('timeline.entry0.title'),
              location: getContent('timeline.entry0.location'),
              description: getContent('timeline.entry0.description'),
              gap: 2,
            },
            {
              date: getContent('timeline.entry1.date'),
              title: getContent('timeline.entry1.title'),
              location: getContent('timeline.entry1.location'),
              description: getContent('timeline.entry1.description'),
            },
            {
              date: getContent('timeline.entry2.date'),
              title: getContent('timeline.entry2.title'),
              location: getContent('timeline.entry2.location'),
              description: getContent('timeline.entry2.description'),
              gap: 1,
            },
            {
              date: getContent('timeline.entry3.date'),
              title: getContent('timeline.entry3.title'),
              location: getContent('timeline.entry3.location'),
              description: getContent('timeline.entry3.description'),
            },
            {
              date: getContent('timeline.entry4.date'),
              title: getContent('timeline.entry4.title'),
              location: getContent('timeline.entry4.location'),
              description: getContent('timeline.entry4.description'),
              gap: 1,
            },
            {
              date: getContent('timeline.entry5.date'),
              title: getContent('timeline.entry5.title'),
              location: getContent('timeline.entry5.location'),
              description: getContent('timeline.entry5.description'),
            },
          ]}
        />
      </Section>
      <Section id="Projects" background="primary" index={4}>
        <Deck
          heading={getContent('deck.heading')}
          cards={[
            {
              heading: getContent('deck.card1.heading'),
              subhead: getContent('deck.card1.subhead'),
              image: '/projects/bwcalculator.png',
            },
            {
              heading: getContent('deck.card2.heading'),
              subhead: getContent('deck.card2.subhead'),
              image: '/projects/gempuzzle.png',
            },
            {
              heading: getContent('deck.card3.heading'),
              subhead: getContent('deck.card3.subhead'),
              image: '/projects/tutormatch.png',
            },
            {
              heading: getContent('deck.card4.heading'),
              subhead: getContent('deck.card4.subhead'),
              image: '/projects/yakking.png',
            },
          ]}
        />
      </Section>
      <Footer content={getContent('footer.disclaimer')} />
      <Widget />
    </Container>
  </ThemeProvider>
);

export default Home;
