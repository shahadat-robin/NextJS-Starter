import Container from '@/components/container';
import Typography from '@/components/typography';

export default function AnotherSection() {
  return (
    <section className="min-h-screen shadow section-padding">
      <Container className="text-center">
        <Typography variant="h2">This is another section</Typography>
      </Container>
    </section>
  );
}
