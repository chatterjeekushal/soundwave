
import { Carousel,CarouselSlide } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, Text } from '@mantine/core';
import classes from '@/public/Demo.module.css';
import { ArrowRight, ArrowLeft } from "lucide-react";

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

function Join_the_trip() {
//   const theme = useMantineTheme();
//   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <CarouselSlide key={item.title}>
      <Card {...item} />
    </CarouselSlide>
  ));

  return (
    <div className='mt-12 w-full mx-auto ml-2 sm:m-auto lg:m-auto  xl:m-auto sm:px-6 lg:px-8'>

<div className='flex flex-col items-center justify-center gap-4 mb-12 pt-3 lg:pt-20'>
  <h2 className='text-4xl font-bold text-center mb-4'>Join the Trip</h2>
  <p className='text-gray-600 max-w-2xl text-center'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
  </p>
</div>

    <Carousel
      slideSize={{ base: '80%', sm: '50%' }}
      slideGap="lg"
      align="start"
      slidesToScroll={1}
      nextControlIcon={<ArrowRight className="w-8 h-8 bg-black text-white border rounded-lg" />}
                previousControlIcon={<ArrowLeft className="w-8 h-8 bg-black text-white border rounded-lg" />}
    >
      {slides}
    </Carousel>
    </div>
  );
}

export default Join_the_trip;
