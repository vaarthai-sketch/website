import re

# 1. Update English plan-your-visit
with open("src/app/en/plan-your-visit/page.tsx", "r", encoding="utf-8") as f:
    en_plan = f.read()

en_plan = en_plan.replace(
    'Location & Map',
    'Sunday Worship Location'
)
en_plan = en_plan.replace(
    'Our church facility is located at <strong>{churchConfig.contact.address.street}, {churchConfig.contact.address.city}</strong>.',
    'Join us every Sunday at <strong>10:00 AM</strong> for our weekly worship service.<br/><br/>We meet at the <strong>Westside Community Centre</strong>, located at <strong>{churchConfig.contact.address.street}, {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}</strong>.'
)
with open("src/app/en/plan-your-visit/page.tsx", "w", encoding="utf-8") as f:
    f.write(en_plan)

# 2. Update Tamil plan-your-visit
with open("src/app/plan-your-visit/page.tsx", "r", encoding="utf-8") as f:
    ta_plan = f.read()

ta_plan = ta_plan.replace(
    'இடம் & வரைபடம்',
    'ஞாயிறு ஆராதனை இடம்'
)
ta_plan = ta_plan.replace(
    'எங்கள் திருச்சபை <strong>{churchConfig.contact.address.street}, {churchConfig.contact.address.city}</strong> இல் அமைந்துள்ளது.',
    'ஒவ்வொரு ஞாயிற்றுக்கிழமையும் காலை <strong>10:00 மணிக்கு</strong> நடைபெறும் ஆராதனையில் எங்களோடு இணைந்து கொள்ளுங்கள்.<br/><br/>நாங்கள் <strong>Westside Community Centre</strong>, <strong>{churchConfig.contact.address.street}, {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}</strong> என்ற முகவரியில் கூடிவருகிறோம்.'
)
with open("src/app/plan-your-visit/page.tsx", "w", encoding="utf-8") as f:
    f.write(ta_plan)

# 3. Fix Contact Pages to clearly distinguish
with open("src/app/en/contact/page.tsx", "r", encoding="utf-8") as f:
    en_contact = f.read()

en_contact = en_contact.replace(
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Church Address</span>',
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Sunday Worship Venue (10:00 AM)</span>\n                  <p className="text-stone-900 font-medium mb-1">Westside Community Centre</p>'
)
en_contact = en_contact.replace(
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Mailing Address</span>',
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Office & Postal Address</span>'
)
with open("src/app/en/contact/page.tsx", "w", encoding="utf-8") as f:
    f.write(en_contact)

with open("src/app/contact/page.tsx", "r", encoding="utf-8") as f:
    ta_contact = f.read()

ta_contact = ta_contact.replace(
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">திருச்சபையின் முகவரி</span>',
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">ஞாயிறு ஆராதனை இடம் (காலை 10:00 மணி)</span>\n                  <p className="text-stone-900 font-medium mb-1">Westside Community Centre</p>'
)
ta_contact = ta_contact.replace(
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">தபால் முகவரி</span>',
    '<span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">அலுவலகம் மற்றும் தபால் முகவரி (Office & Postal)</span>'
)
with open("src/app/contact/page.tsx", "w", encoding="utf-8") as f:
    f.write(ta_contact)
