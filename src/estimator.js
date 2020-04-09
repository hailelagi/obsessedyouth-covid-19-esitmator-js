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
  const rqt = impact.severeCasesByRequestedTime;
  const sRqt = severeImpact.severeCasesByRequestedTime;
  impact.hospitalBedsByRequestedTime = Math.trunc(bedAvailability - rqt);
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(bedAvailability - sRqt);

  // challenge three
  const icuSevere = 0.05 * severeImpact.infectionsByRequestedTime;
  const ventilators = 0.02 * severeImpact.infectionsByRequestedTime;

  impact.casesForICUByRequestedTime = Math.trunc(0.05 * impact.infectionsByRequestedTime);
  severeImpact.casesForICUByRequestedTime = Math.trunc(icuSevere);
  impact.casesForVentilatorsByRequestedTime = Math.trunc(0.02 * impact.infectionsByRequestedTime);
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(ventilators);
  // eslint variable name length fix
  const pop = data.region.avgDailyIncomePopulation;
  const avg = data.region.avgDailyIncomeInUSD;
  const rate = 0;
  if (data.periodType === 'days') rate = data.timeToElapse;
  else if (data.periodType === 'weeks') rate = data.timeToElapse * 7;
  else if (data.periodType === 'months') rate = data.timeToElapse * 30;

  impact.dollarsInFlight = impact.infectionsByRequestedTime * pop * avg * rate;
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime * pop * avg * rate;

  return {
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
