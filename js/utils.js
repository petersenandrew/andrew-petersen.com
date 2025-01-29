calculateJobLengths();

function calculateJobLengths() {
  const currentJobs = document.querySelectorAll('.current-job-length');
  currentJobs.forEach(currentJob => currentJob.textContent = dateDifference(currentJob.getAttribute('startDate')));
}


function dateDifference(date) {
  const startDate = new Date(date);
  const now = new Date();
  // Get total months from start, add 1 to include the current month
  const totalMonths = ((now.getFullYear() - startDate.getFullYear()) * 12) + now.getMonth() - startDate.getMonth() + 1;
  let years = Math.floor(totalMonths / 12);
  let months = totalMonths % 12;
  if(years > 1) {
    years = years + ' yrs ';
  } else if(years === 1) {
    years = years + ' yr ';
  } else {
    years = '';
  }
  if(months !== 1) {
    months = months + ' mos';
  } else {
    months = months + ' mo';
  }

  return years + months;
}