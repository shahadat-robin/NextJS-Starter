import Container from '@/components/container';
import Image from 'next/image';

export default function ImageMasking() {
  return (
    <section className="min-h-screen shadow section-padding grid">
      <Container className="bg-primary h-full p-10 rounded-2xl relative">
        <div className="absolute inset-10 bg-secondary rounded-2xl overflow-hidden">
          <Image
            src="https://thumbs.dreamstime.com/b/miniature-city-streets-buildings-ai-generative-design-291181294.jpg"
            alt=""
            fill
          />
        </div>

        <div className="absolute top-10 left-10 h-[calc(40%-40px)] p-5 w-1/6 bg-inherit rounded-br-2xl flex items-center justify-center">
          <Image
            src="https://pub-e63b17b4d990438a83af58c15949f8a2.r2.dev/type/circle.png"
            alt=""
            height={50}
            width={150}
          />
        </div>

        <div className="absolute bottom-10 right-10 h-[calc(40%-40px)] p-5 w-1/6 bg-inherit rounded-tl-2xl cursor-pointer">
          <h3>Let&apos;s work togather</h3>
        </div>
      </Container>
    </section>
  );
}
