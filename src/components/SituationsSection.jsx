import { useState } from "react";

export default function SituationsSection() {
  const situations = [
    {
      title: "Fast, unplanned meetings",
      description:
        "When decisions happen quickly and nobody has time to take notes — OneButton captures everything for you.",
      image: "https://picsum.photos/seed/meeting/800/600"
    },
    {
      title: "Brainstorming & product discussions",
      description:
        "Ideas evolve every 10 seconds, people talk over each other, and clarity gets lost. OneButton keeps every insight safe.",
      image: "https://picsum.photos/seed/brainstorm/800/600"
    },
    {
      title: "Hallway conversations",
      description:
        "Some of the most important decisions happen by accident — and usually get forgotten. Not anymore.",
      image: "https://picsum.photos/seed/hallway/800/600"
    },
    {
      title: "Design & dev feedback",
      description:
        "Design reviews, technical feedback, change requests… it's impossible to remember everything without friction.",
      image: "https://picsum.photos/seed/feedback/800/600"
    },
    {
      title: "Unexpected client calls",
      description:
        "Clients often share key information when you're not ready. Just tap and it's all saved.",
      image: "https://picsum.photos/seed/phonecall/800/600"
    },
    {
      title: "Quick team alignments",
      description:
        "Five minutes of alignment often hide ten tasks and three decisions. OneButton keeps them crystal clear.",
      image: "https://picsum.photos/seed/team/800/600"
    },
    {
      title: "User interviews",
      description:
        "Every word from users is precious. Capture all insights effortlessly.",
      image: "https://picsum.photos/seed/interview/800/600"
    },
    {
      title: "When someone explains something important",
      description:
        "Tech, business, onboarding, mentoring — if it's worth remembering, it's worth recording.",
      image: "https://picsum.photos/seed/explain/800/600"
    },
    {
      title: "Personal conversations you don't want to forget",
      description:
        "Thoughts, reflections, ideas — when it matters, OneButton is your memory.",
      image: "https://picsum.photos/seed/conversation/800/600"
    },
    {
      title: "Project updates & status checks",
      description:
        "Quick syncs, blockers, next steps — everything gets documented without slowing you down.",
      image: "https://picsum.photos/seed/project/800/600"
    }
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="situations-section">
      <div className="section-container">
        <h2 className="section-title">It works exactly when you need it.</h2>
        <p className="situations-subtitle">
          Meetings. Ideas. Feedback. Decisions. Every important moment stays clear.
        </p>
        <div className="situations-grid">
          {situations.map((situation, index) => (
            <div
              key={index}
              className={`situation-card ${flippedIndex === index ? 'flipped' : ''}`}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <div className="situation-card-inner">
                <div className="situation-card-front">
                  <div className="situation-image">
                    <img src={situation.image} alt={situation.title} />
                  </div>
                  <h3 className="situation-title">{situation.title}</h3>
                </div>
                <div className="situation-card-back">
                  <div className="situation-back-content">
                    <h3 className="situation-title">{situation.title}</h3>
                    <p className="situation-description">{situation.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
