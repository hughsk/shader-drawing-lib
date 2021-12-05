precision mediump float;
uniform vec2 u_resolution;


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float strength = mod(st.y * 10.0, 1.0);

    strength = step(0.5, strength);

    gl_FragColor = vec4(vec3(strength),1.0);
}