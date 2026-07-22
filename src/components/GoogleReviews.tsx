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
    author_name: "John Doe",
    author_initial: "J",
    rating: 5,
    text: "This church has been a wonderful blessing to our family. The Tamil worship is truly uplifting and Pastor Weslyn's messages are deeply rooted in the Word of God.",
    time: "2 months ago",
  },
  {
    id: "2",
    author_name: "Sarah M.",
    author_initial: "S",
    rating: 5,
    text: "A beautiful, welcoming community! We felt at home from the very first Sunday. Great place for fellowship and spiritual growth in Brisbane.",
    time: "4 months ago",
  },
  {
    id: "3",
    author_name: "David Raj",
    author_initial: "D",
    rating: 5,
    text: "Very authentic and loving church family. The Sunday school for kids is excellent and the sermons always challenge me to grow closer to Christ.",
    time: "1 month ago",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
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
              
              <p className="text-stone-600 text-sm leading-relaxed flex-grow">
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
