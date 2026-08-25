import re

def rewrite(filepath, is_en):
    with open(filepath, 'r') as f:
        content = f.read()

    # Extract the main article content!
    # It is between <h3 className="text-xl font-bold text-stone-800">Sharpen the Axe</h3> and <div className="mt-6 pt-6 border-t border-stone-200
    
    # Wait, the title in Edition 7 is:
    # <h3 className="text-xl font-bold text-stone-800">Sharpen the Axe</h3>
    # Or something similar.
    # Let's find the start of the article content.
    
    start_marker = '<h3 className="text-xl font-bold text-stone-800">'
    end_marker = '<div className="mt-6 pt-6 border-t border-stone-200'
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    
    if start_idx == -1 or end_idx == -1:
        print(f"Markers not found in {filepath}!")
        return

    article_content = content[start_idx:end_idx]
    
    # Now extract the sidebar!
    sidebar_start = '<div className="space-y-3">'
    sidebar_end = '<div className="mt-8 pt-8 border-t border-stone-200">'
    
    sb_start_idx = content.find(sidebar_start)
    sb_end_idx = content.find(sidebar_end)
    
    if sb_start_idx == -1 or sb_end_idx == -1:
        print(f"Sidebar markers not found in {filepath}!")
        return
        
    sidebar_content = content[sb_start_idx:sb_end_idx]
    
    # Now build the new file!
    title_text = "Sharpen the Axe" if is_en else "கோடரியைக் கூர்மையாக்குங்கள்"
    month_text = "August" if is_en else "ஆகஸ்ட்"
    
    # The song player should be included in the article content. It is currently at the bottom.
    
    # Let's read the top imports from the current file
    imports_end = content.find('export const metadata')
    imports = content[:imports_end]
    
    metadata = f"""export const metadata = buildMetadata({{
  title: "VEC-NL 2026-08 Edition 7 - போதகர் மேசையிலிருந்து",
  description: "{title_text} - Ecclesiastes 10:10",
  path: '{'/en' if is_en else ''}/pastors-desk',
  image: '/sharpen-axe.jpg'
}});
"""

    func_name = "EnglishPastorsDeskPage" if is_en else "PastorsDeskPage"
    
    new_content = imports + metadata + f"""
export default function {func_name}() {{
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
            { "From the Pastor's Desk" if is_en else "போதகர் மேசையிலிருந்து" }
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200 font-medium">
            { "Weekly letter and church updates from the Pastor." if is_en else "போதகரின் வாராந்திர கடிதம் மற்றும் சபையின் செய்திகள்." }
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
                  {title_text}
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/sharpen-axe.jpg" alt="{title_text}" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

""" + article_content.replace(start_marker + title_text + '</h3>', '') + f"""
                  
                  <p className="font-medium text-stone-900 mt-6">
                    { "May God bless you!" if is_en else "தேவன் உங்களை ஆசீர்வதிப்பாராக!" }
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    { "Pastor Weslyn" if is_en else "போதகர் வெஸ்லின்" }
                  </p>
                  
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
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder-{"en" if is_en else "ta"}">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  { "Archive" if is_en else "பழைய கடிதங்கள் (Archive)" }
                </h3>
""" + sidebar_content + f"""
                <div className="mt-8 pt-8 border-t border-stone-200">
                  <h4 className="font-bold text-sm text-primary mb-3">{ "Subscribe" if is_en else "Newsletter பதிவு (Subscribe)" }</h4>
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
    with open(filepath, 'w') as f:
        f.write(new_content)

rewrite('src/app/pastors-desk/page.tsx', False)
rewrite('src/app/en/pastors-desk/page.tsx', True)

print("Rewritten!")
