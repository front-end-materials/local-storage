navigator.storage.estimate().then(function(estimate) {
  document.getElementById("percent").innerHTML =
      (estimate.usage / estimate.quota * 100).toFixed(8);
      // usageDetails: ${estimate.usageDetails.indexedDB}s
});

function showEstimatedQuota() {
  return navigator.storage && navigator.storage.estimate ?
    navigator.storage.estimate() :
    undefined;
}

console.log(showEstimatedQuota());
