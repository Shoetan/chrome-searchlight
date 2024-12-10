
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'screen-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
  overlay.style.zIndex = '9999';
  overlay.style.pointerEvents = 'none'; 

  // create spotlight 
  const spotlight = document.createElement('div')
  spotlight.id = 'spotlight-hole';
  spotlight.style.position = 'absolute';
  spotlight.style.width ='80px';
  spotlight.style.height = '80px';
  spotlight.style.borderRadius = '100px';
  spotlight.style.backgroundColor = 'transparent';
  spotlight.style.boxShadow = '0 0 0 9999px rgba(0, 0, 0, 0.2)';
  spotlight.style.display = 'none' ;



  overlay.appendChild(spotlight)

  document.body.appendChild(overlay);

 document.addEventListener('mousemove', (event) => {
    // Position the spotlight
    spotlight.style.left = `${event.clientX- 45}px`;
    spotlight.style.top = `${event.clientY- 45}px`;
    
    // Show the spotlight
    spotlight.style.display = 'block';
  });

  // Hide spotlight when mouse leaves the document
  document.addEventListener('mouseleave', () => {
    spotlight.style.display = 'none';
  });

}

createOverlay()




