// Evento para generar el meme al hacer clic en el botón "Generar Meme"
document.getElementById('generateMeme').addEventListener('click', function() {
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    const imageInput = document.getElementById('imageInput');
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    
    // Verifica si se ha seleccionado un archivo de imagen
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        
        // Carga la imagen y dibuja el meme en el canvas
        reader.onload = function(event) {
            const img = new Image();
            
            img.onload = function() {
                // Configura el tamaño del canvas igual al de la imagen
                canvas.width = img.width;
                canvas.height = img.height;
                
                // Dibuja la imagen en el canvas
                ctx.drawImage(img, 0, 0);
                
                // Configura el estilo del texto
                ctx.font = '50px Impact';
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.textAlign = 'center';
                
                // Dibuja el texto superior
                ctx.fillText(topText, canvas.width / 2, 60);
                ctx.strokeText(topText, canvas.width / 2, 60);
                
                // Dibuja el texto inferior
                ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
                ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
            }
            
            img.src = event.target.result;
        }
        
        reader.readAsDataURL(imageInput.files[0]);
    }
});

// Evento para descargar el meme generado al hacer clic en el botón "Descargar Meme"
document.getElementById('downloadMeme').addEventListener('click', function() {
    const canvas = document.getElementById('memeCanvas');
    const link = document.createElement('a');
    
    // Configura el enlace para descargar la imagen del canvas
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
