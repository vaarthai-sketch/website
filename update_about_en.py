import re

with open("src/app/en/about/page.tsx", "r") as f:
    text = f.read()

story_section_pattern = r'(\{\/\*\s*2\.\s*Our Story Section\s*\*\/\}).*?(?=\{\/\*\s*3\.\s*Our Values Section\s*\*\/}|\<\/section>\n\n\s*\{\/\*)'
# Wait, it's safer to just split by sections. Let's do this directly.

replacement = """{/* 2. Our Story Section */}
      <section id="our-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Roots</span>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-primary">
            Our Story & Calling
          </h2>
          <p className="text-stone-700 leading-relaxed text-base font-semibold">
            We are a vibrant church family rooted in God's Word, united by His grace, and passionate about sharing the love of Jesus across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-stone-700 leading-relaxed text-sm md:text-base">
          {/* Factual Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-primary mb-2 text-lg">When and why we began</h3>
              <p>
                Vaarthai Evangelical Church (VEC) began its Sunday services on 5 July 2026, the first Sunday of July, in Springfield, Queensland. The church grew from Ps Weslyn's years of ministry among Brisbane's Tamil community and a shared vision among families to establish a church centred on God's Word. Our purpose is to help people know Jesus Christ, grow in faith, strengthen families, and share Christ's love with others. Our guiding vision is &ldquo;To hear, To live, To carry&rdquo; the Word (கேட்போம் | வாழ்வோம் | பகிர்வோம்).
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-primary mb-2 text-lg">Who we serve</h3>
              <p>
                VEC serves Tamil-speaking individuals and families across Springfield and the wider Brisbane region, including children, young people, adults, and seniors. People of every background are welcome, including those exploring the Christian faith or looking for a church community.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-2 text-lg">Where we meet & what we do</h3>
              <p>
                We gather for Sunday worship at 10:00 am at the <strong>Westside Community Centre, 389 Old Logan Road, Springfield, QLD 4300</strong>.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Sunday worship, prayer, Bible teaching, and fellowship.</li>
                <li>Children's ministry and youth Bible discussions.</li>
                <li>Midweek prayer gatherings and Bible study.</li>
                <li>Pastoral care, prayer support, and encouragement for individuals and families.</li>
                <li>Sharing sermons, devotional resources, and weekly newsletters in Tamil and English.</li>
              </ul>
            </div>
          </div>

          {/* Devotional Reflection */}
          <div className="space-y-5 bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-100 h-fit">
            <h3 className="font-bold text-primary italic text-lg">&ldquo;Is there not a cause?&rdquo;</h3>
            <p>
              This profound question was asked by young David before stepping out to face Goliath. Even before the armies of Israel and the roaring giant before him, David recognized that God's honor and his people's freedom were worth fighting for. Today, this exact same question rings true for us.
            </p>
            <p>
              We are blessed far more abundantly than David, because our greatest enemy—sin and death—has already been decisively defeated by Jesus Christ on the cross! When David conquered Goliath, the people not only stood victorious, but they went on to claim the spoils of victory. Today, we stand as victors in Christ not by our own works, but because of what He finished for us!
            </p>
            <p>
              The eternal promises found in Scripture are alive, active, and transforming lives today. Our commitment as a church is clear: We will listen to the Word! We will walk by the Word! We will proclaim the Word!
            </p>
            <p className="font-semibold text-primary bg-accent/10 p-5 rounded-xl border border-accent/30 mt-4">
              If you reside in the greater Brisbane area or across Queensland, our deepest desire is for you and your family to walk in Christ's victory. Come join us as we worship God together!
            </p>
          </div>
        </div>
      </section>"""

import re
text = re.sub(r'\{\/\*\s*2\.\s*Our Story Section\s*\*\/\}.*?<\/section>', replacement, text, flags=re.DOTALL)

with open("src/app/en/about/page.tsx", "w") as f:
    f.write(text)
