precision mediump float;
uniform vec2 u_resolution;
#define PI 3.1415926535897932384626433832795

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float full_circle = PI * 2.0;
  float angle = atan(st.x - 0.5, st.y - 0.5);
  angle /= full_circle;
  angle += 0.5;
  float strength = angle;

  gl_FragColor = vec4(vec3(strength), 1.0);
}