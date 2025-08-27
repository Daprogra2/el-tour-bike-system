from dotenv import load_dotenv
import requests
import os

load_dotenv()

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')

def push_telemetry(data):
    headers = {
        'apikey': SUPABASE_KEY,
        'Authorization': f'Bearer {SUPABASE_KEY}',
        'Content-Type': 'application/json'
    }
    response = requests.post(f'{SUPABASE_URL}/rest/v1/telemetry', headers=headers, json=data)
    print('Push result:', response.status_code, response.text)