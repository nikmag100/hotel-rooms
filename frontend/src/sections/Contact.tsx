export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center">
        Contact Us
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Get in touch for availability & booking
      </p>

      <div className="max-w-2xl mx-auto mt-12 bg-white shadow-xl rounded-2xl p-8">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}