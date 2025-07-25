function loglog(x) {
  return Math.log(Math.log(x));
}

function predictGap() {
  const input = document.getElementById("inputE").value;
  const E = BigInt(input);

  if (E % 2n !== 0n || E <= 2n) {
    alert("Please enter a valid even number greater than 2.");
    return;
  }

  // Convert BigInt to float for logarithmic calculations
  const E_float = parseFloat(E.toString());

  if (E_float <= 0 || isNaN(E_float)) {
    alert("Invalid number.");
    return;
  }

  // Base formula: δ(E) = √E · loglog(E) / log(E)
  const sqrtE = Math.sqrt(E_float);
  const logE = Math.log(E_float);
  const loglogE = loglog(E_float);

  const delta_pred = sqrtE * (loglogE / logE);

  // Simulated derivation correction (approximate)
  // Oscillation of ±3% based on log(E)
  const oscillation = 1 + 0.03 * Math.sin(Math.log(E_float));
  const delta_corrected = delta_pred * oscillation;

  // Display results
  document.getElementById("predicted").textContent = delta_pred.toExponential(10);
  document.getElementById("corrected").textContent = delta_corrected.toExponential(10);
}
