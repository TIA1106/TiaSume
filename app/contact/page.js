export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 px-6 bg-[#f4f1fb] text-[#3f2a25]">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-[#5e548e]">📬 Contact Us</h1>
        <p className="text-sm mb-6 text-gray-700">
          We'd love to hear your feedback, suggestions, or questions!
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your message"
            className="w-full border p-2 rounded h-32"
          />
          <button
            type="submit"
            className="bg-[#9f86c0] hover:bg-[#be95c4] text-white px-4 py-2 rounded font-semibold"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
