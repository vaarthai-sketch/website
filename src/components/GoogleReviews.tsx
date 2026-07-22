import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  author_name: string;
  author_initial: string;
  rating: number;
  text: string;
  time: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author_name: "Ravi Koil Sam",
    author_initial: "R",
    rating: 5,
    text: "I attended Vaarthai Church at inauguration day recently it was blessed experience great people powerful worship Encouraging words Pastor Weslyn is a humble man of God filled with Holy Spirit I pray and wish this Church be blessing to many nations in spreading the Gospel",
    time: "5 days ago",
  },
  {
    id: "2",
    author_name: "Gracy angelin John paul",
    author_initial: "G",
    rating: 5,
    text: "Behold, how good and how pleasant it is for brethren to dwell together in unity! We, as a family, are truly blessed to be part of the Vaarthai family. This church continually nourishes us through God's Word, helping us grow in our walk with Christ. It also makes us feel that we are one family in Christ, united in love, fellowship, and faith.",
    time: "6 days ago",
  },
  {
    id: "3",
    author_name: "Hepsi Priyadharsini",
    author_initial: "H",
    rating: 5,
    text: "A wonderful church filled with the presence of God. The preaching is Bible-based and encourages you to apply scripture in daily life. The warm fellowship here is beautiful — you’re never treated as a stranger. I especially appreciate that the congregation worships in both Tamil and English, which makes it easy for the whole family, from grandparents to kids, to feel included and grow together in Christ-centered faith 💒🙏",
    time: "2 weeks ago",
  },
  {
    id: "4",
    author_name: "Ravikumar Jayaraman",
    author_initial: "R",
    rating: 5,
    text: "Dear Pastor Weslyn,\n\nThe way you preached touched the hearts of so many people. May God continue to bless you, your ministry, and the wonderful work He is doing through you. We pray that the Lord will strengthen and use you even more for His glory.\n\nGod bless you abundantly!",
    time: "3 weeks ago",
  },
  {
    id: "5",
    author_name: "Akila Gnanaraj",
    author_initial: "A",
    rating: 5,
    text: "Truly blessed to be part of Vaarthai Evangelical Church. It's a loving Tamil church where God's Word is faithfully preached, lived, and shared. The warm fellowship, genuine care, and wonderful kids' ministry make it a place where the whole Tamil community can grow in faith and feel at home.🩷",
    time: "2 weeks ago",
  }
];

export const GoogleReviews: React.FC<{ isEn?: boolean }> = ({ isEn = false }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-border overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-sans font-medium text-xl tracking-tight text-stone-700">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="font-semibold text-stone-800 text-lg">Reviews</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-black text-primary mb-4">
            {isEn ? "What our church family says" : "எங்கள் திருச்சபை மக்கள் என்ன சொல்கிறார்கள்"}
          </h2>
          
          <div className="flex items-center justify-center gap-1.5 text-[#FBBC05]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="text-sm text-stone-500 mt-2 font-medium">5.0 / 5.0 Rating</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col break-inside-avoid inline-block w-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xl shrink-0">
                  {review.author_initial}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 leading-tight">{review.author_name}</h3>
                  <p className="text-xs text-stone-500 mt-0.5">{review.time}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center">
                    <span className="font-sans font-bold text-[10px] text-[#4285F4]">G</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-0.5 text-[#FBBC05] mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/search?q=Vaarthai+Evangelical+Church" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-light transition-colors text-sm border-b-2 border-accent/20 hover:border-accent/60 pb-1"
          >
            {isEn ? "Read more reviews on Google" : "கூகுளில் மேலும் பல மதிப்புரைகளைப் படிக்க"}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
