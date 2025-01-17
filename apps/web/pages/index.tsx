import { Button, Container, Heading, Text, VStack, Image, Flex, Grid, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { ParallaxView } from '@app/components';
import { Card } from '@app/components/cards';
import { Accordion } from '@app/components/utils';
import { useAuth } from '@app/hooks';
import { BaseLayout } from '@app/layouts';
import { NextPageWithLayout } from '@app/pages/_app';
import Link from 'next/link';

const faqs = [
    {
        question: 'What is Saturday Hacknight?',
        answer: 'Saturday Hack Night is bi-weekly hackathon that gives tech-savvy learners an opportunity to explore all the latest technology related concepts including APIs, frameworks and build some cool projects.',
    },
    {
        question: 'Who can Participate?',
        answer: 'Anyone who is interested in learning and building something new. You can be a student, a professional, or a hobbyist. All you need is a laptop and an internet connection.',
    },
    {
        question: 'What should be the team size?',
        answer: 'A Team should have minimum 2 Members & can be a maximum of 4 Member.',
    },
    {
        question: 'Is it Online/Offline?',
        answer: 'The first 5 hacknights will be conducted online & the 6th one will be conducted at TinkerSpace.',
    },
    {
        question: 'How do I participate in Offline HackNight?',
        answer: 'Physical HackNight is restricted to the teams who have submitted their projects in the Online HackNights.',
    },
    {
        question: 'What is the schedule of the program?',
        answer: ' The program will be conducted on every odd Saturday from 06:00 PM to 11:00 PM IST.',
    },
    {
        question: 'Still have questions?',
        answer: 'Feel free to reach out to us at hi@tinkerhub.org or in our Discord server.',
    },
];

const Home: NextPageWithLayout = () => {
    const { user, login } = useAuth();
    const router = useRouter();
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        currentTarget.style.setProperty('--mouse-x', `${x}px`);
        currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    useEffect(() => {
        // eslint-disable-next-line no-restricted-syntax
        for (const card of document.querySelectorAll('.card')) {
            const cardBody = card as HTMLDivElement;
            cardBody.onmousemove = (e: MouseEvent) =>
                handleMouseMove(e as unknown as React.MouseEvent<HTMLElement>);
        }
    }, []);
    return (
        <>
            <VStack
                marginTop="72px"
                rowGap="20px"
                width="100vw"
                fontFamily="Clash Display"
                backgroundImage={`
                linear-gradient(180deg, rgba(12, 15, 23, 0) 67.85%, #0C0F17 100%),
                linear-gradient(180deg, #0C0F17 0%, rgba(12, 15, 23, 0.8) 100%),
                url('/images/codeBg.png') `}
            >
                <Heading
                    fontSize={{ base: '48px', lg: '100px' }}
                    fontWeight="bold"
                    fontFamily="Clash Display"
                    textAlign="center"
                    textColor="white"
                    _selection={{
                        textColor: 'white',
                    }}
                >
                    SATURDAY
                    <br />
                    <Box
                        color="#DBF72C"
                        _selection={{
                            textColor: '#DBF72C',
                        }}
                    >
                        HACKNIGHT
                    </Box>
                </Heading>
                <Container maxW="720px">
                    <Text
                        textAlign="center"
                        textColor="#E9E5E1"
                        fontSize={{
                            base: '18px',
                            lg: '24px',
                        }}
                        _selection={{
                            textColor: '#E9E5E1',
                        }}
                    >
                        It’s a bi weekly hackathon that gives tech-savvy learners an oppurtunity to
                        explore all the latest technology related concepts including APIs,
                        frameworks and build some cool projects.
                    </Text>
                </Container>
                <Button
                    width="250px"
                    backgroundColor="white"
                    fontSize="18px"
                    fontWeight="medium"
                    height="45px"
                    zIndex={1}
                    transition=".5s all ease"
                    _hover={{
                        boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.15)',
                        backgroundColor: '#DBF72C',
                    }}
                    _active={{
                        textColor: '#DBF72C',
                        background: 'rgba(219, 247, 44, 0.15)',
                        boxShadow: '0px 8px 16px rgba(219, 247, 44, 0.15)',
                        backdropFilter: 'blur(25px)',
                    }}
                    onClick={() => {
                        if (user) {
                            router.push('/events');
                        } else {
                            login();
                        }
                    }}
                >
                    REGISTER NOW
                </Button>
            </VStack>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <VStack
                    position="relative"
                    marginTop="36px"
                    paddingInline={{ base: '18px', lg: '36px' }}
                    fontFamily="Clash Display"
                    width={{
                        base: '100vw',
                        xl: 'container.xl',
                    }}
                    alignItems="flex-start"
                >
                    <Image
                        top="-100"
                        position="absolute"
                        src="/images/neon01.svg"
                        right="0"
                        zIndex="0"
                    />
                    <Flex
                        alignItems="flex-start"
                        flexDirection={{
                            base: 'column-reverse',
                            lg: 'row',
                        }}
                    >
                        <VStack
                            alignItems="flex-start"
                            justifyContent="center"
                            minHeight={{ base: '0px', md: '450px' }}
                        >
                            <Heading
                                fontFamily="Clash Display"
                                textColor="white"
                                fontSize="40px"
                                textAlign="left"
                                zIndex="1"
                            >
                                WHAT IS{' '}
                                <span
                                    style={{
                                        color: '#DBF72C',
                                    }}
                                >
                                    SATURDAY HACKNIGHT &nbsp;
                                </span>
                                ?
                            </Heading>
                            <Text
                                fontSize={{ base: '18px', lg: '24px' }}
                                textColor="white"
                                marginBlock="18px"
                            >
                                Saturday HackNight is a platform for tech enthusiasts to explore the
                                latest technology-related concepts, collaborate with others to
                                develop their ideas and projects, and stay up-to-date on the latest
                                tech trends.
                            </Text>
                        </VStack>
                        <Image
                            zIndex="1"
                            height="100%"
                            width="100%"
                            src="/images/physicalHack.png"
                        />
                    </Flex>
                </VStack>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <Flex
                    marginBlock="28px"
                    columnGap={{
                        lg: '50px',
                        xl: '100px',
                    }}
                    justifyContent="center"
                    alignItems="center"
                    rowGap="25px"
                    flexDirection={{ base: 'column', lg: 'row' }}
                >
                    <VStack spacing="36px">
                        <Heading fontFamily="Clash Display" textColor="#DBF72C" fontSize="80px">
                            1000+
                        </Heading>
                        <Text
                            textColor="white"
                            fontFamily="Clash Display"
                            fontSize="24px"
                            style={{
                                marginTop: '0px',
                            }}
                        >
                            Participants
                        </Text>
                    </VStack>
                    <VStack>
                        <Heading fontFamily="Clash Display" textColor="#DBF72C" fontSize="80px">
                            200+
                        </Heading>
                        <Text
                            textColor="white"
                            fontFamily="Clash Display"
                            fontSize="24px"
                            style={{
                                marginTop: '0px',
                            }}
                        >
                            Projects
                        </Text>
                    </VStack>
                    <VStack>
                        <Heading fontFamily="Clash Display" textColor="#DBF72C" fontSize="80px">
                            25+
                        </Heading>
                        <Text
                            textColor="white"
                            fontFamily="Clash Display"
                            fontSize="24px"
                            style={{
                                marginTop: '0px',
                            }}
                        >
                            HackNights
                        </Text>
                    </VStack>
                    <VStack>
                        <Heading fontFamily="Clash Display" textColor="#DBF72C" fontSize="80px">
                            02
                        </Heading>
                        <Text
                            textColor="white"
                            fontFamily="Clash Display"
                            fontSize="24px"
                            whiteSpace="nowrap"
                            textAlign="center"
                            style={{
                                marginTop: '0px',
                            }}
                        >
                            Physical HackNight
                        </Text>
                    </VStack>
                </Flex>
            </motion.div>
            <VStack
                width={{
                    base: '100vw',
                    xl: 'container.xl',
                }}
                paddingInline={{ base: '18px', lg: '36px' }}
                backgroundImage={`linear-gradient(180deg, rgba(12, 15, 23, 0.2) 67.85%, #0C0F17 100%), linear-gradient(180deg, #0C0F17 0%, rgba(12, 15, 23, 0.4) 100%), url('/images/codeClub.png');`}
            >
                <Heading
                    textColor="white"
                    textAlign="left"
                    fontSize="40px"
                    width="100%"
                    paddingInline={{
                        base: '18px',
                        lg: '36px',
                    }}
                    paddingBlockStart={{
                        base: '18px',
                        lg: '48px',
                    }}
                    fontFamily="Clash Display"
                >
                    HOW TO <span style={{ color: '#DBF72C' }}>REGISTER?</span>
                </Heading>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={{
                        base: '18px',
                        lg: '48x',
                    }}
                    paddingBlock={{
                        base: '18px',
                        lg: '36px',
                    }}
                >
                    <Card
                        num="1"
                        heading="Create a Repo"
                        text="Create a repo & initialize it with ReadMe"
                    />
                    <Card
                        num="2"
                        heading="Create a Team"
                        text="Create a team of 1-3 members and register for HackNight"
                    />
                    <Card
                        num="3"
                        heading="Discuss Ideas"
                        text="Discuss and finalize the project idea and building process"
                    />
                    <Card
                        num="4"
                        heading="Build it"
                        text="Build it together at Saturday Hack Night"
                    />
                </Grid>
            </VStack>
            <VStack alignItems="flex-start" marginBlock="32px">
                <Heading
                    fontFamily="Clash Display"
                    textColor="white"
                    textAlign="left"
                    width="100vw"
                    paddingInline={{ base: '18px', lg: '18px' }}
                    fontSize="40px"
                >
                    HEAR FROM{' '}
                    <span
                        style={{
                            color: '#DBF72C',
                        }}
                    >
                        PEOPLE 🔊
                    </span>
                </Heading>
                <VStack>
                    <ParallaxView
                        text="In one word, adipoli.The name speaking for itself, it's really cool opportunity to tinker with tools and build intresting stuff."
                        duration={20}
                    />
                    <ParallaxView
                        text="Physical Saturday Hacknight was an unforgettable experience that fueled our motivation and nurtured our ability to work effectively as a team under tight deadlines.  I highly recommend this program to all developers and enthusiasts who want to experience the thrill of creating impactful solutions."
                        duration={60}
                    />
                    <ParallaxView
                        text="By participating in multiple SHNs, I have had the opportunity to learn various APIs and tech-frameworks within a limited time. The team-based approach has also encouraged collaboration and peer learning, providing an excellent platform for brainstorming ideas and developing skills."
                        duration={50}
                    />
                </VStack>
            </VStack>
            <VStack alignItems="center" justifyContent="center" marginBlock="16px">
                <Heading
                    fontFamily="Clash Display"
                    textColor="white"
                    textAlign="left"
                    width="100vw"
                    paddingInline={{ base: '18px', lg: '36px' }}
                    fontSize="40px"
                >
                    OUR PREVIOUS{' '}
                    <span
                        style={{
                            color: '#DBF72C',
                        }}
                    >
                        PARTNERS 🤝
                    </span>
                </Heading>
                <Link href="https://tinkerhub-foundation.notion.site/Saturday-HackNight-Partnership-4d046b8d4a95455fbfb6d9faa3018c97">
                    <Text
                        fontSize={{ base: '18px', lg: '24px' }}
                        textAlign="left"
                        width="100vw"
                        fontFamily="Clash Display"
                        paddingInline={{ base: '18px', lg: '36px' }}
                        textColor="white"
                        marginBlockEnd="16px"
                        style={{
                            marginTop: '0px',
                        }}
                        _hover={{
                            textDecoration: 'underline',
                            textColor: '#DBF72C',
                        }}
                    >
                        Click here to know more about partnership
                    </Text>
                </Link>
                <VStack
                    position="relative"
                    className="card"
                    marginInline="18px"
                    background="rgba(255, 255, 255, 0.1)"
                    borderRadius="17px"
                    width="95%"
                    paddingBlock={{
                        base: '18px',
                        lg: '36px',
                    }}
                    paddingInline={{
                        base: '18px',
                        lg: '36px',
                    }}
                    _before={{
                        zIndex: '0',
                        content: '""',
                        position: 'absolute',
                        borderRadius: 'inherit',
                        top: '0',
                        left: '0',
                        opacity: '0',
                        transition: 'opacity 500ms',
                        pointerEvents: 'none',
                        width: '100%',
                        height: '100%',
                        background:
                            'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) , transparent 50%)',
                    }}
                    _hover={{
                        _before: {
                            opacity: '1',
                        },
                    }}
                >
                    <Link href="https://engagespot.co/">
                        <Image src="/images/partners/engageSpot.svg" alt="Engagespot" />
                    </Link>
                </VStack>
            </VStack>
            <VStack
                width={{
                    base: '100vw',
                    xl: 'container.xl',
                }}
            >
                <Heading
                    fontFamily="Clash Display"
                    textColor="white"
                    textAlign="left"
                    width="100vw"
                    paddingInline={{
                        base: '18px',
                        lg: '36px',
                    }}
                    fontSize="40px"
                    marginBlockEnd="36px"
                >
                    FREQUENTLY ASKED{' '}
                    <span
                        style={{
                            color: '#DBF72C',
                        }}
                    >
                        QUESTIONS 💬
                    </span>
                </Heading>
                <Accordion content={faqs} />
            </VStack>
        </>
    );
};
Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default Home;
