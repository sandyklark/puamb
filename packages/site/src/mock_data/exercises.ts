export type ExerciseMeasurementUnit = {
  title: string;
  shortName: string;
}

export type Exercise = {
  id: string;
  title: string;
  measurementUnit: ExerciseMeasurementUnit;
  pointsPerUnit: number;
}

export const Kilometer: ExerciseMeasurementUnit = {
  title: 'Kilometer',
  shortName: 'Km',
};

export const Hour: ExerciseMeasurementUnit = {
  title: 'Hour',
  shortName: 'Hr'
}

export const Minute: ExerciseMeasurementUnit = {
  title: 'Minute',
  shortName: 'Min'
}

export const Repetition: ExerciseMeasurementUnit = {
  title: 'Repetition',
  shortName: 'Rep'
}

export const Session: ExerciseMeasurementUnit = {
  title: 'Session',
  shortName: 'Sesh'
}

export const exercises: Exercise[] = [
  {
    id: 'cycling',
    title: 'Cycling',
    pointsPerUnit: 4,
    measurementUnit: Kilometer
  },
  {
    id: 'running',
    title: 'Running',
    pointsPerUnit: 8,
    measurementUnit: Kilometer
  },
  {
    id: 'yoga',
    title: 'Yoga',
    pointsPerUnit: 30,
    measurementUnit: Session
  },
  {
    id: 'swimming',
    title: 'Swimming',
    pointsPerUnit: 20,
    measurementUnit: Hour
  },
  {
    id: 'climbing',
    title: 'Climbing',
    pointsPerUnit: 25,
    measurementUnit: Hour
  },
  {
    id: 'push_up',
    title: 'Push-ups',
    pointsPerUnit: 1,
    measurementUnit: Repetition
  },
  {
    id: 'chin_up',
    title: 'Chin-ups',
    pointsPerUnit: 2,
    measurementUnit: Repetition
  },
  {
    id: 'squat',
    title: 'Squats',
    pointsPerUnit: 0.5,
    measurementUnit: Repetition
  },
  {
    id: 'sit_up',
    title: 'Sit-ups',
    pointsPerUnit: 1,
    measurementUnit: Repetition
  },
  {
    id: 'plank',
    title: 'Planking',
    pointsPerUnit: 10,
    measurementUnit: Minute
  }
];
