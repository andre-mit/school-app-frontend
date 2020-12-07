import Head from 'next/head';

import { CenterH, Container, Presentation, Search } from '../styles/pages/Home';
import { useAuth } from '../contexts/auth';
import Header from '../components/Header';

import Banner from '../assets/images/developer.svg';

const Home: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <>
            <Head>
                <title>Courses App</title>
            </Head>
            <Container>
                <Header />
                <CenterH>
                    <Presentation>
                        <Search>
                            <h2>
                                Start your career as a developer the right way!
                            </h2>
                            <input
                                type="text"
                                placeholder="What are we going to learn today?"
                            />
                        </Search>
                        <Banner />
                    </Presentation>
                </CenterH>
            </Container>
        </>
    );
};
export default Home;
