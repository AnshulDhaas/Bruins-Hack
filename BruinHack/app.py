from flask import Flask, request, jsonify, render_template
from PIL import Image
from pathlib import Path
import torch
from torchvision.transforms import functional as F
from glob import glob
import os

import logging
logging.getLogger("yolov5").setLevel(logging.ERROR)

app = Flask(__name__)

UPLOADS_FOLDER = 'uploads'
app.config['UPLOADS_FOLDER'] = UPLOADS_FOLDER

model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
model.eval()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded!'})

    uploaded_file = request.files['image']
    
    if uploaded_file.filename == '':
        return jsonify({'error': 'No image selected!'})

    image_path = os.path.join(app.config['UPLOADS_FOLDER'], uploaded_file.filename)
    uploaded_file.save(image_path)

    img = Image.open(image_path)

    results = model(img)

    annotated_image_path = image_path.replace('uploads', 'static')
    results.save(annotated_image_path)

    return jsonify({'annotated_image_path': annotated_image_path})

if __name__ == '__main__':
    app.run(debug=True)
