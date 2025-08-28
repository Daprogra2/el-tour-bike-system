// index.js — Entry point for dashboard initialization

import { initTelemetry } from '../telemetry.js';
import { initAudio } from '../audio.mjs';
import { initMap } from '../map.js';
import { initForm } from '../form.js';
import { config } from '../config.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Dashboard initializing...');

  initTelemetry(config.telemetry);
  initAudio(config.audio);
  initMap(config.map);
  initForm(config.form);

  // Optional: Display system diagnostics
  if (config.showDiagnostics) {
    console.log('🧪 Running diagnostics...');
    // diagnostics.init(); // if you build a diagnostics module
  }
});

// telemetry.js
export function initTelemetry(config) {
  console.log('📡 Initializing telemetry with config:', config);
  
  // Simulate incoming telemetry data
  const mockData = {
    speed: 18.2,
    cadence: 82,
    distance: 12.4,
    elapsedTime: '00:42:17',
    signalStrength: 0.75
  };

  // Bind data to UI elements
  document.getElementById('speed').textContent = `${mockData.speed} mph`;
  document.getElementById('cadence').textContent = `${mockData.cadence} rpm`;
  document.getElementById('distance').textContent = `${mockData.distance} mi`;
  document.getElementById('elapsedTime').textContent = mockData.elapsedTime;

  // Update signal strength gauge
  const signalBar = document.getElementById('signalBar');
  signalBar.style.width = `${mockData.signalStrength * 100}%`;

  // Optional flicker effect for low signal
  if (mockData.signalStrength < 0.3) {
    signalBar.classList.add('flicker');
  } else {
    signalBar.classList.remove('flicker');
  }

}

// audio.js
export function initAudio(config) {
  console.log('🎵 Initializing audio with config:', config);
  // Load playlist
  // Setup playback triggers
  // Bind mute/pause controls
}

// map.js
export function initMap(config) {
  console.log('🗺️ Initializing map with config:', config);
  // Initialize map view
  // Bind location and telemetry overlays
}

// form.js
export function initForm(config) {
  console.log('📨 Initializing form with config:', config);
  // Setup form submission
  // Validate input
  // Bind to dashboard messaging
}

