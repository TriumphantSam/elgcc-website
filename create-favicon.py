from PIL import Image

def create_favicon():
    try:
        # Open the image
        img = Image.open('public/images/elgcc-logo1.png')
        
        # Get dimensions
        width, height = img.size
        print(f"Original size: {width}x{height}")
        
        # The logo symbol is on the left. We'll crop a square from the left.
        # We use the height as the size of the square
        # But we might need to be careful if there's padding
        
        # Let's crop the left square
        # box = (left, upper, right, lower)
        crop_size = min(height, width) # Should be height (302)
        
        # Crop the left-most square portion where the symbol usually is
        icon = img.crop((0, 0, crop_size, crop_size))
        
        # Save as favicon.png
        icon.save('public/images/favicon.png')
        print(f"✅ Created favicon.png ({crop_size}x{crop_size})")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_favicon()
