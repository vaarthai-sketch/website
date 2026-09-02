# -*- coding: utf-8 -*-
with open('update_sidebars.py', 'r') as f:
    c = f.read()
c = c.replace("sidebar + '\\n          </aside>'", "sidebar + '\\n            </div>\\n          </aside>'")
c = c.replace("r'<div className=\"space-y-3\">.*?</div>\s*</aside>'", "r'<div className=\"space-y-3\">.*?</div>\s*</div>\s*</aside>'")
with open('update_sidebars.py', 'w') as f:
    f.write(c)
