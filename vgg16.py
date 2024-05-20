
import ssl
import urllib.request

def bypass_ssl_certificates():
    ssl._create_default_https_context = ssl._create_unverified_context

bypass_ssl_certificates()


import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image

# Loading the pre-trained VGG16 model
vgg16 = models.vgg16(pretrained=True)

# Remove the classification head (fully connected layers)
model = torch.nn.Sequential(*list(vgg16.features.children()))

# Set the model to evaluation mode
model.eval()

preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

def extract_visual_features(image_path):
    # Load image
    img = Image.open(image_path).convert("RGB")

    # Preprocess the image
    img_tensor = preprocess(img)

    # Add batch dimension (B x C x H x W)
    img_tensor = img_tensor.unsqueeze(0)
    
    # Extract features
    with torch.no_grad():
        features = model(img_tensor)
    
    # Flatten the features
    features = features.view(features.size(0), -1)  # Flatten the tensor
    
    return features