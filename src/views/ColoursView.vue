<template>
  <div id="colours-main">
    <div id="colours-wrapper">
      <div class="adx"><h3>Colour Palettes</h3></div>
      <p>Click on any of the following palette swatches to copy the HEX code for use elsewhere.</p>
      <div v-for="palette in colourPalettes" class="mb-6">
        <h4 class="adx-markup-label">{{ palette.name }} Colours</h4>
        <div class="colour-samples w-full">
          <div v-for="colour in palette.colours">
            <div class="adx"> <h2 class="mt-6">{{ colour  }}</h2></div>
            <div class="colour-items">
            <div v-for="item in palette.items" class="colour-swatch" @click="copyCode(getHexCode(colour,item))">
 
              <div class="colour-item" :class="getColourClass(colour, item)">
                <p>
                  {{getHexCode(colour, item) }}
                   <i v-if="!copied" class="far fa-clipboard"></i>
                   <i v-if="copied == getHexCode(colour,item)" :class="copied == getHexCode(colour,item) ? 'animate-bounce' : ''" class="far fa-clipboard-check"></i></p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { nextTick, computed, ref } from "vue";

let copied = ref(false)

//get the matching hex code for the colour and item combo
function getHexCode(colour, item) {
  if(item){
    if(typeof item === "number"){
      return ''
    } else {
      return hexCodes.value[colour][item];
    }
} else {
  return hexCodes.value[colour]['base'];
  }
}

const colourPalettes = [
  {
    name: "Brand",
    colours: ["brand-red", "brand-midblue", "brand-darkblue", "brand-gold"],
    items: [
      "",
      "tint",
      "lightest",
      "lighter",
      "light",
      "dark",
      "darker",
      "darkest",
    ],
  },
  {
    name: "Learning Design",
    colours: ["ld1", "ld2", "ld3", "ld4", "ld5", "ld6", "ld7"],
    items: [
    "",
      "tint",
      "lightest",
      "lighter",
      "light",

      "dark",
      "darker",
      "darkest",
    ],
  },
  {
    name: "UI",
    colours: ["neutral", "positive", "negative", "warning", "information"],
    items: [
    "",
      "tint",
      "lightest",
      "lighter",
      "light",
     
      "dark",
      "darker",
      "darkest",
    ],
  },
];

