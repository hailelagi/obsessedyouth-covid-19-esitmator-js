import covid19ImpactEstimator from './estimator';
/*
output data ====>
{
    data: {}, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {}, // your severe case estimation
}
*/
const data = {
  region: {
    name: 'Africa', avgAge: 19.7, avgDailyIncomeInUSD: 5, avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

describe('Basic estimation check', () => {
  test('I return something', () => {
    expect(covid19ImpactEstimator(data)).toBeDefined();
  });
});
