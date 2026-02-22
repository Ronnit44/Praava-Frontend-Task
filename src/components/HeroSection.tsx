import { Gavel, FileText, CheckSquare, Receipt } from 'lucide-react';
import FloatingCard from './FloatingCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-content fade-in-up">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-purple-400 dark:text-purple-300">
                A single platform to
              </span>
              <br />
              <span className="text-purple-400 dark:text-purple-300">
                manage
              </span>{' '}
              <span className="text-purple-500 dark:text-purple-400">
                every part of
              </span>
              <br />
              <span className="text-purple-500 dark:text-purple-400">
                your{' '}
              </span>
              <span className="text-purple-600 dark:text-purple-500">
                legal work
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-600 dark:text-blue-400 max-w-lg leading-relaxed">
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication - all in one system.
            </p>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-8 right-12 z-10">
              <FloatingCard
                color="blue"
                rotation={-12}
                icon={Receipt}
                label="Billing"
                delay={200}
              />
            </div>

            <div className="absolute top-32 left-8 z-20">
              <FloatingCard
                color="orange"
                rotation={-8}
                icon={Gavel}
                label="Matters"
                delay={400}
              />
            </div>

            <div className="absolute top-48 right-4 z-30">
              <FloatingCard
                color="purple"
                rotation={-6}
                variant="profile"
                profileData={{
                  name: 'John Doe - Portal',
                  avatar:
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
                  message: 'Hi, Claire you please review a document for me?',
                }}
                delay={600}
              />
            </div>

            <div className="absolute bottom-32 left-16 z-20">
              <FloatingCard
                color="dark"
                rotation={4}
                icon={CheckSquare}
                label="Tasks"
                delay={800}
              />
            </div>

            <div className="absolute bottom-16 right-8 z-10">
              <FloatingCard
                color="dark"
                rotation={-10}
                icon={FileText}
                label="Documents"
                delay={1000}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:hidden">
            <FloatingCard
              color="blue"
              rotation={0}
              icon={Receipt}
              label="Billing"
              delay={200}
            />
            <FloatingCard
              color="orange"
              rotation={0}
              icon={Gavel}
              label="Matters"
              delay={400}
            />
            <FloatingCard
              color="dark"
              rotation={0}
              icon={CheckSquare}
              label="Tasks"
              delay={600}
            />
            <FloatingCard
              color="dark"
              rotation={0}
              icon={FileText}
              label="Documents"
              delay={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
