import { ArrowDownRight,ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StartPage = () => {
  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to GOLD WAY
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {/* <Button className="w-full sm:w-auto">Primary Button</Button> */}
             <Link href={'/login'}>
             <Button variant="default" className="w-full sm:w-auto">
                Get started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              </Link>
            </div>
          </div>
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-48 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StartPage;
