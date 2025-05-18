const output = document.getElementById('output')

// Put a click listener on button
document.getElementById('input-btn').addEventListener('click', fetchAndRenderColorScheme)

function fetchAndRenderColorScheme() {
   // get selected color
   const seedColor = document.getElementById('color-input').value.substring(1)
   // get selected color scheme option
   const mode = document.getElementById('input-option').value.toLowerCase()

   fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
      .then((response) => response.json())
      .then((data) => {
         console.log(data)
         let html = ''
         data.colors.forEach((color) => {
            html += `
               <div class="output__color" tabindex="0">
                  <div id=${color.hex.value} class="color" data-tooltip="Copied!" style="background-color:${color.hex.value}">${color.name.value}</div>
                  <p id=${color.hex.value} class="hex hover-effect" data-tooltip="Copied!">${color.hex.value}</p>
               </div>
            `
         })
      output.innerHTML = html;
   })
}
fetchAndRenderColorScheme()