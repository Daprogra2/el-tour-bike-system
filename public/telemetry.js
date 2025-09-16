// telemetry.js
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('[telemetry] Supabase client initialized');
// telemetry.js

const opts = {
  angle: 0.15,
  lineWidth: 0.1,
  radiusScale: 1,
  pointer: {
    length: 0.6,
    strokeWidth: 0.035,
    color: '#ff6f00'
  },
  limitMax: false,
  limitMin: false,
  colorStart: '#00ff00',
  colorStop: '#ff0000',
  strokeColor: '#E0E0E0',
  generateGradient: true,
  highDpiSupport: true
};

const cadenceTarget = document.getElementById('cadenceGauge');
const gauge = new Donut(cadenceTarget).setOptions(opts);
gauge.maxValue = 150;
gauge.set(0); // Initial value

const speedTarget = document.getElementById('speedGauge');
const gauge = new Donut(speedTarget).setOptions(opts);
gauge.maxValue = 40;
gauge.set(0); // Initial value

// Simulate cadence updates
setInterval(() => {
  const simulatedCadence = Math.floor(Math.random() * 150);
  gauge.set(simulatedCadence);
}, 2000);
