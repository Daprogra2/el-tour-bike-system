// telemetry.js

import { supabase } from './supabaseClient.js';
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';


async function fetchTelemetry() {
  const { data, error } = await supabase.from('telemetry').select('*').order('timestamp', { ascending: false }).limit(1);
  if (error) console.error('Telemetry fetch error:', error);
  return data?.[0];
}

function updateSpeedGauge(speed) {
  const gauge = document.getElementById('speedGauge');
  const fill = Math.min(speed / 40, 1); // Normalize to 0–1 range
  gauge.style.transform = `scaleX(${fill})`;
}

function updateCircularGauge(id, value, maxValue) {
  const gauge = document.getElementById(id);
  const needle = gauge.querySelector('.needle');
  const angle = Math.min((value / maxValue) * 180, 180);

  needle.style.transition = 'transform 0.3s ease-out';
  needle.style.transform = `rotate(${angle + 5}deg) translate(-50%, -100%)`;

  setTimeout(() => {
    needle.style.transition = 'transform 0.2s ease-in';
    needle.style.transform = `rotate(${angle}deg) translate(-50%, -100%)`;
  }, 300);
}