import Container from '@/components/container';
import Typography from '@/components/typography';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-dark-light">
      <Container className="py-5 text-center">
        <Typography>This is Footer</Typography>
      </Container>
    </footer>
  );
}
