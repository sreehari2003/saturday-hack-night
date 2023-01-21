import { VStack, Heading, Grid } from '@chakra-ui/react';
import { Activity } from '@prisma/client';
import { useEffect, useState } from 'react';
import { EventCard, CurrentEvent } from '@app/components';
import api from '@app/api';
import { BaseLayout } from '@app/layouts';
import { NextPageWithLayout } from '@app/pages/_app';
import { useRouter } from 'next/router';
import { ResultsModal } from '@app/components/modal';

const Events: NextPageWithLayout = () => {
    const router = useRouter();
    const [currentEvent, setCurrentEvent] = useState<Activity | null>(null);
    const [pastEvents, setPastEvents] = useState<Activity[]>([]);
    const [modalData, setModalData] = useState<Activity | null>(null);
    useEffect(() => {
        (async () => {
            const { data } = await api.get('/activity');
            const fcurrentEvent: Activity =
                data.data.filter((event: Activity) => event.status === 'REGISTRATION')[0] || null;
            const fpastEvents: Activity[] = data.data.filter(
                (event: Activity) => event.status === 'RESULT' || event.status === 'PENDING',
            );
            setCurrentEvent(fcurrentEvent);
            setPastEvents(fpastEvents);
        })();
        return () => {
            setCurrentEvent(null);
            setPastEvents([]);
        };
    }, []);
    useEffect(() => {
        const { eventID } = router.query;
        if (eventID) {
            const event = pastEvents.find((e: Activity) => e.id === eventID);
            if (event) {
                setModalData(event);
            }
        }
        return () => {
            setModalData(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pastEvents]);
    return (
        <>
            {modalData && (
                <ResultsModal
                    id={modalData.id}
                    isOpen
                    onClose={() => setModalData(null)}
                    image={modalData.image}
                />
            )}
            {currentEvent && (
                <VStack
                    marginTop="80px"
                    alignItems="flex-start"
                    width={{
                        base: '100vw',
                        lg: 'container.xl',
                    }}
                    backgroundImage={`
                linear-gradient(180deg, rgba(12, 15, 23, 0) 67.85%, #0C0F17 100%),
                linear-gradient(180deg, #0C0F17 0%, rgba(12, 15, 23, 0.8) 100%),
                url('images/codeBg.png') `}
                >
                    <Heading
                        fontSize="40px"
                        color="white"
                        fontFamily="Clash Display"
                        paddingInline={{
                            base: '16px',
                            lg: '32px',
                        }}
                    >
                        Ongoing Events🚀
                    </Heading>
                    <CurrentEvent event={currentEvent} />
                </VStack>
            )}
            {pastEvents.length > 0 && (
                <VStack
                    marginTop="50px"
                    alignItems="center"
                    width={{
                        base: '100vw',
                        xl: 'container.xl',
                    }}
                >
                    <Heading
                        fontSize="40px"
                        color="white"
                        fontFamily="Clash Display"
                        paddingInline={{
                            base: '16px',
                            lg: '32px',
                        }}
                        width="100%"
                        textAlign="left"
                        style={{
                            marginTop: '36px',
                        }}
                    >
                        Explored Areas🌟
                    </Heading>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            xl: 'repeat(4, 1fr)',
                        }}
                        gap={{
                            base: '18px',
                            lg: '48x',
                        }}
                        paddingBlockStart={{
                            base: '18px',
                            lg: '36px',
                        }}
                        paddingBlockEnd="36px"
                        paddingInline={{
                            base: '16px',
                            lg: '32px',
                        }}
                    >
                        {pastEvents.map((event: Activity) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </Grid>
                </VStack>
            )}
        </>
    );
};

Events.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
export default Events;
