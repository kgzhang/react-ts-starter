import { css } from 'styled-components';


export const transitions = css`
    --ease-linear: linear;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);



    --duration-75: 75ms;
    --duration-100: 100ms;
    --duration-150: 150ms;
    --duration-200: 200ms;
    --duration-300: 300ms;
    --duration-500: 500ms;
    --duration-700: 700ms;
    --duration-1000: 1000ms;


`;


// Animation transition 可以用 styled-components的 keyframe来做
export default transitions;