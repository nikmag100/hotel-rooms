export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center">
        Gallery
      </h2>

      <p className="text-center text-gray-600 mt-4">
        A glimpse of your stay experience
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-12">
        <img
          src="/images/Untitled-design.jpg"
          className="rounded-xl object-cover h-64 w-full"
        />
        <img
          src="/images/image.jpg"
          className="rounded-xl object-cover h-64 w-full"
        />
        <img
          src="/images/image1.jpg"
          className="rounded-xl object-cover h-64 w-full"
        />
        <img
          src="/images/image.jpg"
          className="rounded-xl object-cover h-64 w-full"
        />
        <img
          src="/images/image1.jpg"
          className="rounded-xl object-cover h-64 w-full"
        />
        <img
          src="/images/Untitled-design.jpg"
          className="rounded-xl object-cover h-64 w-full"
        />
      </div>
    </section>
  );
}