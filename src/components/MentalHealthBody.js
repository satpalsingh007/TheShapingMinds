import React from "react";

const MentalHealthBody = () => {
  return (
    <div className="bg-[#fbf7f0] p-12">
      <header className="text-center mb-12">
        <h1 className="text-[#045346] text-5xl font-bold mb-4">Nurturing Mental Wellness</h1>
        <p className="text-[#d49f11] text-lg">
          Embrace the journey to a healthier mind and a happier life
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-[#e5f0e6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#045346] text-2xl font-semibold mb-4">Understanding Mental Health</h2>
          <p className="text-[#045346] mb-4">
            Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Understanding Mental Health"
            className="rounded-lg mb-4"
          />
        </div>

        <div className="bg-[#e5f0e6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#045346] text-2xl font-semibold mb-4">Self-Care Tips</h2>
          <p className="text-[#045346] mb-4">
            Prioritize yourself with these self-care strategies:
            <ul className="list-disc list-inside mt-2">
              <li>Practice mindfulness and meditation.</li>
              <li>Engage in regular physical activity.</li>
              <li>Connect with friends and loved ones.</li>
              <li>Limit social media exposure.</li>
              <li>Seek professional help when needed.</li>
            </ul>
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Self-Care Tips"
            className="rounded-lg mb-4"
          />
        </div>

        <div className="bg-[#e5f0e6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#045346] text-2xl font-semibold mb-4">The Importance of Routine</h2>
          <p className="text-[#045346] mb-4">
            Establishing a daily routine can provide structure and a sense of normalcy in times of stress.
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Routine"
            className="rounded-lg mb-4"
          />
        </div>

        <div className="bg-[#e5f0e6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#045346] text-2xl font-semibold mb-4">Healthy Coping Mechanisms</h2>
          <p className="text-[#045346] mb-4">
            Finding healthy ways to cope with stress is vital. Here are a few:
            <ul className="list-disc list-inside mt-2">
              <li>Practice deep breathing exercises.</li>
              <li>Journaling your thoughts and feelings.</li>
              <li>Engaging in creative activities like painting or music.</li>
            </ul>
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Coping Mechanisms"
            className="rounded-lg mb-4"
          />
        </div>

        <div className="bg-[#e5f0e6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#045346] text-2xl font-semibold mb-4">Mindfulness and Meditation</h2>
          <p className="text-[#045346] mb-4">
            Mindfulness and meditation practices can help reduce anxiety and improve overall mental health.
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Mindfulness"
            className="rounded-lg mb-4"
          />
        </div>

        <div className="bg-[#e5f0e6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#045346] text-2xl font-semibold mb-4">Seeking Professional Help</h2>
          <p className="text-[#045346] mb-4">
            Don't hesitate to reach out to a mental health professional if you're feeling overwhelmed.
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Professional Help"
            className="rounded-lg mb-4"
          />
        </div>
      </section>

      <footer className="text-center mt-12">
        <p className="text-[#045346] mb-4">
          Your mental health matters! Take the time to nurture it every day.
        </p>
        <button className="mt-4 px-8 py-3 bg-[#d49f11] text-[#fffefc] rounded-lg shadow-lg hover:bg-[#cda40f] transition duration-200">
          Discover More Resources
        </button>
      </footer>
    </div>
  );
};

export default MentalHealthBody;
