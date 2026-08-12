import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace("Vaarthai Evangelical Church Inc", "Vaarthai Evangelical Church")
    new_content = new_content.replace("Vaarthai Evangelical Church", "Vaarthai Evangelical Church Inc")
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.json', '.md', '.html', '.css')):
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == "__main__":
    process_directory("/Users/weslyn/.gemini/antigravity/scratch/church-website/src")
