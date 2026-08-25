import re

filepath = 'src/app/en/pastors-desk/page.tsx'
with open(filepath, 'r') as f:
    content = f.read()

start_marker = '<blockquote className="bg-stone-100'
end_marker = '</ul>\n                </div>\n\n              </div>\n            </div>\n          </article>'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print(f"Markers not found in {filepath}!")
else:
    article_content = content[start_idx:end_idx + len('</ul>\n                </div>')]
    
    # Extract sidebar archive content
    sb_start = '<div className="space-y-3">'
    sb_end = '</div>\n            </div>\n          </aside>'
    
    sb_start_idx = content.find(sb_start)
    sb_end_idx = content.find(sb_end)
    sidebar_content = content[sb_start_idx:sb_end_idx]
    
    new_html = f"""import React from "react";
import {{ Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Coffee }} from "lucide-react";
import Link from "next/link";

import {{ NewsletterForm }} from "@/components/NewsletterForm";
import {{ buildMetadata }} from '@/lib/seo';

export const metadata = buildMetadata({{
  title: "VEC-NL 2026-08 Edition 7 - Pastor's Desk",
  description: "Sharpen the Axe - Ecclesiastes 10:10",
  path: '/en/pastors-desk',
  image: '/sharpen-axe.jpg'
}});

export default function EnglishPastorsDeskPage() {{
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {{/* Header section */}}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{{{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}}}
      >
        <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            From the Pastor's Desk
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200 font-medium">
            Weekly letter and church updates from the Pastor.
          </p>
        </div>
      </section>

      {{/* Main Content Area */}}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {{/* Newsletter Content */}}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 rounded-lg shadow-sm border border-stone-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                {{/* Decorative Elements */}}
                <Coffee className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Coffee className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 7</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Coffee className="w-8 h-8 text-stone-700" />
                  Sharpen the Axe
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/sharpen-axe.jpg" alt="Sharpen the Axe" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

{article_content}
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-stone-300 shrink-0 shadow-sm bg-white">
                       <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 m-0 text-lg">Ps. Jeyakaran Weslyn</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, Vaarthai Evangelical Church Inc</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {{/* Sidebar Area */}}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder-en">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  Archive
                </h3>
{sidebar_content}
                <div className="mt-8 pt-8 border-t border-stone-200">
                  <h4 className="font-bold text-sm text-primary mb-3">Subscribe</h4>
                  <NewsletterForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}}
"""
    
    new_html = new_html.replace('<p className="mt-8 font-bold">Blessings,<br/>Pastor Weslyn<br/>Vaarthai Evangelical Church</p>', '')
    
    with open(filepath, 'w') as f:
        f.write(new_html)
    print("Done English")
