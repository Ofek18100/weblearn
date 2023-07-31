import http.server
import socketserver

class SimpleHTMLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Set the response code to 200 (OK)
        self.send_response(200)
        
        # Set the Content-type header to indicate HTML content
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        # Read the content of the HTML file and send it as the response
        with open('page1.html', 'rb') as file:
            self.wfile.write(file.read())

# Set the port number you want to run the server on
port = 8080

# Create the HTTP server and bind it to the specified port
with socketserver.TCPServer(("127.0.0.1", port), SimpleHTMLHandler) as httpd:
    print(f"Server running on port {port}")
    
    # Start serving indefinitely until interrupted
    httpd.serve_forever()