const hexCodes = ref({
  "brand-red": {
    "tint": "#fcebeb",
    "lightest": "#fbe6e6",
    "lighter": "#ff8888",
    "light": "#ff5555", 
    "base": "#d40000",
    "dark": "#940000",
    "darker": "#7f0000",
    "darkest": "#6a0000",
  },
  "brand-midblue": {
    "tint": "#ebf2f7",
    "lightest": "#99bdd7",
    "lighter": "#669cc4",
    "light": "#337bb0",
    "base": "#005a9c",
    "dark": "#003f6d",
    "darker": "#00365e",
    "darkest": "#002d4e",
  },
  "brand-darkblue": {
    "tint": "#eceeef",
    "lightest": "#9fa8ae",
    "lighter": "#707c86",
    "light": "#40515d",
    "base": "#102535",
    "dark": "#0b1a25",
    "darker": "#0a1620",
    "darkest": "#08131b",
  },
  "brand-gold": {
    "tint": "#f9f5eb",
    "lightest": "#f7f3e6",
    "lighter": "#f9d875",
    "light": "#f7ca44",
    "base": "#b38808",
    "dark": "#7d5f06",
    "darker": "#6b5205",
    "darkest": "#5a4404",
  },
  "ld1": {
    "tint": "#f1fbfe",
    "lightest": "#edfafe",
    "lighter": "#f1fbfe",
    "light": "#c2ecfa",
    "base": "#4cc9f0",
    "dark": "#358da8",
    "darker": "#2e7990",
    "darkest": "#266578",
  },
  "ld2": {
    "tint": "#fff3f3",
    "lightest": "#fdc2c3",
    "lighter": "#fca4a5",
    "light": "#fb8587",
    "base": "#fa6769",
    "dark": "#af484a",
    "darker": "#963e3f",
    "darkest": "#7d3435",
  },
  "ld3": {
    "tint": "#fef7ed",
    "lightest": "#fef5e9",
    "lighter": "#fde7cb",
    "light": "#fcd09a",
    "base": "#f8961e",
    "dark": "#ae6915",
    "darker": "#955a12",
    "darkest": "#7c4b0f",
  },
  "ld4": { 
    "tint": "#fffbf1",
    "lightest": "#fde9b9",
    "lighter": "#fbdd95",
    "light": "#fad272",
    "base": "#f9c74f",
    "dark": "#ae8b37",
    "darker": "#95772f",
    "darkest": "#7d6428",
  },
  "ld5": {
    "tint": "#f6faf3",
    "lightest": "#f4f9f0",
    "lighter": "#eef5e9",
    "light": "#d3e5c5",
    "base": "#90be6d",
    "dark": "#65854c",
    "darker": "#567241",
    "darkest": "#485f37",
  },
  "ld6": {
    "tint": "#f0f8f6",
    "lightest": "#ecf7f3",
    "lighter": "#bbe4d8",
    "light": "#97d6c3",
    "base": "#43aa8b",
    "dark": "#2f7761",
    "darker": "#286653",
    "darkest": "#225546",
  },
  "ld7": {
    "tint": "#f9f4f9",
    "lightest": "#dec7e1",
    "lighter": "#ccacd2",
    "light": "#b793c4",
    "base": "#a279b5",
    "dark": "#8653a2",
    "darker": "#764594",
    "darkest": "#633b7e",
  },
  "neutral": {
    "tint": "#f9fafa",
    "lightest": "#e3e6e8",
    "lighter": "#d5d9dd",
    "light": "#c7cdd1",
    "base": "#B9C0C6",
    "dark": "#82868b",
    "darker": "#6f7377",
    "darkest": "#5d6063",
  },
  "positive": {
    "tint": "#edf7f1",
    "lightest": "#e9f5ed",
    "lighter": "#87e4ab",
    "light": "#5dda8e",
    "base": "#22964f",
    "dark": "#186937",
    "darker": "#145a2f",
    "darkest": "#114b28",
  },
  "negative": {
    "tint": "#fcefee",
    "lightest": "#fbebea",
    "lighter": "#f2c2c0",
    "light": "#ea9996",
    "base": "#d4322c",
    "dark": "#94231f",
    "darker": "#7f1e1a",
    "darkest": "#6a1916",
  },
  "warning": {
    "tint": "#fff8ed",
    "lightest": "#fff6e9",
    "lighter": "#ffeed6",
    "light": "#ffd9a3",
    "base": "#ffa423",
    "dark": "#b37319",
    "darker": "#996215",
    "darkest": "#805212",
  },
  "information": {
    "tint": "#ebeef6",
    "lightest": "#e6eaf3",
    "lighter": "#497af8",
    "light": "#1856f7",
    "base": "#052A8A",
    "dark": "#041d61",
    "darker": "#031953",
    "darkest": "#031545",
  },
});

function getColourClass(colour, item) {
  const blockClass = "colour-block"
  return `${blockClass} adx-bg-${colour}${
    item ? (typeof item === "number" ? `-trans-${item}` : `-${item}`) : ""
  }`;
}

function getColourDisplay(colour, item) {
  return item
    ? typeof item === "number"
      ? `Transparent ${item}`
      : item
    : `${colour}`;
}

function copyCode(code){
  navigator.clipboard.writeText(code)
  copied.value = code
  setTimeout(() => {
    copied.value = null
  }, 2000);
}

</script>

<style scoped>

h2 {
  text-transform: capitalize;
}
.colour-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.colour-swatch {
  height: 100px;
  width: 130px;

  margin: .75em;
  border-radius: 0.25em;
  transition: all 0.25s ease-in-out;
}

.colour-item {
  width: 100%;
  height: 100%;
  border-radius: 0.25em;
  vertical-align: bottom;
}

.colour-item p {
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  opacity: 0.3;
  margin-top: 50px;
}

/* first colour-swatch in each colour-items should be on it's own line */
.colour-items .colour-swatch:first-child {
  margin-bottom: 1em;
  height: 150px;
  min-width: 220px;
}

.colour-items .colour-swatch:first-child p {
  font-size: 1.6em !important;
  margin-top: 85px;
}

.colour-swatch:hover{
  box-shadow: 0 2px 4px 2px #ddd;
  transform: translateY(-5px);
  cursor:pointer;
}

.colour-swatch:active {
  box-shadow: 0 0px 0px 0px #ccc;
  transform: translateY(0px);
  cursor:pointer;
}

.colour-swatch i {
  opacity: 0;
  transition: all 0.25s ease-in-out;
}

.colour-swatch:hover i {
  opacity: 1;
}

</style>