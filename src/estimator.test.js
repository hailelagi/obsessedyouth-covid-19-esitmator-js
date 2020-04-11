import covid19ImpactEstimator from './estimator';
/*
revised output data ====>
{
    impact: {}, // your best case estimation
    severeImpact: {}, // your severe case estimation
}
*/

// test case gotten from https://us-central1-buildforsdg.cloudfunctions.net/api/gen/covid-19-scenario/days?fbclid=IwAR1Y8j1GrAFimDGWCuQrM8e3vbGMddZr93a_G4dTQNuxRN_ZAz_ZipX5nDw

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 101,
  reportedCases: 807,
  population: 91256038,
  totalHospitalBeds: 2676943
};


describe('Basic estimation check', () => {
  const estimate = covid19ImpactEstimator(data);
  test('I return something', () => {
    expect(estimate).toBeDefined();
  });
  test('impact of currently infected', () => {
    expect(estimate.impact.currentlyInfected).toBe(8070);
  });
  test('impact of infectionsByRequestedTime', () => {
    expect(estimate.impact.infectionsByRequestedTime).toBeCloseTo(69320772157440);
  });
  test('impact of severeCasesByRequestedTime', () => {
    expect(estimate.impact.severeCasesByRequestedTime).toBeCloseTo(10398115823616);
  });
  test('impact of hospitalBedsByRequestedTime', () => {
    expect(estimate.impact.hospitalBedsByRequestedTime).toBeCloseTo(-10398114886685);
  });
  test('impact of casesForICUByRequestedTime', () => {
    expect(estimate.impact.casesForICUByRequestedTime).toBeCloseTo(3466038607872);
  });
  test('impact of casesForVentilatorsByRequestedTime', () => {
    expect(estimate.impact.casesForVentilatorsByRequestedTime).toBeCloseTo(1386415443148);
  });
  test('impact of dollarsInFlight', () => {
    expect(estimate.impact.dollarsInFlight).toBeCloseTo(24854962857050110);
  });
  // severe case
  test('severe impact of currently infected', () => {
    expect(estimate.severeImpact.currentlyInfected).toBe(40350);
  });
  test('severeImpact of infectionsByRequestedTime', () => {
    expect(estimate.severeImpact.infectionsByRequestedTime).toBeCloseTo(346603860787200);
  });
  test('severeImpact of severeCasesByRequestedTime', () => {
    expect(estimate.severeImpact.severeCasesByRequestedTime).toBeCloseTo(51990579118080);
  });
  test('severeImpact of hospitalBedsByRequestedTime', () => {
    expect(estimate.severeImpact.hospitalBedsByRequestedTime).toBeCloseTo(-51990578181149);
  });
  test('severeImpact of casesForICUByRequestedTime', () => {
    expect(estimate.severeImpact.casesForICUByRequestedTime).toBeCloseTo(17330193039360);
  });
  test('severeImpact of casesForVentilatorsByRequestedTime', () => {
    expect(estimate.severeImpact.casesForVentilatorsByRequestedTime).toBeCloseTo(6932077215744);
  });
  test('severeImpact of dollarsInFlight', () => {
    expect(estimate.severeImpact.dollarsInFlight).toBeCloseTo(124274814285250560);
  });
});
