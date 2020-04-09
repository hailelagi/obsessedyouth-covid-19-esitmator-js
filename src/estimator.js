const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  let time;

  // challenge one
  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;

  // period estimations
  if (data.periodType === 'days') time = 2 ** Math.trunc(data.timeToElapse / 3);
  else if (data.periodType === 'weeks') time = 2 ** Math.trunc((data.timeToElapse * 7) / 3);
  else if (data.periodType === 'months') time = 2 ** Math.trunc((data.timeToElapse * 30) / 3);

  impact.infectionsByRequestedTime = impact.currentlyInfected * time;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * time;

  // challenge two
  impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;

  const bedAvailability = 0.35 * data.totalHospitalBeds;
  // eslint variable name length fix, guideline variables are extremely long
  const bed = bedAvailability;
  impact.hospitalBedsByRequestedTime = bedAvailability - impact.severeCasesByRequestedTime;
  severeImpact.hospitalBedsByRequestedTime = bed - severeImpact.severeCasesByRequestedTime;

  // challenge three
  impact.casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
  severeImpact.casesForICUByRequestedTime = 0.05 * severeImpact.infectionsByRequestedTime;
  impact.casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;
  severeImpact.casesForVentilatorsByRequestedTime = 0.02 * severeImpact.infectionsByRequestedTime;

  // eslint variable name length fix
  const pop = data.region.avgDailyIncomePopulation;
  const avg = data.region.avgDailyIncomeInUSD;

  if (data.periodType === 'days') time = data.timeToElapse;
  else if (data.periodType === 'weeks') time = data.timeToElapse * 7;
  else if (data.periodType === 'months') time = data.timeToElapse * 30;

  impact.dollarsInFlight = impact.infectionsByRequestedTime * pop * avg * time;
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime * pop * avg * time;

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
