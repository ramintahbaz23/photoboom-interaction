import Link from 'next/link';
import AnimatedPage from '@/components/AnimatedPage';

export const photoboomMetadata = {
  id: 'photoboom',
  title: 'Photo boom',
  date: 'March 23, 2025',
  cardDate: 'Mar 2025',
  cardDescription: 'An exploding image gallery interaction.',
  href: '/photoboom',
  shareTitle: 'Photo boom — Ramin — Design Engineer',
  shareText: 'An exploding image gallery interaction exploring motion as feedback.',
};

export default function Home() {
  return (
    <AnimatedPage variant="dramatic">
      <div className="min-h-screen" style={{ backgroundColor: '#E2DEDB' }}>
        <main className="relative px-5 sm:px-6 pt-24 sm:pt-32 pb-28 sm:pb-32 min-h-screen flex items-center justify-center">
          <div className="max-w-[680px] mx-auto w-full">
            <div className="max-w-[560px] mx-auto">
              <h1 className="text-[16px] font-medium text-black mb-3 sm:mb-4">
                I&apos;m Ramin [rah-MEEN], a DC-based designer who codes.
              </h1>
              <div className="text-[16px] sm:text-[17px] text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                <p>
                  I solve problems by telling stories—whether through product, film, or something you can hold in your hands. Design is how I make sense of the world and connect people to what matters.
                </p>
                <p>
                  Currently building experiences in the space between craft and computation at{' '}
                  <Link
                    href="https://joinpromise.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:underline"
                  >
                    Promise
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
}
