export const AppState = {
  openModal: false,
  isMoving: false,
  isMouseInsideCircleOne: false,
  isMouseInsideCircleTwo: false,
  isMouseInsideCircleThree: false,
  colorOne: 'rgb(29,103, 189)',
  colorTwo: 'rgb(29,103, 189)',
  triOne: [
    { x: 150, y: 50 },
    { x: 450, y: 250 },
    { x: 100, y: 450 },
  ],
  triTwo: [
    { x: 750, y: 150 },
    { x: 1100, y: 100 },
    { x: 1000, y: 450 },
  ],
  nodeOne: {
    A: 'A',
    B: 'B',
    C: 'C',
  },
  nodeTwo: {
    A: 'D',
    B: 'E',
    C: 'F',
  },
  triOneStroke: '#a05050',
  triTwoStroke: 'rgb(0, 150, 136)',
};

export default AppState;
