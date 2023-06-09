# /api/sms.py

from http.server import BaseHTTPRequestHandler
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from twilio.twiml.messaging_response import MessagingResponse
from urllib.parse import parse_qs

class handler(BaseHTTPRequestHandler):
    
    model = GPT2LMHeadModel.from_pretrained("gpt2")
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        post_data = parse_qs(post_data.decode())
        
        message_body = post_data.get('Body')[0]

        # Use Hugging Face model to generate a response
        inputs = self.tokenizer.encode(message_body, return_tensors="pt")
        outputs = self.model.generate(inputs, max_length=150, num_return_sequences=1)
        response_text = self.tokenizer.decode(outputs[0])
        
        # Start our TwiML response
        resp = MessagingResponse()
        resp.message(response_text)
        
        self.send_response(200)
        self.send_header('Content-type', 'text/xml')
        self.end_headers()
        self.wfile.write(str(resp).encode())
        return
