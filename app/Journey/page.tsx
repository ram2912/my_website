"use client";
import { Navigation } from "../components/nav";

export default function Journey() {
  // Timeline events array
  const timelineEvents = [
    {
      date: "1998",
      title: "Beginnings",
      description:
        "Born in Pune, India. Grew up in a small city, but with big dreams. Always curious about machines, technology and how things work.",
      image: "IMG-20150521-WA0000.jpg", // Will be rendered smaller
    },
    {
      date: "2012",
      title: "Tech Discovery",
      description:
        "Got my first computer and started exploring the world of technology. Learned to code and built my first website.",
      image: "30296e71-cf6a-4b5c-b4bc-7af3888d291d.jpg",
    },
    {
      date: "2019",
      title: "Joining my first startup",
      description:
        "Diving into an seed stage deep-tech startup, Daedalus, learning the ropes and building skills. Worked with some of the smartest people I know.",
      image: "IMG_6974.JPG",
    },
    {
      date: "2022",
      title: "Graduating from University",
      description:
        "Graduated with a BSc in Mechanical Engineering from Karlsruhe Institute of Technology (KIT), one of the best and most prestigious universities in Germany.",
      image: "download.png",
    },
    {
      date: "2022",
      title: "Jumping into entrepreneurship",
      description:
        "Co-founded SCORR, a no-code AI platform for Revenue Operators. Reached more than 250+ weekly users, 5 enterprise customers, and $150K in ARR.",
      image: "IMG_2464.JPG",
    },
    {
      date: "2024",
      title: "Joining a FinTech Giant",
      description:
        "Joined SAP Fioneer to build a GTM Strategy and Operations team. Working directly with the global CEO, aiming to revolutionize the fintech industry.",
      image: "sap-sap-fioneer.jpg",
    }
  ];

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      {/* Header container (separate from timeline container) */}
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12">
          <h2 className="text-4xl font-bold text-center text-zinc-200">
            My Journey
          </h2>
        </header>
      </div>

      {/* Timeline container */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16 relative">
          {/* Vertical timeline line spanning the timeline container */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-zinc-500 z-0"></div>

          {/* Timeline events */}
          <div className="space-y-16 relative z-10">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* Marker circle: visible only on desktop */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-zinc-900 border-2 border-zinc-500 rounded-full w-8 h-8"></div>
                  </div>

                  {/* Desktop: Alternating layout */}
                  <div className="hidden md:flex justify-between items-center">
                    {isLeft ? (
                      <div className="w-5/12 pr-8 text-right">
                        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-zinc-200">
                          <h3 className="text-2xl font-semibold">
                            {event.title}
                          </h3>
                          <time className="block text-sm text-zinc-400">
                            {event.date}
                          </time>
                          <p className="mt-2">{event.description}</p>
                          {event.image && (
                            <img
                              src={event.image}
                              alt={event.title}
                              // Make the first image smaller
                              className={`mt-4 rounded ${
                                index === 0 ? "w-2/3" : "w-full"
                              }`}
                            />
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="w-5/12"></div>
                    )}

                    {/* For right-side events */}
                    <div className="w-5/12">
                      {!isLeft && (
                        <div className="w-full pl-8 text-left">
                          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-zinc-200">
                            <h3 className="text-2xl font-semibold">
                              {event.title}
                            </h3>
                            <time className="block text-sm text-zinc-400">
                              {event.date}
                            </time>
                            <p className="mt-2">{event.description}</p>
                            {event.image && (
                              <img
                                src={event.image}
                                alt={event.title}
                                className={`mt-4 rounded ${
                                  index === 0 ? "w-2/3" : "w-full"
                                }`}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile: Centered layout; marker hidden */}
                  <div className="md:hidden flex justify-center">
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-zinc-200 w-full max-w-md">
                      <h3 className="text-2xl font-semibold">{event.title}</h3>
                      <time className="block text-sm text-zinc-400">
                        {event.date}
                      </time>
                      <p className="mt-2">{event.description}</p>
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.title}
                          className={`mt-4 rounded ${
                            index === 0 ? "w-2/3" : "w-full"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}




