import Container from '@/components/container';
import Typography from '@/components/typography';
import Image from 'next/image';

export default function AnotherSection() {
  return (
    <section className="min-h-screen shadow section-padding">
      <Container className="text-center">
        <Typography variant="h2">This is another section</Typography>
        <Image
          src="https://www.newsx.com/wp-content/uploads/2024/11/CBSE-Exam.webp"
          alt=""
          height={100}
          width={100}
        />
      </Container>
    </section>
  );
}
