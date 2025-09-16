import { supabase } from './supabaseClient.js';

const cadenceGauge = new Gauge(document.getElementById('cadenceGauge')).setOptions({
  angle: 0.15,
  lineWidth: 0.44,
  radiusScale: 1,
  pointer: { length: 0.6, strokeWidth: 0.035, color: '#ff6f00' },
  limitMax: false,
  limitMin: false,
  colorStart: '#6FADCF',
  colorStop: '#8FC0DA',
  strokeColor: '#E0E0E0',
  generateGradient: true,
  highDpiSupport: true
});

cadenceGauge.maxValue = 120;
cadenceGauge.set(0);

// Fetch cadence from Supabase
async function updateCadence() {
  const { data, error } = await supabase
    .from('telemetry')
    .select('cadence')
    .order('timestamp', { ascending: false })
    .limit(1);

  if (data && data[0]) {
    cadenceGauge.set(data[0].cadence);
  }
}
