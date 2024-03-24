from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return open('index.html').read()

@app.route('/upload', methods=['POST'])
def upload():
    uploaded_file = request.files['image']
    if uploaded_file.filename != '':
        uploaded_file.save(uploaded_file.filename)  # Save the uploaded image to the server
        return 'Image uploaded successfully!'
    else:
        return 'No image selected!'

if __name__ == '__main__':
    app.run(debug=True)


app = Flask(__name__)

@app.route('/')
def index():
    return open('index.html').read()

@app.route('/upload', methods=['POST'])
def upload():
    uploaded_file = request.files['image']
    if uploaded_file.filename != '':
        uploaded_file.save(uploaded_file.filename)  # Save the uploaded image to the server
        return 'Image uploaded successfully!'
    else:
        return 'No image selected!'

if __name__ == '__main__':
    app.run(debug=True)