import Container from '@/components/container';
import { cn } from '@/utils/class-merge';

export default function CardGridLayoutSection() {
  const getColumnSpan = (index: number) => {
    if (index % 9 === 2 || index % 9 === 4 || index % 9 === 6) {
      return 'md:col-span-2 border-primary';
    }
    return 'col-span-1 dark:border-dark-light ';
  };

  return (
    <section className="min-h-screen shadow section-padding">
      <Container className="grid md:grid-cols-4 gap-5">
        {Array(9)
          .fill('')
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                getColumnSpan(index),
                'border p-5 rounded-md bg-white dark:bg-dark-deep hover:shadow-md transition-shadow'
              )}
            >
              <h3 className="text-gray-light text-5xl">{index + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse, accusamus
                consectetur quia inventore laborum fuga saepe cum quidem soluta natus iste aperiam
                non vero magni aspernatur nihil veniam cumque.
              </p>
            </div>
          ))}
      </Container>
    </section>
  );
}
