import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import { Link, Layout, Paragraph, SEO, Spacer, Showcase } from '../components';

const IndexPage = () => (
    <Layout>
        <SEO />
        <Spacer space="xlg" />

        <Reveal animation={Animation.FadeInUp}>
            <Showcase
                headline="Closelink (since 07/19)"
                type="work"
                label="Work"
            >
                <Paragraph>
                    <Link to="https://www.closelink.net/">Closelink</Link> is a
                    startup in the maritime industry founded and based in
                    Hamburg. As a Full Stack engineer my role is to plan and
                    develop software thinking about both our needs in the
                    backend as well as our frontend.
                </Paragraph>

                <Paragraph>
                    On the frontend side, I focus on moving our existing
                    codebase from AngularJS to React while also building new
                    features. Besides that, I help the team to deepen their
                    knowledge about React.
                </Paragraph>

                <Paragraph>
                    On the backend side, I help planning and developing a
                    scalable microservice architecture written in Kotlin, NodeJS
                    and Java.
                </Paragraph>

                <Paragraph>
                    In April 2020, we launched a new website entirely rewritten
                    using Gatsby, React and styled-components. Learn more about{' '}
                    <Link to="https://www.closelink.net/news/website-case-study/">
                        here
                    </Link>
                    .
                </Paragraph>
            </Showcase>
        </Reveal>

        <Spacer space="lg" />

        <Reveal animation={Animation.FadeInUp}>
            <Showcase
                headline="FREE NOW (formerly mytaxi) (08/14 - 06/19)"
                type="work"
                label="Work"
            >
                <Paragraph>
                    I joined <Link to="https://free-now.com/">FREE NOW</Link> as
                    an apprentice directly after I did my A levels (Abitur). It
                    was very exciting learning about the internals of an app I
                    used as a customer on a regular basis.
                </Paragraph>
                <Paragraph>
                    During my time, we grew from ~150 to ~1000 employees which
                    enabled me to learn a lot. I had the chance to be part of
                    many different teams but eventually settled in the B2B team.
                    This area gained more and more focus.
                </Paragraph>
                <Paragraph>
                    As{' '}
                    <Link to="https://free-now.com/uk/business/account/">
                        B2B
                    </Link>{' '}
                    was an area that did not have much priority in recent years
                    before, we had the chance to restructure and refactor huge
                    parts while building many new features in different tools.
                    It was very exciting to see the platform grow, integrate
                    with many large corporations and improve internal processes.
                    When I left, the B2B development team grew from four members
                    to about 20.
                </Paragraph>
            </Showcase>
        </Reveal>

        <Spacer space="lg" />

        <Reveal animation={Animation.FadeInUp}>
            <Showcase
                headline="Hotspot or not?"
                type="side-project"
                label="Side Project"
            >
                <Paragraph>
                    Corona is a topic that is relevant to everybody,
                    unfortunately. Together with{' '}
                    <Link to="https://seb.astian.eu/">Sebastian</Link> and{' '}
                    <Link to="https://julianblohm.vercel.app/">Julian</Link> I
                    built a site to quickly check whether you are in a risk area
                    and which rules are in place for your location. It is now
                    used and trusted by many visitors every day to inform
                    themselves. Check it out{' '}
                    <Link to="https://hotspotornot.de/">here</Link>!
                </Paragraph>

                <Paragraph>
                    If you want to learn more about the project, there is a{' '}
                    <Link external={false} to="/posts/hotspot-or-not">
                        whole article
                    </Link>{' '}
                    about it.
                </Paragraph>
            </Showcase>
        </Reveal>

        <Spacer space="lg" />

        <Reveal animation={Animation.FadeInUp}>
            <Showcase
                headline="Hamburg Coding School (since 2019)"
                type="side-project"
                label="Side Project"
            >
                <Paragraph>
                    One of my passions is to spread my knowledge to others. Not
                    only does it enable others to do new things they were not
                    able to do before. It is also a great way to deepen your
                    knowledge as well.
                </Paragraph>
                <Paragraph>
                    <Link to="https://hamburgcodingschool.com/en/">
                        Hamburg Coding School
                    </Link>{' '}
                    provides a safe learning environment for everyone to learn
                    everything from HTML, CSS to JavaScript to React. My role is
                    to teach the different topics to students, answer project
                    questions and{' '}
                    <Link to="https://hamburgcodingschool.com/en/mentoring/">
                        mentor students
                    </Link>
                    .
                </Paragraph>
            </Showcase>
        </Reveal>

        <Spacer space="lg" />

        <Reveal animation={Animation.FadeInUp}>
            <Showcase
                headline="CSSclasses (since 2016)"
                type="side-project"
                label="Side Project"
            >
                <Paragraph>
                    I believe that education should be available for everyone.
                    It enables people to find their passion and create exciting
                    things.
                </Paragraph>
                <Paragraph>
                    HTML & CSS is how I started programming. It is a great way
                    to get into programming because you directly have visual
                    feedback in your browser. You directly see the impact your
                    changes have.
                </Paragraph>
                <Paragraph>
                    When I visited a friend in Berlin, we went to a CSSclasses
                    meetup. I came back numerous times and thought, it would be
                    great to have the same event in Hamburg.{' '}
                    <Link to="https://cssclass.es/">CSSclasses</Link> is an
                    all-day event where people can learn HTML & CSS and ask
                    different coaches for advice.
                </Paragraph>
                <Paragraph>
                    I thought, it would be cool to have the same event in
                    Hamburg. Luckily, other people thought so too and we
                    organized the{' '}
                    <Link to="https://www.meetup.com/de-DE/opentechschool-hamburg/events/229290647/">
                        first one in May 2016
                    </Link>{' '}
                    followed by many more. It was always fun creating a space
                    where people could just come around, learn, experiment and
                    have something to eat and drink for free.
                </Paragraph>
            </Showcase>
        </Reveal>
    </Layout>
);

export default IndexPage;
