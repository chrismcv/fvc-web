export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary">Hello</h2>
            <div className="space-y-4 text-lg text-text-light leading-relaxed">
              <p>
                Faith Vineyard is a new church in Comber, County Down! We love this part of the world and we are so
                excited to be on this adventure!
              </p>
              <p>
                Whether you have lots of questions about Jesus or have been following Him for a long time you are so
                welcome to come and join us.
              </p>
              <p>Here's a video to share our journey and our passion to see God moving in Comber and beyond.</p>
            </div>
          </div>

          {/* Video Column */}
          <div className="relative w-full">
            <div className="aspect-video w-full bg-warm-gray rounded-lg overflow-hidden shadow-lg">
              {/* Vimeo Embed Placeholder */}
             <iframe title="vimeo-player" src="https://player.vimeo.com/video/1122997990?h=7d3d25d028" width="640" height="360" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowFullScreen></iframe>
              {/* 
                To add your Vimeo video, replace the placeholder div above with:
                <iframe
                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Faith Vineyard Journey"
                ></iframe>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
