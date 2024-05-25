import Container from '@/components/container';
import Typography from '@/components/typography';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-primary">
      <Container className="py-10 text-center">
        <Typography>This is Footer</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
