import Button from '@/components/button';
import Container from '@/components/container';
import IconStore from '@/components/icon-store';
import { cn } from '@/utils/class-merge';

export default function HeroSection() {
  return (
    <section
      className={cn(
        `flex section-padding min-h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://zeroinchinteriorsltd.com/wp-content/uploads/2023/10/Corporate-office-wall-interior-design.jpg')] bg-cover bg-center`
      )}
    >
      <Container className="flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1>We are ROAST</h1>
          <p className="text-2xl">An independent performance media specialist agency</p>

          <Button className="text-dark">
            Contact us <IconStore name="arrow-right-long" className="text-xl" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
